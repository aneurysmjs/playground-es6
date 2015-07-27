'use strict';

var name = 'angular',
    version = 2;

function tool() {
   console.log('tooling');
}

var framework = {
   name: name, //match the names of the variables
   version: version,
   tool: tool,
   track: function track() {
      // valid syntax to declare a function inside an object
      console.log('track');
   } /*,
     // subscript notation not working
     func() {
       // same as framework['func'] = function(){}
       console.log('func');
     }*/
};

framework.tool();
framework.track();

//# sourceMappingURL=objectsInES5.js.map