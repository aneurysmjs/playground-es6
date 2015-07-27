// this syntax allows you to easily construct objects

"use strict";

var name = "jero";
var nick = "blackend";

var user = {
   name: name,
   nick: nick
};

console.log(user);
// {name: 'jero', nick: 'blackend'}

var lang = "javascript";
var developer = { user: user, lang: lang };

console.log(developer);
// {developer:{name: 'jero, nick: 'blackend'}, lang:'javascript'}

//# sourceMappingURL=shorHandPropertiesES5.js.map