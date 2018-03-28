const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bc = require('./controllers/books_controller');
app.use(bodyParser.json());
//use the api/books as a endpoint for the get request for the books.
app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put(`/api/books/:id`, bc.update);
app.delete('/api/books/:id', bc.delete);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
});
