const client = require("../configs/database");

exports.createBook = (request, response) => {
    const { title, author, isbn, price, availability } = request.body;

    client.query('INSERT INTO books (title, author, isbn, price, availability) VALUES ($1, $2, $3, $4, $5)', [title, author, isbn, price, availability], (error, results) => {
        if (error) {
            throw error
        }
        response.json({ message: `Book ${title} created` });
    })
}
