'use strict'

const express = require("express")
const typeController = require('../controllers/eventtype.controller')
const md_authentication = require('../middlewares/authenticated')

var api = express.Router()

api.post('/addEventType', md_authentication.ensureAuth, typeController.addEventType)
api.put('/editEventType/:idType', md_authentication.ensureAuth, typeController.editEventType)

module.exports = api