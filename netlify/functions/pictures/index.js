const express = require('express')
const serverless = require('serverless-http')
const router = require('./router');
const cors = require('cors');
import bodyParser from "body-parser";

require('dotenv').config();

const app = express()

app.use(function (req, res, next) {
    const allowedHosts = ['resilient-bienenstitch-d84d76.netlify.app', 'localhost:8888', 'splendid-macaron-90c7e6.netlify.app'];
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
router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(cors())
app.use('/.netlify/functions/pictures', router)

module.exports.handler = serverless(app)