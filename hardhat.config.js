require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      accounts: {
        mnemonic: "crowd bulb arctic evolve liar sponsor appear thank asthma fame achieve toilet",
        count: 10,
        initialIndex: 0, 
        accountsBalance: "900000000000000000000000",
      },
    },
    // sepolia : {
    //   url: "YOUR_SEPOLIA_RPC_URL",
    //   accounts: ["YOUR_PRIVATE_KEY"]
    // }
  }
};
