'use strict'

const request = require('request-promise-native')
const old = require('old')

function apiFunc (method, rootPath, propNames = [], nPathArgs = 0) {
  return async function (...args) {
    let path = rootPath

    // add path args (e.g. 'name' in '/foo/${name}') to path
    if (nPathArgs) {
      let pathArgs = args.slice(0, nPathArgs)
      path += '/' + pathArgs.join('/')
    }

    // create JSON object from list of property names and list of values
    let data = {}
    for (let i = 0; i < propNames.length; i++) {
      data[propNames[i]] = args[i]
    }

    return await this.request(method, path, data)
  }
}

const getReq = (...args) => apiFunc('GET', ...args)
const postReq = (...args) => apiFunc('POST', ...args)
const deleteReq = (...args) => apiFunc('DELETE', ...args)

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
}

Object.assign(Client.prototype, {
  generateKey: postReq('/keys', [ 'name', 'password' ]),
  listKeys: getReq('/keys'),
  getKey: getReq('/keys', [ 'name' ], 1),
  updateKey: postReq('/keys', [ 'name', 'password', 'new_passphrase' ], 1),
  deleteKey: deleteReq('/keys', [ 'name', 'password' ], 1)
})

module.exports = old(Client)
