const mongoose = require('mongoose')

const TodoScheme = new mongoose.Scheme({todo: {
    type: String,
    required: true,
},


})

module.exports = new mongoose.model("Todo", TodoScheme);