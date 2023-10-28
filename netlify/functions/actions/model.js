const mongoose = require('mongoose');

const actionsSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    like: {
        type: Number,
        default: 0
    },
    share: {
        type: Number,
        default: 0
    },
    subscribe: {
        type: Number,
        default: 0
    }
});

const getActionsModel = async () => {
    let mongooseModel = null;
    try {
        if (mongoose.models.Action) {
            mongooseModel = mongoose.model('Action'); // 'actions' collection
        } else {
            mongooseModel = mongoose.model('Action', actionsSchema); // 'actions' collection
        }
    } catch (error) {
        console.error(error);
    }
    return mongooseModel;
}

module.exports = getActionsModel;