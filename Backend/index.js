const express = require('express')
// const dbConnect = require('./db')
const router = require('./routes/blogRoutes')
const cors = require("cors")
const PORT = process.env.PORT || 5000
const bodyParser = require("body-parser")
const app = express()
const db = require('./db')

db()

require('dotenv').config({path: '.env'})

console.log(process.env.PORT , process.env.MONGO_URI)

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/blog" , router)
 
app.listen(PORT, async () => {
    console.log(`Example app listening on port ${port}`)
  })