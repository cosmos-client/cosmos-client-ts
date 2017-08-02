'use strict'

const request = require('request-promise-native')
const old = require('old')

class Client {
  constructor (server = 'http://localhost:8998') {
    this.server = server
  }

  async request (method, path, data) {
    return await request({
      method,
      uri: this.server + path,
      json: data || true
    })
  }

  async generateKey (name, password) {
    return await this.request('POST', '/keys', { name, password })
  }
}

module.exports = old(Client)
