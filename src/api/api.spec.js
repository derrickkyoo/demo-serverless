const { TestScheduler } = require('jest')
const supertest = require('supertest')
const app = require('./api')

describe('API', () => {
  let request;

  beforeEach(() => {
    request = supertest(app)
  })

  test('should get todos', done => {
    request
      .get('/todos')
      .expect(200, (err, res) => {
        expect(res.body.data).toHaveLength(2)
        done()
      })
  })
})
