const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

//DEPLOYED TO 0xA6196Ffb2944Ff4d56fb65dF0CcAbB7Eabb6C206

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipfs://QmaXYpHNzbeWWYe4vysf1soL1AumVovuXjmoB8TmU2xUXh/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract.
  */
  const lw3PunksContract = await ethers.getContractFactory("NFT_IPFS");

  // deploy the contract
  const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);

  await deployedLW3PunksContract.deployed();

  // print the address of the deployed contract
  console.log("NFT-IPFS Contract Address:", deployedLW3PunksContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
