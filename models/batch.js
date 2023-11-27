const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    batchName: {
        type: String,
        required: true,
        max: 300,
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
    }],
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor',
    },
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
    }],
});

const Batch = mongoose.model('Batch', batchSchema); 

module.exports = Batch;

