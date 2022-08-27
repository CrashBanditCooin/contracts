import { task } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
import { Logger } from 'tslog'
import config from './config/config'
import { ethers } from 'ethers'

const logger: Logger = new Logger()

task('deploy-token', 'Deploy Bull token contract')
    .setAction(async (args, hre) => {
        const token = await hre.ethers.getContractFactory(`contracts/BullToken.sol:BullToken`)
        const instance = await token.deploy()

        await instance.deployed()

        logger.info(instance.address)
    })


task("verify-token", "Verify Bull token Contract")
  .addParam("to", "address to send tokens to")
  .addParam("amount", "amount of token")
    .setAction(
        async (args, hre) => {
            await hre.run("verify:verify", {
                address: config.bullAddress,
                constructorArguments: [],
                contract: "contracts/BullToken.sol:BullToken"
            });
        }
    );


task('deploy-masterchef', 'Deploy Masterchef contract')
  .addParam("tokenperblock", "emission per block")
  .addParam("start", "startblock to active yield farming")
  .setAction(async (args, hre) => {
    const masterchef = await hre.ethers.getContractFactory(`contracts/MasterChef.sol:MasterChef`)
    const instance = await masterchef.deploy(config.bullAddress, config.devFeeAddr, config.feeAddr, args.tokenPerBlock*10^18, args.start)

    await instance.deployed()

    logger.info(instance.address)
  })


task("verify-masterchef", "Verify Masterchef Contract")
  .addParam("tokenperblock", "emission per block")
  .addParam("start", "startblock to active yield farming")
  .setAction(
    async (args, hre) => {
      await hre.run("verify:verify", {
        address: config.masterchef,
        constructorArguments: [config.bullAddress, config.devFeeAddr, config.feeAddr, args.tokenPerBlock*10^18, args.start],
        contract: "contracts/MasterChef.sol:MasterChef"
      });
    }
  );


task('deploy-multicall', 'Deploys Multicall contract')
    .setAction(async (args, hre) => {
        const multicall = await hre.ethers.getContractFactory(`contracts/Multicall.sol:Multicall`)
        const instance = await multicall.deploy()

        await instance.deployed()

        logger.info(instance.address)
    })


task("verify-multicall", "Verifies multicall Contract")
    .setAction(
        async (args, hre) => {
            await hre.run("verify:verify", {
                address: config.multicall2,
                constructorArguments: [],
                contract: "contracts/Multicall.sol:Multicall"
            });
        }
    );





