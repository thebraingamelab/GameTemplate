jsPsych.plugins['game-name'] = (function(){
    
    var plugin = {};
  
    plugin.info = {
      name: 'game-name',
      parameters: {
        parameter:{
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: "Example Parameter",
          default: null,
          description: "A parameter fed into the .js from the html"
        }
      }
    }
  
    plugin.trial = function(display_element,trial){
      var dom_target = jsPsych.getDisplayElement();
      dom_target.style.height = '100%';
  
      var trial_data = {
        "data": null,
      }
    }
        return plugin;

})();