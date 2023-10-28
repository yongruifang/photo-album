const express = require('express')
const serverless = require('serverless-http')
const router = require('./router');
const cors = require('cors');
import bodyParser from "body-parser";

require('dotenv').config();

const app = express()

app.use(function (req, res, next) {
    const allowedHosts = ['resilient-bienenstitch-d84d76.netlify.app', 'localhost:8888'];
    const host = req.headers.host;
    console.log(`host: ${host}`)

    if (allowedHosts.includes(host)) {
        next();
    }
    else {
        return res.status(405).send('Host Not Allowed');
    }
});
app.use(bodyParser.json({ limit: `100mb` }))
app.use(bodyParser.urlencoded({ limit: `100mb`, extended: true }));

app.use('/.netlify/functions/pictures', router)
app.use(cors())

module.exports.handler = serverless(app)