const express = require("express");
const {accounts,accountGetById} = require('../controllers/accounts');

const router = express.Router();

router.get('/accounts', accounts);
router.get('/accountsprofile/:id', accountGetById);


module.exports = router;