const { Router } = require('express')
const { getData } = require('../controllers/tags')
const router = Router()
router.get('/tags', (req, res, next) => { getData(req, res) })
module.exports = router
