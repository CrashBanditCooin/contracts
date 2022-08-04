import { task } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
import { Logger } from 'tslog'
import { ethers } from 'ethers'
import { bytecode } from "../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json";


const logger: Logger = new Logger()

task('init-hash', '')
    .setAction(async (args, hre) => {
        logger.info(ethers.utils.solidityKeccak256(['bytes'], [bytecode]));

    });






