'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const seeds = require('../bin/seeds.js')

mongoose.connect('mongodb://localhost/movies', {

  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE

})

const celebritySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String
  },
  catchPhrase: {
    type: Array
  }
})

const Celebrity = mongoose.model('Movie', celebritySchema)

/* Celebrity.Many(seeds)
  .then(result => {
    console.log(result)
    mongoose.connection.close()// Cerrar la conexion con la base de datos
  })
  .catch(error => {
    console.log(error)
  })
*/
module.exports = Celebrity
