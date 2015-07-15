"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var name = "angular",
    version = 2,
    map = "func";

function tool() {
   console.log("tooling");
}

var framework = _defineProperty({
   name: name, //match the names of the variables
   version: version,
   tool: tool,
   track: function track() {
      // you can declare a function inside an object
      console.log("track");
   }
}, map, function () {
   // same as framework['func'] = function(){}
   console.log("func");
});

// Expression bodies
var odds = evens.map(function (v) {
   return v + 1;
});
var nums = evens.map(function (v, i) {
   return v + i;
});

// Statement bodies
nums.forEach(function (v) {
   if (v % 5 === 0) fives.push(v);
});

// Lexical this
var bob = {
   _name: "Bob",
   _friends: [],
   printFriends: function printFriends() {
      var _this = this;

      this._friends.forEach(function (f) {
         return console.log(_this._name + " knows " + f);
      });
   }
};

framework.tool();
framework.track();

//# sourceMappingURL=objectsInES6_es5.js.map