[![Build Status](https://travis-ci.com/ambrosus/ambrosus-node-contracts.svg?token=nJpF4WjFNNbqCjjVquWn&branch=master)](https://travis-ci.com/ambrosus/ambrosus-node-contracts)
# ambrosus-node-contracts
Smart contracts used in AMB-NET

## Development
Install dependencies and compile contracts:
```bash
yarn
yarn build
```

First you need an RPC running. For example you may want to start ganache-cli with running
```bash
yarn global add ganache-cli
ganache-cli -e 1000000
```

Next you need to set environment variables for the RPC address and private key. In case you run ganache copy one of the available private keys and set
```bash
export WEB3_RPC=http://localhost:8545
export WEB3_NODEPRIVATEKEY="COPIED_PRIVATE_KEY"
```

Then deploy contracts and save outcome to an environment file
```bash
yarn task deploy --save <path to file>
```

You are ready to play.

The following administrative tasks are available: 
```bash
yarn task deploy
yarn task whitelist add [address] [node type] [required stake/deposit]
yarn task whitelist remove [address]
yarn task whitelist check
yarn task stake deposit [role] [amount]
yarn task stake release
yarn task stake check
yarn task upload [bundleId] [storagePeriods]
```

## Testing
To install dependencies call:
```bash
yarn
```

To compile contracts:
```bash
yarn build
```

To run tests:
```bash
yarn test:units
yarn test:tasks
```

Alternatively, to compile contracts and test:
```bash
yarn test:all
```

To check gas consumption of common operations
```bash
yarn test:gasbenchmark
```

## Production and deployment

Before distributing the compiled contract files you should strip away unnecessary fields: 

```bash
yarn strip
```
