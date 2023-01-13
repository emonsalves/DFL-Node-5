const express = require('express')
const router = express.Router()

const { getAllJoyas, getFiltro } = require('../controllers/joyasControllers')

router.get('/joyas', getAllJoyas)
router.get('/joyas/filtros', getFiltro)
router.use((req, res) => res.status(404).send('Page Not Found'))

module.exports = router