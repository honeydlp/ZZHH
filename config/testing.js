module.exports = {
  env: 'testing',
  app: {
    debug: false,
    port: 8789,
    keys: ['keys', 'keykeys'],
    sessionKey: 'session-key',
    solt: 'abc'
  },
  mock: {
    status: false,
    failureRate: 0,
    session: {
      userId: 1,
      hash: 'e511341dc05782269d3d859b5ff3939b'
    }
  },
  redis: {
    host: '127.0.0.1',
    port: '6379'
  },
  proxy: {
    host: 'http://127.0.0.1',
    port: '8080',
    prefix: '/api'
  }
}
