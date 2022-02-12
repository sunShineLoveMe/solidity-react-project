require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address); 
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: "0.8.4",
//   paths: {
//     artifacts: './src/artifacts',
//   },
//   networks: {
//     hardhat: {
//       chainId: 1337
//     }
//   }
// };

module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://ropsten.infura.io/v3/cfd8a4ea57174c92a9dc9ea624489521",
      accounts: [`0xac1863290a5d95501ecd0b4601835d6e76da3bf891de48b4dae597bf2974828b`]
    }
  },
  solidity: "0.8.0",
}
