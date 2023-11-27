const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    batchName: {
        type: String,
        required: true,
        max: 300,
    },
    instructor: {
        type: String,
        required: true,
        max: 300,
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
    }],
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    }],
});

const Batch = mongoose.model('Batch', batchSchema); 

module.exports = Batch;

