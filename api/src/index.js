const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Api now running...'))

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

module.exports = app
