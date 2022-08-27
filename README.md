# Fork Goose Finance

Forked from Goose Finance

# Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

`yarn install`

## Configuration

Edit `.env.example` file in `.env` and update it :

`ALCHEMY_PROJECT_ID=`

`ETHERSCAN_API_KEY=`

`DEPLOYER_PRIVATE_KEY=`


## Compile Contracts

`npx hardhat compile`

## Deploy Contracts

### 1) Token
#### Deployment : 
`npx hardhat deploy-token --to <ADDRESS> --amount 50000 `

### 2) Multicall
#### Deployment :
`npx hardhat deploy-multicall --network dogechain`

### 3) Masterchef
#### Deployment :
`npx hardhat deploy-masterchef --tokenperblock 1000000000000000000 --start 1272463 `

#### Add pools :
##### BULL/WDOGE :
` npx hardhat add-pool --allocpoint 3000 --lptoken <ADDRESS> --depositfee 0 --update true `
`
##### BULL/USDC :
` npx hardhat add-pool --allocpoint 3000000000000000000000 --lptoken <ADDRESS> --depositfee 0 --update true 
`
##### BULL/ETH :
` npx hardhat add-pool --allocpoint 2100000000000000000000 --lptoken <ADDRESS> --depositfee 0 --update true 
`
##### BULL :
` npx hardhat add-pool --allocpoint 900000000000000000000 --lptoken <ADDRESS> --depositfee 0 --update true 
`
##### WDOGE (2% deposit fee) :
` npx hardhat add-pool --allocpoint 300000000000000000000 --lptoken <ADDRESS> --depositfee 20 --update true 
`
##### ETH (2% deposit fee):
` npx hardhat add-pool --allocpoint 300000000000000000000 --lptoken <ADDRESS> --depositfee 20 --update true 
`
##### USDC (2% deposit fee) :
` npx hardhat add-pool --allocpoint 300000000000000000000 --lptoken <ADDRESS> --depositfee 20 --update true 
`
### 4) Ownership token to masterchef
#### Transfers ownership:
`npx hardhat transfer-ownership --to <ADDRESS> `




