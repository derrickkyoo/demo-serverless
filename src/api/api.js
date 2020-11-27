'use strict';

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.get('/todos', (req, res) => {
  const todos = [
    {id: 1, name: 'create project', status: 'done'},
    {id: 2, name: 'code', status: 'open'},
  ]
  res.json({data: todos})
})

app.get('/todos/:todo', (req, res) => {
  res.json({id: 2, name: 'code', status: 'open'})
})

module.exports = app

// module.exports.handler = (evt, ctx, done) => {
//   done(null, {
//     statusCode: 200,
//     headers: {},
//     body: JSON.stringify({message: 'Hello World!'})
//   })
// }
