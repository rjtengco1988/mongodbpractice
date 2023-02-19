const path = require('path');
const dbConnect = require('../db.js');

exports.accounts = (req,res) => {
let db = dbConnect.getDb()
let accountsArray = [];


db.collection('accounts')
.find()
.sort({firstName:1})
.forEach(accounts => accountsArray.push(accounts))
.then(()=>{
    res.status(200).json(accountsArray);
})
.catch(()=>{
    res.status(500).json({error:"could not fetch the documents"})
})


}