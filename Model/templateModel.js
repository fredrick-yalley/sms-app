const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    name: {
        type: String
    },
    text: {
        type: String
    }
  
});

const Template = mongoose.model('templates', templateSchema);

module.exports = Template;