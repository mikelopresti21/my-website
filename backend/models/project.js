const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: {type: String},
    image: {type: String},
    description: {type: String},
    btnText: {type: String},
    route: {type: String},
    internal: {type: Boolean},
});

module.exports = mongoose.model('Project', projectSchema);