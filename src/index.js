const { latestBlock, latestPrice } = require('./data')

async function main() {
  console.log('Waiting for next block...')
  const block = await latestBlock()
  const price = await latestPrice()
  console.log()
  console.log(`Current ETH price: ${price} USD`)
  console.log()
  console.log(`Block #${block.number} found, containing transactions:`)
  block.transactions.forEach(({ hash, value }) =>
    console.log(`  - Hash: ${hash} | Value: ${value}`)
  )
  console.log()
}

main()
  .catch(err => console.err('Errored', err))
  .finally(() => process.exit(0))
