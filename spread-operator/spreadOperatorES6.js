// allows you to take an array and spread it out into its individual items

console.log([1,2,3]);
// [1,2,3]
console.log(...[1,2,3]);
// 1,2,3

// you can push easily item into an

let a = [1,2,3];
let b = [4,5,6];

// es5 way
a.push(b);
// [1,2,3,[4,5,6]];

// es6 way
a.push(...b);
a.push(...b);
// [1,2,3,4,5,6]; // you get the individual items pushed in
// [1,2,3,4,5,6,4,5,6]; // when you duplicate

// pushing an array of parameters

function add(a,b,c) {
   let result = a + b + c;
   console.log(result);
}

add(...a);
// 6


