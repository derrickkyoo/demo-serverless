'use strict';

module.exports.handler = (evt, ctx, done) => {
  done(null, {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({message: 'Hello World!'})
  })
}