const express = require("express");
const {accounts,accountGetById,postNewAccounts} = require('../controllers/accounts');

const router = express.Router();

router.get('/accounts', accounts);
router.get('/accountsprofile/:id', accountGetById);
router.post('/postnewaccounts', postNewAccounts);


module.exports = router;