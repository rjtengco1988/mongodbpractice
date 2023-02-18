const express = require("express");
const {accounts} = require('../controllers/accounts');

const router = express.Router();

router.get('/accounts', accounts);


module.exports = router;