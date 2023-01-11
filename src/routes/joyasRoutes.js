const express = require('express')
const router = express.Router()

const { getAllJoyas } = require('../controllers/joyasControllers')

router.get('/joyas', getAllJoyas)

module.exports = router