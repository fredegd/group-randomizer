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
    members:[{
        name:{
            type: String,
            required: true,
            max: 300,
        }
    }],
    projects: [{
        name:{
            type: String,
            required: true,
            max: 300,
        },
        groups: [{
            members:[{
                name:{
                    type: String,
                    required: true,
                    max: 300,
                }
            }]
        }]

    }],
});

const Batch = mongoose.model('Batch', batchSchema); 

module.exports = Batch;

