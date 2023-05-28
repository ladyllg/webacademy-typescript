"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var categories;
(function (categories) {
    categories["romance"] = "Romance";
    categories["utopia"] = "Utopia";
    categories["thriller"] = "Thriller";
})(categories || (categories = {}));
let authors = [
    {
        name: 'Tolstoy'
    },
    {
        name: 'Vladimir Nabokov'
    },
    {
        name: 'George Orwell'
    },
    {
        name: 'Harper Lee'
    },
    {
        name: 'Jane Austen'
    },
    {
        name: 'Fernando Aramburu'
    }
];
exports.authors = authors;
let books = [
    {
        title: 'Guerra e Paz', price: 120
    },
    {
        title: 'Lolita', price: 44.89, category: categories.romance
    },
    {
        title: '1984', price: 16.7, category: categories.utopia
    },
    {
        title: 'O Sol é Para Todos', price: 45.6, category: categories.romance
    },
    {
        title: 'Orgulho e Preconceito', price: 45.6, category: categories.romance
    },
    {
        title: 'Pátria', price: 45.6, category: categories.thriller
    },
];
exports.books = books;
