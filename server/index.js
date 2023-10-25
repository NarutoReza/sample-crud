const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app = express()
const PORT = 8080
const cors = require('cors')
app.use(cors())

app.use(bodyparser.json());

const Routes = require('./Routes/Routes')
app.use('/', Routes)

mongoose
    .connect("mongodb+srv://NarutoReza59:giveitatry@cluster0.f54xism.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Database is live!")
    });

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})