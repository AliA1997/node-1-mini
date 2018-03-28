let books = [];
let id = 0;
//The properties of the book
//id, title, author properties.
module.exports = {
    create: (req, res) => {
        let { title, author } = req.body;
        let book = { 
            title,
            author, 
            id
        }
        books.push(book);
        id++;
        res.status(200).send(books);
    },
    read: (req, res) => {
        res.status(200).send(books)
    },
    update: (req, res) => {
        let { title, author} = req.body;
        let { id } = req.params;
        books[id] = Object.assign({
            title: title || books[id].title,
            author: author || books[id].author,
            id,
        });
        res.status(200).send(books);
    },
    delete: (req, res) => {
        let { id } = req.params;
        books.splice(id, 1);
        res.status(200).send(books);
    }
}