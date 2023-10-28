const express = require('express')
const connectToDB = require('../../../src/db')
const getActionsModel = require('./model')
const router = express.Router()

const incrementAction = async (req, res, url, actionName) => {
    await connectToDB();

    const MongooseModelAction = await getActionsModel();

    if (!MongooseModelAction) {
        res.status(500).send('Action not defined');
        return;
    }

    try {
        const action = await MongooseModelAction.findOneAndUpdate(
            { url },
            { $inc: { [actionName]: 1 } },
            { upsert: true, new: true }
        );

        res.status(200).json({ [actionName]: action[actionName] });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

router.get('/', (req, res) => {
    res.status(200).json({ "test": "Hello" });
})

router.get('/like', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        res.status(400).send("Missing url parameter");
    } else {
        await incrementAction(req, res, url, 'like');
    }
});

module.exports = router;