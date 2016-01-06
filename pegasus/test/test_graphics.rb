require 'rack/test'
require 'minitest/autorun'
require 'rmagick'
ENV['RACK_ENV'] = 'test'

class GraphicsTest < Minitest::Test
  include Rack::Test::Methods

  def app
    Rack::Builder.parse_file(File.absolute_path('../config.ru', __dir__)).first
  end

  def assert_image(mode, path, columns, rows)
    url = "/images/#{mode}/#{path}"
    resp = get(url)
    assert_equal 200, resp.status, url
    image = Magick::Image.from_blob(resp.body).first
    assert_equal columns, image.columns, url if columns
    assert_equal rows, image.rows, url if rows
  end

  def test_process_image
    flag = 'avatars/flag_sphere.png'
    kids = 'homepage/kids4.png'
    kids_2x = 'homepage/kids4_2x.png'

    assert_image 'fit-320x10', flag, 10, 10
    assert_image 'fill-320x10', flag, 320, 10
    assert_image '320x10', flag, 320, 10

    # If only one dimension provided, assume a square
    assert_image 'fit-320', flag, 320, 320
    # If both dimensions are nil, assume the original image dimension
    # Assume we are returning the same resolution as we're reading.
    assert_image '', kids_2x, 2880, nil
    # Retina sources need to be downsampled for non-retina output
    assert_image '', kids, 1440, nil
    # Manipulated images always specify non-retina sizes in the manipulation string.
    assert_image '320', kids_2x, 640, nil
    # No [useful] modifications to make, return the original.
    assert_image 'x', flag, 256, nil
  end
end
