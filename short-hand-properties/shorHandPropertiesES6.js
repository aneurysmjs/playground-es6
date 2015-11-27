'use strict';
// this syntax allows you to easily construct objects

let name = "jero";
let nick = "blackend";

let user = {
   name,
   nick
};

console.log(user);
// {name: 'jero', nick: 'blackend'}

let lang = 'javascript';
let developer = {user, lang};

console.log(developer);
// {developer:{name: 'jero, nick: 'blackend'}, lang:'javascript'}