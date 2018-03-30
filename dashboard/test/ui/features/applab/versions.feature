@dashboard_db_access
@as_student
Feature: App Lab Versions

Scenario: Script Level Versions
  Given I am on "http://studio.code.org/s/allthethings/stage/18/puzzle/1"
  And I rotate to landscape
  And I wait for the page to fully load
  And I ensure droplet is in block mode
  And I switch to text mode
  And I add code "// comment 1" to ace editor
  And I click selector "#runButton"
  And element ".project_updated_at" eventually contains text "Saved"

  # reloading here creates a previous version containing only comment 1
  And I reload the page
  And I wait for the page to fully load
  And I add code "// comment 2" to ace editor
  And I click selector "#runButton"
  And element ".project_updated_at" eventually contains text "Saved"

  When I click selector "#versions-header"
  And I wait until element "button:contains(Restore this Version):eq(0)" is visible
  And element "button.version-preview" is visible
  And I make all links open in the current tab
  And I click selector "button.version-preview:eq(0)" to load a new page
  And I wait for the page to fully load
  Then ace editor code is equal to "// comment 1"
  And element "#workspace-header-span" contains text "View only"

  When I am on "http://studio.code.org/s/allthethings/stage/18/puzzle/1"
  And I wait for the page to fully load
  Then ace editor code is equal to "// comment 2// comment 1"

Scenario: Project Load and Reload
  Given I am on "http://studio.code.org/projects/applab/new"
  And I rotate to landscape
  And I wait for the page to fully load
  # The initial load results in save only because this is a new project.
  And I wait for initial project save to complete

  When I reload the page
  And I wait for the page to fully load
  And I click selector "#versions-header"
  And I wait until element "button:contains(Current Version)" is visible
  Then element "button:contains(Restore this Version)" is not visible

  When I close the dialog
  # This run may nor may not trigger a save, because sometimes serializing
  # applab html causes some minor changes.
  And I press "runButton"
  And I wait until initial thumbnail capture is complete
  And I press "resetButton"
  # Triggers a save because the thumbnail url has changed
  And I click selector "#runButton" once I see it
  And element ".project_updated_at" eventually contains text "Saved"
  And I click selector "#versions-header"
  And I wait until element "button:contains(Current Version)" is visible
  Then element "button:contains(Restore this Version):eq(0)" is visible
  And element "button:contains(Restore this Version):eq(1)" is not visible
