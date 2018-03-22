const config = require('config')
const request = require('supertest')
const app = require('../app').listen()

if (config.get('mock.status')) {
  console.log()
  console.log(`Test is running on Mock server.`)
}

describe('GET /', () => {
  it('should return 200', () => {
    return request(app)
      .get('/user')
      .expect(200)
      .expect('Content-Type', /html/)
  })
})
