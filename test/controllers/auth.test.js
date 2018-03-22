const request = require('supertest')
// eslint-disable-next-line
const should = require('should')
const app = require('../../app').listen()

describe('POST /api/auth/login', () => {
  it('should return 200', () => {
    return request(app)
      .post('/api/auth/login')
      .send({
        phone: '18888888888',
        password: '123456'
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(({ body }) => {
        body.should.be.an.Object()
      })
  })
})

describe('POST /api/auth/ip', () => {
  it('should return 200', () => {
    return request(app)
      .post('/api/auth/ip')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(({ body }) => {
        body.should.be.an.Object()
      })
  })
})
