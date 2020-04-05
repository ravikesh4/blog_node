const express = require('express')
const router = express.Router()
const { requireSignin, adminMiddleware } = require('../controllers/auth')
const {create} = require('../controllers/blog')


// routes 
router.post('/blog', requireSignin, adminMiddleware, create)

module.exports = router;