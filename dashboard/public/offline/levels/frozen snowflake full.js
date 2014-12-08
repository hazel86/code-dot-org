var appOptions = {"levelId":"custom","sendToPhone":true,"levelGameName":"Custom","level":{"skin":"elsa","instructions":"Now let's repeat it 8 times to make a beautiful snowflake!","is_k1":"false","skip_instructions_popup":"false","disable_param_editing":"true","disable_variable_editing":"false","free_play":"false","start_direction":"180","x":"200","y":"200","slider_speed":"0.8","impressive":true,"ideal":"6","use_modal_function_editor":"false","use_contract_editor":"false","toolbox_blocks":"\u003Cxml\u003E\u003Cblock type=\"draw_move_by_constant_dropdown\"\u003E\u003Ctitle name=\"DIR\"\u003EmoveForward\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"50,100,150,200,300\"\u003E100\u003C/title\u003E\u003C/block\u003E\u003Cblock type=\"draw_turn_by_constant_dropdown\"\u003E\u003Ctitle name=\"DIR\"\u003EturnRight\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"45,60,90,120,180\"\u003E45\u003C/title\u003E\u003C/block\u003E\u003Cblock type=\"draw_turn_by_constant_dropdown\"\u003E\u003Ctitle name=\"DIR\"\u003EturnLeft\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"45,60,90,120,180\"\u003E45\u003C/title\u003E\u003C/block\u003E\u003Cblock type=\"controls_repeat_dropdown\"\u003E\u003Ctitle name=\"TIMES\" config=\"3-10\"\u003E8\u003C/title\u003E\u003C/block\u003E\u003Cblock type=\"create_a_snowflake_branch\"/\u003E\u003Cblock type=\"draw_colour\" inline=\"true\"\u003E\u003Cvalue name=\"COLOUR\"\u003E\u003Cblock type=\"colour_picker\"\u003E\u003Ctitle name=\"COLOUR\"\u003E#ffffff\u003C/title\u003E\u003C/block\u003E\u003C/value\u003E\u003C/block\u003E\u003Cblock type=\"draw_colour\" inline=\"true\"\u003E\u003Cvalue name=\"COLOUR\"\u003E\u003Cblock type=\"colour_random\"/\u003E\u003C/value\u003E\u003C/block\u003E\u003C/xml\u003E","required_blocks":"\u003Cxml\u003E\u003Cblock type=\"pick_one\"\u003E\u003Cstatement name=\"PICK\"\u003E\u003Cblock type=\"draw_turn_by_constant_dropdown\"\u003E\u003Ctitle name=\"DIR\"\u003EturnRight\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"45,60,90,120,180\"\u003E45\u003C/title\u003E\u003Cnext\u003E\u003Cblock type=\"draw_turn_by_constant_dropdown\"\u003E\u003Ctitle name=\"DIR\"\u003EturnLeft\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"45,60,90,120,180\"\u003E45\u003C/title\u003E\u003C/block\u003E\u003C/next\u003E\u003C/block\u003E\u003C/statement\u003E\u003C/block\u003E\u003Cblock type=\"controls_repeat_dropdown\"\u003E\u003Ctitle name=\"TIMES\" config=\"3-10\"\u003E8\u003C/title\u003E\u003C/block\u003E\u003C/xml\u003E","solution_blocks":"\u003Cxml\u003E\u003Cblock type=\"when_run\" deletable=\"false\" movable=\"false\"\u003E\u003Cnext\u003E\u003Cblock type=\"controls_repeat_dropdown\"\u003E\u003Ctitle name=\"TIMES\" config=\"3-10\"\u003E8\u003C/title\u003E\u003Cstatement name=\"DO\"\u003E\u003Cblock type=\"create_a_snowflake_branch\"\u003E\u003Cnext\u003E\u003Cblock type=\"draw_turn_by_constant_dropdown\"\u003E\u003Ctitle name=\"DIR\"\u003EturnRight\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"45,60,90,120,180\"\u003E45\u003C/title\u003E\u003C/block\u003E\u003C/next\u003E\u003C/block\u003E\u003C/statement\u003E\u003C/block\u003E\u003C/next\u003E\u003C/block\u003E\u003C/xml\u003E","embed":"false","disable_sharing":"false","start_blocks":"\u003Cxml\u003E\u003Cblock type=\"when_run\" deletable=\"false\" movable=\"false\"\u003E\u003Cnext\u003E\u003Cblock type=\"create_a_snowflake_branch\" deletable=\"false\" editable=\"false\"\u003E\u003Cnext\u003E\u003Cblock type=\"draw_turn_by_constant_dropdown\" deletable=\"false\"\u003E\u003Ctitle name=\"DIR\"\u003EturnRight\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"45,60,90,120,180\"\u003E???\u003C/title\u003E\u003C/block\u003E\u003C/next\u003E\u003C/block\u003E\u003C/next\u003E\u003C/block\u003E\u003C/xml\u003E","puzzle_number":1,"stage_total":20,"edit_blocks":null,"edit_blocks_success":"You successfully edited the blocks.","startBlocks":"\u003Cxml\u003E\u003Cblock type=\"when_run\" deletable=\"false\" movable=\"false\"\u003E\u003Cnext\u003E\u003Cblock type=\"create_a_snowflake_branch\" deletable=\"false\" editable=\"false\"\u003E\u003Cnext\u003E\u003Cblock type=\"draw_turn_by_constant_dropdown\" deletable=\"false\"\u003E\u003Ctitle name=\"DIR\"\u003EturnRight\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"45,60,90,120,180\"\u003E???\u003C/title\u003E\u003C/block\u003E\u003C/next\u003E\u003C/block\u003E\u003C/next\u003E\u003C/block\u003E\u003C/xml\u003E","solutionBlocks":"\u003Cxml\u003E\u003Cblock type=\"when_run\" deletable=\"false\" movable=\"false\"\u003E\u003Cnext\u003E\u003Cblock type=\"controls_repeat_dropdown\"\u003E\u003Ctitle name=\"TIMES\" config=\"3-10\"\u003E8\u003C/title\u003E\u003Cstatement name=\"DO\"\u003E\u003Cblock type=\"create_a_snowflake_branch\"\u003E\u003Cnext\u003E\u003Cblock type=\"draw_turn_by_constant_dropdown\"\u003E\u003Ctitle name=\"DIR\"\u003EturnRight\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"45,60,90,120,180\"\u003E45\u003C/title\u003E\u003C/block\u003E\u003C/next\u003E\u003C/block\u003E\u003C/statement\u003E\u003C/block\u003E\u003C/next\u003E\u003C/block\u003E\u003C/xml\u003E","sliderSpeed":0.8,"startDirection":180,"skipInstructionsPopup":false,"isK1":false,"levelBuilderRequiredBlocks":"\u003Cxml\u003E\u003Cblock type=\"pick_one\"\u003E\u003Cstatement name=\"PICK\"\u003E\u003Cblock type=\"draw_turn_by_constant_dropdown\"\u003E\u003Ctitle name=\"DIR\"\u003EturnRight\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"45,60,90,120,180\"\u003E45\u003C/title\u003E\u003Cnext\u003E\u003Cblock type=\"draw_turn_by_constant_dropdown\"\u003E\u003Ctitle name=\"DIR\"\u003EturnLeft\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"45,60,90,120,180\"\u003E45\u003C/title\u003E\u003C/block\u003E\u003C/next\u003E\u003C/block\u003E\u003C/statement\u003E\u003C/block\u003E\u003Cblock type=\"controls_repeat_dropdown\"\u003E\u003Ctitle name=\"TIMES\" config=\"3-10\"\u003E8\u003C/title\u003E\u003C/block\u003E\u003C/xml\u003E","toolbox":"\u003Cxml\u003E\u003Cblock type=\"draw_move_by_constant_dropdown\"\u003E\u003Ctitle name=\"DIR\"\u003EmoveForward\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"50,100,150,200,300\"\u003E100\u003C/title\u003E\u003C/block\u003E\u003Cblock type=\"draw_turn_by_constant_dropdown\"\u003E\u003Ctitle name=\"DIR\"\u003EturnRight\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"45,60,90,120,180\"\u003E45\u003C/title\u003E\u003C/block\u003E\u003Cblock type=\"draw_turn_by_constant_dropdown\"\u003E\u003Ctitle name=\"DIR\"\u003EturnLeft\u003C/title\u003E\u003Ctitle name=\"VALUE\" config=\"45,60,90,120,180\"\u003E45\u003C/title\u003E\u003C/block\u003E\u003Cblock type=\"controls_repeat_dropdown\"\u003E\u003Ctitle name=\"TIMES\" config=\"3-10\"\u003E8\u003C/title\u003E\u003C/block\u003E\u003Cblock type=\"create_a_snowflake_branch\"/\u003E\u003Cblock type=\"draw_colour\" inline=\"true\"\u003E\u003Cvalue name=\"COLOUR\"\u003E\u003Cblock type=\"colour_picker\"\u003E\u003Ctitle name=\"COLOUR\"\u003E#ffffff\u003C/title\u003E\u003C/block\u003E\u003C/value\u003E\u003C/block\u003E\u003Cblock type=\"draw_colour\" inline=\"true\"\u003E\u003Cvalue name=\"COLOUR\"\u003E\u003Cblock type=\"colour_random\"/\u003E\u003C/value\u003E\u003C/block\u003E\u003C/xml\u003E","initialX":200,"initialY":200,"freePlay":false,"disableParamEditing":true,"disableVariableEditing":false,"useModalFunctionEditor":false,"useContractEditor":false,"disableSharing":false},"skinId":"elsa","callouts":"null","createCallouts":"function() {\n  $.fn.qtip.zindex = 500;\n  this.callouts.every(function(callout) {\n    var selector = callout.element_id; // jquery selector.\n    if ($(selector).length \u003C= 0) { console.log(\"Couldn't find callout target.\"); return true;}\n\n    var defaultConfig = {\n      content: {\n        text: callout.localized_text,\n        title: {\n          button: $('\u003Cdiv class=\"tooltip-x-close\"/\u003E').append($('\u003Cimg src=\"/assets/x_button.png\"/\u003E'))\n        }\n      },\n      style: {\n        classes: \"\",\n        tip: {\n          width: 20,\n          height: 20\n        }\n      },\n      position: {\n        my: \"bottom left\",\n        at: \"top right\"\n      },\n      hide: {\n        event: 'click mousedown touchstart'\n      },\n      show: false // don't show on mouseover\n    };\n\n    var customConfig = $.parseJSON(callout.qtip_config);\n    var config = $.extend(true, {}, defaultConfig, customConfig);\n    config.style.classes = config.style.classes.concat(\" cdo-qtips\");\n\n    var calloutDomElement = $(selector).qtip(config);\n    calloutDomElement.qtip('show');\n\n    return true;\n  });\n}","onInitialize":"function() {\n  this.createCallouts();\n  onInitializeListeners.forEach(function(listener) {\n    listener();\n  });\n  \n}","locale":"en_us","containerId":"blocklyApp","baseUrl":"/blockly/","cacheBust":false}