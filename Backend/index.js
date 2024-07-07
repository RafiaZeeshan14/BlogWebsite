const express = require('express')
const dbConnect = require('./db')
const router = require('./routes/blogRoutes')
const cors = require("cors")
const PORT = process.env.PORT || 8000
const bodyParser = require("body-parser")
const app = express()
const port = 5000
const db = require('./db.js')


require('dotenv').config({path: '.env'})

console.log(process.env.PORT , process.env.MONGO_URI)

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

db()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/blog" , router)
 
app.listen(PORT, async () => {
    await dbConnect()
    console.log(`Example app listening on port ${port}`)
  })