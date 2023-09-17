const client = require("../configs/database");

exports.createUser = (request, response) => {
    const { name, email } = request.body;

    client.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        response.json({ message: `User ${name} created` });
    })
}
