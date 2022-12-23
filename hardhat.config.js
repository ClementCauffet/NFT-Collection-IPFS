require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
