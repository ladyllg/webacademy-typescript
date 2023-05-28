"use strict";
exports.__esModule = true;
var main_1 = require("./main");
var union = main_1.books.map(function (element, index) {
    var aux = {
        nome: main_1.books[index].title,
        price: main_1.books[index].price,
        category: main_1.books[index].category,
        author: main_1.authors[index].name
    };
    return aux;
});
console.log(union);
