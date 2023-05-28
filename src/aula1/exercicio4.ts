import { books, authors } from './main'

let union = books.map((element, index) => {
    let aux : {} = {
    nome: books[index].title,
    price: books[index].price,
    category: books[index].category,
    author: authors[index].name
    }
    return aux
})

console.log(union)