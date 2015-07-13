'use strict';

var name = "angular",
    version = 2;

function tool() {
   console.log('tooling');
}

var framework = {
   name, //match the names of the variables
   version,
   tool,
   track() {
   // you can declare a function inside an object
      console.log('track');
   },
   ["func"]: function() {
      // same as framework['func'] = function(){}
      console.log('func');
   }

};


framework.tool();
framework.track();
