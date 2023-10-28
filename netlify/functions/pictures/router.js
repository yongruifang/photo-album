const express = require('express')
const connectToDB = require('../../../src/db')
const getPicturesModel = require('./model')
const router = express.Router()

router.post('/add/', async (req, res) => {
    try {
        await connectToDB();
        const MongooseModelPicture = await getPicturesModel();
        const picture = await MongooseModelPicture.create(req.body);
        res.status(200).json(picture);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
})

router.get('/id/:id', async (req, res) => {
    try {
        await connectToDB();
        const MongooseModelPicture = await getPicturesModel();
        const picture = await MongooseModelPicture.findById(req.params.id);
        res.status(200).json(picture);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
})

router.get('/get', async (req, res) => {
    try {
        await connectToDB();
        const MongooseModelPicture = await getPicturesModel();
        const pictures = await MongooseModelPicture.distinct("_id")
        res.status(200).json(pictures);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
})
router.get('/hello', async (req, res) => {
    res.status(200).json({ "test": "Hello" });
})

module.exports = router;