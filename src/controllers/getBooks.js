const client = require("../configs/database");

exports.getBooks = (request, response) => {
    client.query('SELECT * FROM books ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
