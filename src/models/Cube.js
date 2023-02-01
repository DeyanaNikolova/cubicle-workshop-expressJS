const  mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50, // check real length
    },
    imageUrl: {
        type: String,
        required: true,
        // Add http/https validation
        match: /^http[s]?/
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessories: [{
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
        }]
});


const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;