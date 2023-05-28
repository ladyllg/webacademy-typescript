"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
for (let i = 0; i < main_1.books.length; i++) {
    main_1.books[i].title = main_1.books[i].title.indexOf(' ') === -1 ? main_1.books[i].title.toLocaleUpperCase() : main_1.books[i].title.toLocaleLowerCase();
}
console.log(main_1.books);
