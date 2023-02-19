const express = require("express");
const router = require('./router/router.js');
const {connectToDb,getDb} = require('./db.js');
const dotenv = require("dotenv");
const app = express();
dotenv.config();


connectToDb((err) => {

    if(!err){
        const port = process.env.PORT || 8080;
        app.listen(port, () => {console.log(`node js listening to port ${port}`)})
        console.log("DB CONNECTED");
    }


})
app.use(express.json());
app.use('/',router);