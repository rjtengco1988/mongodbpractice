const express = require("express");
const {accounts,accountGetById,postNewAccounts,deleteAccount,updateAccount} = require('../controllers/accounts');

const router = express.Router();


router.get('/accounts', accounts);
router.get('/accountsprofile/:id', accountGetById);
router.post('/postnewaccounts', postNewAccounts);
router.get('/deleteaccount/:id', deleteAccount);
router.patch('/updateaccount/:id', updateAccount)

module.exports = router;