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
router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.post('/', async (req, res, next) => {
  const { _id, name, occupation, catchPhrase } = req.body
  const celebrity = { name, occupation, catchPhrase }
  try {
    if (_id) {
      await Celebrity.findByIdAndUpdate(_id, celebrity)
    } else {
      await Celebrity.create(celebrity)
    }
    res.redirect('/celebrities')
  } catch (error) {
    res.redirect('/celebrities/new')
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
