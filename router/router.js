const express = require("express");
const {accounts,accountGetById,postNewAccounts,deleteAccount} = require('../controllers/accounts');

const router = express.Router();


router.get('/accounts', accounts);
router.get('/accountsprofile/:id', accountGetById);
router.post('/postnewaccounts', postNewAccounts);
router.get('/deleteaccount/:id', deleteAccount);

module.exports = router;