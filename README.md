# Weave
JavaScript API client for Weave RPC

## Usage

```
npm install --save tendermint-weave
```

```js
let client = require('tendermint-weave')('http://localhost:45512')

// create a key
let key = await client.generateKey({ name: 'matt', passphrase: 'top secret' })


// build a transaction
let tx = await client.build('send', {
  to: key.address,
  amount: { amount: 12345, denom: 'mycoin' },
  fee: { amount: 23, denom: 'atom' }
})

// now sign the tx
let signedTx = await client.sign({ tx, name: 'judd', password: 'other top secret' })

// send the signed transaction to the node to send out to other nodes
let result = await client.send(tx)

// query account
let queryResult = await query({
  type: 'account',
  data: 'sigs:BDADF167E6CF2CDF2D621E590FF1FED2787A40E0'
})
console.log(result)

/*
  {
    "height": 1170,
    "data": {
      "coins": [
        {
          "denom": "mycoin",
          "amount": 12345
        }
      ]
    }
  }
*/


```