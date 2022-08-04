# Uniswap V2

Forked from uniswap/v2-periphery at commit `2efa12e0f2d808d9b49737927f0e416fafa5af68`

[![Actions Status](https://github.com/Uniswap/uniswap-v2-periphery/workflows/CI/badge.svg)](https://github.com/Uniswap/uniswap-v2-periphery/actions)
[![npm](https://img.shields.io/npm/v/@uniswap/v2-periphery?style=flat-square)](https://npmjs.com/package/@uniswap/v2-periphery)

In-depth documentation on Uniswap V2 is available at [uniswap.org](https://uniswap.org/docs).

The built contract artifacts can be browsed via [unpkg.com](https://unpkg.com/browse/@uniswap/v2-periphery@latest/).

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

### 1) Router
#### Deployment : 
`npx hardhat deploy-router --network fuji`

#### Verify :
`npx hardhat verify-router --network fuji`

### 2) Multicall
#### Deployment :
`npx hardhat deploy-multicall2 --network fuji`

#### Verify :
`npx hardhat verify-multicall2 --network fuji`

### 3) Token contract 1
#### Deployment :
`npx hardhat deploy-token --to <WALLET ADDRESS> --supply 100000000 --name MockAVAX --symbol MockAVAX  --network fuji`

#### Verify :
`npx hardhat verify-token --to <WALLET ADDRESS> --supply 100000000 --name MockAVAX --symbol MockAVAX  --network fuji`

### 4) Token contract 2
#### Deployment :
`npx hardhat deploy-token --to <WALLET ADDRESS> --supply 100000000 --name MockToken --symbol MockToken --network fuji`

#### Verify :
`npx hardhat verify-token --to <WALLET ADDRESS> --supply 100000000 --name MockToken --symbol MockToken --network fuji`

## Run Tests

`yarn test`



