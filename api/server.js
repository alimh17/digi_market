const path = require('path');

const express = require('express');
const cors = require('cors');
const http = require('http');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express()

//! -------------- add middlewares -------------
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

//! -------------- enable files upload ------------
app.use(fileUpload({
    createParentPath: true
}))

//! --------------- set Static files -----------------

app.use("/public", express.static(path.join(__dirname, 'public')))


//! -------------- Routes -------------------------
app.use('/api/v1', require('./routes/banner'))
app.use('/api/v1', require('./routes/mobiles'))
app.use('/api/v1', require('./routes/laptops'))


//! -------------- create server -------------------
const PORT = process.env.PORT || process.env.PORT_API
const server = http.createServer(app)

//! -------------- initial database -----------------
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
}).then(() => {
    server.listen(PORT, () => console.log(`server is running on ${PORT}`))
}).catch(err => {
    console.log('database connection failed')
})
