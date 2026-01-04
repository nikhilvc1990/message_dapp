require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "sepolia",
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
     sepolia : {
       url: "https://sepolia.infura.io/v3/276dac1864714950b920c06b3fc7a2a7",
       accounts: ["213f8a4dfbcf2ee8dd2cb42a72ca071ce137f2c9d713f82677c95ddb5178ba16"]
     }
  }
};
