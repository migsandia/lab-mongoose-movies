'use strict'

const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

router.get('/', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find()
    res.render('celebrities/index', { celebrities })
  } catch (error) {
    next(error)
  }
})
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const celebrities = await Celebrity.findById(id)
    res.render('celebrities/show', celebrities)
  } catch (error) {
    next(error)
  }
})
module.exports = router
