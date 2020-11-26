'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json('Hello World!')
})

module.exports.handler = serverless(app);

// module.exports.handler = (evt, ctx, done) => {
//   done(null, {
//     statusCode: 200,
//     headers: {},
//     body: JSON.stringify({message: 'Hello World!'})
//   })
// }
