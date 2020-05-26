require('dotenv').config()

const express = require('express')
const { check, validationResult } = require('express-validator')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./utils/db')

const app = express()

app.use(cors())
app.use(express.json({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Api now running...'))

// Routes for /api/user
app.post(
  '/api/user',
  [
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Email must be valid').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
  ],
  (req, res) => {
    // Get all validation errors from middleware
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    // Check if user with email already exists
    const { email, password } = req.body
    db.query('SELECT * FROM Users', (error, results) => {
      if (error) throw error
      if (results) {
        res.status(400).json({ msg: 'A user with that email already exists.' })
      } else {
        db.query(
          'INSERT INTO Users (email, password) VALUES (?, ?)',
          [email, password],
          (error) => {
            if (error) throw error
          }
        )
        res.status(200).end()
      }
    })
  }
)

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

module.exports = app
