const express = require('express');

const router = express.Router();

const { getBooks } = require('../controllers/getBooks');
const { createBook } = require('../controllers/createBook');

router.post('/book', createBook);
router.get('/book', getBooks);


module.exports = router;