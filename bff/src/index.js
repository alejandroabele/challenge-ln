const express = require('express')
const app = express()
const { port } = require('./config')
const articlesRoutes = require('./routes/articles')
const tagsRoutes = require('./routes/tags')
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.status(200)
})

app.use(express.json())
app.use('/api/v1', tagsRoutes)
app.use('/api/v1', articlesRoutes)

const server = app.listen(port, () => {
  console.log('Server listening on port', port)
})

module.exports = server
