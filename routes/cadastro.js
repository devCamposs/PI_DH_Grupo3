const express = require('express')
const router = express.Router()

const cadastroControllers = require('../controllers/cadastroControllers')
router.get('/cadastro', cadastroControllers.index)

module.exports = router