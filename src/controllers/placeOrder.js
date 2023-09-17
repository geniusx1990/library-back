const client = require("../configs/database");

exports.placeOrder = async (request, response) => {
    const { user_id, book_ids } = request.body;

    try {
        for (let i = 0; i < book_ids.length; i++) {
            const book_id = book_ids[i];
            await client.query('INSERT INTO orders (user_id, book_id) VALUES ($1, $2)', [user_id, book_id]);
        }

        response.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
        console.error('Error placing the order:', error);
        response.status(500).json({ error: 'Error placing the order. Please try again.' });
    }
}
