const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
    Image: {
        type: String,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        default: "图片"
    },
    Description: {
        type: String,
        default: "Info"
    },
    Tags: {
        type: String,
        default: "tags"
    }
});

const getPicturesModel = async () => {
    let mongooseModel = null;
    try {
        if (mongoose.models.Picture) {
            mongooseModel = mongoose.model('Picture');
        } else {
            mongooseModel = mongoose.model('Picture', pictureSchema);
        }
    } catch (error) {
        console.error(error);
    }
    return mongooseModel;
}

module.exports = getPicturesModel;