(function () {
  'use strict';

  // Custom scripts
  document.addEventListener("DOMContentLoaded", function() {

    // Live Awesomplete Search 
  	var inputHero = document.getElementById("search-hero");
  	var inputNavbar = document.getElementById("search-navbar");

    var list = [
          { label: "Difference Between bootstrap 4 & 5", 					        value: "https://medium.com/better-programming/5-new-features-in-bootstrap-5-e122ad2386dc" },
          { label: "What is Gulp", 						        value: "https://gulpjs.com/" },
          { label: "What are my tasks", 				      value: "task.html" },
          { label: "Set of rules", 	value: "rules.html" },
          { label: "Plugin", 					        value: "plugin.html" }
        ];

    if (inputHero) {
      inputHero.addEventListener("awesomplete-selectcomplete", function(e) {
        window.location.href = e.text.value;
      }, false);
      
      new Awesomplete(inputHero, {
        autoFirst: true,
        list: list,
        replace: function(suggestion) {
          this.input.value = suggestion.label;
        }
      });
    }

    if (inputNavbar) {
      inputNavbar.addEventListener("awesomplete-selectcomplete", function(e) {
        window.location.href = e.text.value;
      }, false);
      
      new Awesomplete(inputNavbar, {
        autoFirst: true,
        list: list,
        replace: function(suggestion) {
          this.input.value = suggestion.label;
        }
      });
    }

  });

}());
