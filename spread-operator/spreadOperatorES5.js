// allows you to take an array and spread it out into its individual items

"use strict";

console.log([1, 2, 3]);
// [1,2,3]
console.log.apply(console, [1, 2, 3]);
// 1,2,3

// you can push easily item into an

var a = [1, 2, 3];
var b = [4, 5, 6];

// es5 way
a.push(b);
// [1,2,3,[4,5,6]];

// es6 way
a.push.apply(a, b);
a.push.apply(a, b);
// [1,2,3,4,5,6]; // you get the individual items pushed in
// [1,2,3,4,5,6,4,5,6]; // when you duplicate

// pushing an array of parameters

function add(a, b, c) {
   var result = a + b + c;
   console.log(result);
}

add.apply(undefined, a);
// 6

//# sourceMappingURL=spreadOperatorES5.js.map