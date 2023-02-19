const path = require('path');
const dbConnect = require('../db.js');
const {ObjectId} = require('mongodb');


exports.accounts = (req,res) => {

let accountsArray = [];
let db = dbConnect.getDb()

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


};

exports.accountGetById = (req,res) => {

    let db = dbConnect.getDb()

    if(ObjectId.isValid(req.params.id)) {

        db.collection('accounts')
        .findOne({_id : new ObjectId(req.params.id)})
        .then(doc=>{
            res.status(200).json(doc);
        })
        .catch(() => {
            res.status(500).json({error:"Could not fetch document"})
        })


    }else{
        res.status(500).json({error:"Wrong ID Format"})
    }

    

}

exports.postNewAccounts = (req,res) => {
    let db = dbConnect.getDb()
    const newAccount = req.body;

    db.collection('accounts')
    .insertOne(newAccount)
    .then(result=>{
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json({error: "Could not insert document"});
    })

}