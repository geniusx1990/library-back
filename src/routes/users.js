const express = require('express');

const router = express.Router();

const { createUser } = require('../controllers/createUser');
const { getUsers } = require('../controllers/getUsers');

router.post('/user', createUser);
router.get('/user', getUsers);


module.exports = router;