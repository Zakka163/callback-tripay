
const crypto = require('crypto');
const express = require('express'); // we use ExpressJS as example here

const privateKey = "private_key"
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.post('/callback', function (request, response) {
    const json = request.body;
    const signature = crypto.createHmac("sha256", privateKey)
        .update(json)
        .digest('hex');
    console.log(request.body,signature);
    response.json({'succes':true})
});

app.listen(5000);
                