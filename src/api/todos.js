'use strict';

module.exports.handler = (evt, ctx, done) => {
  const todos = [
    {id: 1, name: 'create project', status: 'done'},
    {id: 2, name: 'code', status: 'open'},
  ]
  done(null, {
    statusCode: 200,
    body: JSON.stringify({data: todos})
  });
}
