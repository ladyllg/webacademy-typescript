import { books } from "./main"

for (let i = 0; i < books.length; i++) {
    books[i].title = books[i].title.indexOf(' ') === -1 ? books[i].title.toLocaleUpperCase() :  books[i].title.toLocaleLowerCase()
}

console.log(books)