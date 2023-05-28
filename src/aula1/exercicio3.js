"use strict";
exports.__esModule = true;
var main_1 = require("./main");
for (var i = 0; i < main_1.books.length; i++) {
    main_1.books[i].title = main_1.books[i].title.indexOf(' ') === -1 ? main_1.books[i].title.toLocaleUpperCase() : main_1.books[i].title.toLocaleLowerCase();
}
console.log(main_1.books);
