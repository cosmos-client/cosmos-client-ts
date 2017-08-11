'use strict'

const request = require('axios')
const old = require('old')

// returns an async function which makes a request for the given
// HTTP method (GET/POST/DELETE/etc) and path (/foo/bar)
function req (method, path) {
  return async function (data) {
    return await this.request(method, path, data)
  }
}

// returns an async function which makes a request for the given
// HTTP method and path, which accepts an argument to be appended
// to the path (/foo/{arg})
function argReq (method, path) {
  return async function (arg, data) {
    return await this.request(method, `${path}/${arg}`, data)
  }
}

class Client {
  constructor (server = 'http://localhost:8998') {
    this.server = server
  }

  async request (method, path, data) {
    try {
      let res = await request({
        method,
        url: this.server + path,
        data
      })
      return res.data
    } catch (resError) {
      let data = resError.response.data
      if (!data) throw resError
      // server responded with error message, create an Error from that
      let error = Error(data.error)
      error.code = data.code
      throw error
    }
  }
}

let fetchAccount = argReq('GET', '/query/account')

Object.assign(Client.prototype, {
  // sign tx
  sign: req('POST', '/sign'),

  // keys
  generateKey: req('POST', '/keys'),
  listKeys: req('GET', '/keys'),
  getKey: argReq('GET', '/keys'),
  updateKey: argReq('PUT', '/keys'),
  deleteKey: argReq('DELETE', '/keys'),

  // coins
  buildSend: req('POST', '/build/send'),
  async queryAccount (address) {
    try {
      return await fetchAccount.call(this, address)
    } catch (err) {
      // if account not found, return null instead of throwing
      if (err.message.includes('account bytes are empty')) {
        return null
      }
      throw err
    }
  },

  // Tendermint RPC
  status: req('GET', '/tendermint/status')

  // TODO: separate API registration for different modules
})

module.exports = old(Client)
