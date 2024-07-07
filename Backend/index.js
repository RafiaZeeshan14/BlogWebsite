const express = require('express')
const dbConnect = require('./db')
const router = require('./routes/blogRoutes')
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const port = 5000

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use("/blog" , router) 

app.listen(port, async () => {
    await dbConnect()
    console.log(`Example app listening on port ${port}`)
  })