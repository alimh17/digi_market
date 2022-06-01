const express = require('express');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(cors())

//! --------------- set Static files -----------------
app.use(__dirname, 'public')


//! -------------- create server -------------------
const PORT = process.env.PORT || process.env.PORT_API
const server = http.createServer(app)

//! -------------- initial database -----------------
mongoose.console(process.env.MONGO_URI).then(() => {
    server.listen(PORT, () => console.log(`server is listening ${PORT}`))
}).catch(err => {
    console.log('database connection failed')
})
