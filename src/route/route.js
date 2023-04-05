const express =require('express')
const router =express.Router()

const converter = require("../controller/controller.js")
router.get('/currencyConverter',converter.coinFun)

module.exports =router




