const express = require("express");
const router = require('./router/router.js');
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`App is now listening on port ${port}`);
});

app.use('/',router);