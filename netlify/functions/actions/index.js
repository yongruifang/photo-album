const express = require('express')
const serverless = require('serverless-http')
const router = require('./router');

require('dotenv').config();

const app = express()

app.use(function (req, res, next) {
    const allowedHosts = ['resilient-bienenstitch-d84d76.netlify.app', 'localhost:8888', 'https://splendid-macaron-90c7e6.netlify.app/'];
    const host = req.headers.host;
    console.log(`host: ${host}`)

    if (allowedHosts.includes(host)) {
        next();
    }
    else {
        return res.status(405).send('Host Not Allowed');
    }
});

app.use('/.netlify/functions/actions', router)

module.exports.handler = serverless(app)