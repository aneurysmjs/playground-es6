'use strict';

function _defineProperty(obj, key, value) {
   if (key in obj) {
      Object.defineProperty(obj, key, {
         value: value,
         enumerable: true,
         configurable: true,
         writable: true
      });
   } else {
      obj[key] = value;
   }
   return obj;
}

var name = 'angular',
   version = 2;

function tool() {
   console.log('tooling');
}

var framework = _defineProperty({
   name: name, //match the names of the variables
   version: version,
   tool: tool,
   track: function track() {
      // you can declare a function inside an object
      console.log('track');
   }
}, 'func', function func() {
   // same as framework['func'] = function(){}
   console.log('func');
});

framework.tool();
framework.track();
