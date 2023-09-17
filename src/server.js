const express = require('express');
const cors = require('cors');
const app = express(); //Initialized express
const client = require("./configs/database");
client.connect((err) => {
    if (err) {

        console.log(err);
    } else {
        client.query(`
            CREATE TABLE IF NOT EXISTS "users" (
            "id" SERIAL PRIMARY KEY,
            "name" text NOT NULL,
            "email" text NOT NULL UNIQUE
            );`
        );
        client.query(`
        CREATE TABLE IF NOT EXISTS "books" (
            "id" SERIAL PRIMARY KEY,
            "title" text NOT NULL,
            "author" text NOT NULL,
            "isbn" INTEGER NOT NULL UNIQUE,
            "price" INTEGER NOT NULL,
            "availability" text NOT NULL
            );
        `)

        client.query(`
        CREATE TABLE IF NOT EXISTS orders (
            id serial PRIMARY KEY,
            user_id integer NOT NULL,
            book_id integer NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users (id),
            FOREIGN KEY (book_id) REFERENCES books (id)
        );
        `);

        console.log("database connected");
    }
})

app.use(express.json());
 const corsOptions = {
    origin: 'https://merry-kashata-3e07ca.netlify.app',
}; 

app.use(cors(corsOptions));
//app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {

    res.status(200).send("Serever started");

})

app.listen(port, () => {

    console.log(`Server started at ${port}.`);

})



const api = require("./routes/users");
const book = require("./routes/books");
const order = require("./routes/orders");

app.use("/api", api);
app.use("/api", book);
app.use("/api", order); 
