'use strict'

const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(Celebrity)
  res.render('index', { title: 'Express' })
})

module.exports = router
