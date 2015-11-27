'use strict';

let name = "angular",
    version = 2,
    invoke = 'tool';


var framework = {
   name, //match the names of the variables
   version,
   [invoke]: () => { // same as framework['tool'] = function(){}
      console.log('--- jentoo love tooling ---');
   },
   track() {// valid syntax to declare a function inside an object
      console.log('track');
   }
};

framework.tool();
framework.track();
