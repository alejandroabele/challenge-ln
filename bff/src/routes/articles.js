const { Router } = require('express')
const { getData } = require('../controllers/articles')
const router = Router()
router.get('/articles', (req, res, next) => { getData(req, res) })
module.exports = router
