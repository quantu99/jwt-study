const express= require('express')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000
const db = require('./database/db')
const route = require('./routes/index')
const authRoute = require('./routes/auth')
db.connect()
app.use(morgan('combined'))
app.use(cors)
app.use(cookieParser)
app.use(express.json())
// Route
app.use('/v1/auth', authRoute)
app.listen(port, ()=> {
    console.log('server is running')
})