enum categories {
    romance = "Romance",
    utopia = "Utopia",
    thriller = "Thriller"
}

type Book = {
 title: string;
 price: number;
 category?: categories;
}

type Author = {
    name: string;
}

let authors: Array<Author>  = [
    {
        name:'Tolstoy'
    },
    {
        name:'Vladimir Nabokov'
    },
    {
        name:'George Orwell'
    },
    {
        name:'Harper Lee'
    },
    {
        name:'Jane Austen'
    },
    {
        name:'Fernando Aramburu'
    }
]

let books: Array<Book> = [
    {
        title:'Guerra e Paz',price:120
    },
    {
        title:'Lolita',price:44.89, category: categories.romance
    },
    {
        title:'1984',price:16.7, category: categories.utopia
    },
    {
        title:'O Sol é Para Todos',price:45.6, category: categories.romance
    },
    {
        title:'Orgulho e Preconceito',price:45.6, category: categories.romance
    },
    {
        title:'Pátria',price:45.6, category: categories.thriller
    },
]

export { books, authors, Book, Author }