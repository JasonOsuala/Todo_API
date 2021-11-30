const express = require('express')
const mongoose = require('mongoose')

const app = express ()

// connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/todo_express', {
    useNewUrlParser: true,

    useUnifiedTopology: true,
});

// middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs");

// routes
app.use(require('./routes/index'))


//server
app.listen (4000, () => console.log("Server started listening on port :4000"))
