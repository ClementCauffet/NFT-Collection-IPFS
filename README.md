# NFT-Collection-IPFS

NFT Collection with metadata on IPFS

Deployed on the Mumbai testnet (general idea is to explain how value is created in web3, understanding that it's community driven)

### Structure

- PNG stored on IPFS (available in this package too)
- Metadata (JSON) stored on IPFS
- NFT created from the smart-contract (Solidity)
- dApp using reactJS to interract with the smart contract
- Docker Image generated
- [WIP] dApp will be running on Flux Decentralized Cloud Infrastructure to make the project fully decentralized

Try running some of the following tasks to test the smart-contract on your own:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js --network mumbai
```

Inside the "nft-ipfs" folder, run this command to start interracting through the dApp :

```
npm start
```

**_!! This repository is still in progress. Do not use non-audited code for professionnal applications !!_**
