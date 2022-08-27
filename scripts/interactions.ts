import { task } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
import { Logger } from 'tslog'
import config from './config/config'
import { BullToken, MasterChef } from '../dist/types'
import { ethers } from 'ethers'

const logger: Logger = new Logger()

task('mint-token', 'Mint Bull token contract')
  .addParam("to", "address to send tokens to")
  .addParam("amount", "amount of token")
  .setAction(async (args, hre) => {
    const instance = await hre.ethers.getContractAt(`BullToken`, config.bullAddress) as BullToken;

    const res = await instance.mint(args.to, args.amount);

    logger.info(res);
  })

task('transfer-ownership', 'Transfer ownership contract')
  .addParam("to", "address to send ownership")
  .setAction(async (args, hre) => {
    const instance = await hre.ethers.getContractAt(`BullToken`, config.bullAddress) as BullToken;

    const res = await instance.transferOwnership(args.to);

    logger.info(res);
  })


task('add-pool', 'Adds Pool')
  .addParam('allocpoint', 'Pool allocation points')
  .addParam('lptoken', 'LP token for the pool')
  .addParam('depositfee', 'Deposit fee')
  .addParam('update', 'update')
  .setAction(async (args, hre) => {
    const instance = await hre.ethers.getContractAt("MasterChef", config.masterchef) as MasterChef;

    const res = await instance.add(args.allocpoint, args.lptoken, args.depositfee, args.update);

    logger.info(res);
  });

task('set-pool', 'Adds Pool')
  .addParam('pid', 'Pool id')
  .addParam('allocpoint', 'Pool allocation points')
  .addParam('depositFee', 'Deposit fee')
  .addParam('update', 'update')
  .setAction(async (args, hre) => {
    const instance = await hre.ethers.getContractAt("MasterChef", config.masterchef) as MasterChef;

    const res = await instance.set(args.pid, args.allocpoint, args.depositFee, args.update);

    logger.info(res);
  });

task('updateEmission', 'Emission par block')
  .addParam('emissionPerBlock', 'token per block')
  .setAction(async (args, hre) => {
    const instance = await hre.ethers.getContractAt("MasterChef", config.masterchef) as MasterChef;

    const res = await instance.updateEmissionRate(args.emissionPerBlock);

    logger.info(res);
  });

task('updateDev', 'Update dev address')
  .addParam('devAddr', 'dev address')
  .setAction(async (args, hre) => {
    const instance = await hre.ethers.getContractAt("MasterChef", config.masterchef) as MasterChef;

    const res = await instance.dev(args.devAddr);

    logger.info(res);
  });

task('updateFeeDev', 'Update fee dev address')
  .addParam('feeDevAddr', 'fee dev address')
  .setAction(async (args, hre) => {
    const instance = await hre.ethers.getContractAt("MasterChef", config.masterchef) as MasterChef;

    const res = await instance.setFeeAddress(args.feeDevAddr);

    logger.info(res);
  });











