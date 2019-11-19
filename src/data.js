// See web3 documentation: https://web3js.readthedocs.io/en/v1.2.4/web3.html
const Web3 = require('web3')
// See RxJS documentation: https://rxjs-dev.firebaseapp.com/api
const { fromEvent } = require('rxjs')
const { first, mergeMap } = require('rxjs/operators')

const axios = require('axios').default

// This is the RPC endpoint of a mainnet ETH node
const ETHEREUM_MAINNET = 'wss://mainnet.eth.aragon.network/ws'

// See Coinbase API documentation: https://developers.coinbase.com/api/v2#prices
const PRICE_API = 'https://api.coinbase.com/v2/prices/ETH-USD/spot'

const web3 = new Web3(ETHEREUM_MAINNET)

function latestBlock() {
  return fromEvent(web3.eth.subscribe('newBlockHeaders'), 'data')
    .pipe(
      first(),
      mergeMap(({ number }) => web3.eth.getBlock(number, true))
    )
    .toPromise()
}

async function latestPrice() {
  const response = await axios.get(PRICE_API)
  const {
    data: { amount: price },
  } = response.data
  return price
}

module.exports = {
  latestBlock,
  latestPrice,
}
