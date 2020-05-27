const express = require('express')
const router = express.Router()

router.post('/email', (req,res) => sendEmail(req.body, res))

module.exports = router