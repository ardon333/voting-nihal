require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

// If not set, it uses ours Alchemy's default API key.
// You can get your own at https://dashboard.alchemyapi.io
// const providerApiKey = process.env.ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";
// // If not set, it uses the hardhat account 0 private key.
// const deployerPrivateKey =
//   process.env.DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
// // If not set, it uses ours Etherscan default API key.
// const etherscanApiKey = process.env.ETHERSCAN_API_KEY || "DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW";

const MNEMONIC = process.env.MNEMONIC || "your mnemonic"

const MAINNET_RPC_URL =
    process.env.MAINNET_RPC_URL ||
    process.env.ALCHEMY_MAINNET_RPC_URL ||
    "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
const RINKEBY_RPC_URL =
    process.env.RINKEBY_RPC_URL || "https://eth-rinkeby.alchemyapi.io/v2/your-api-key"
const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL || "https://eth-kovan.alchemyapi.io/v2/your-api-key"
const POLYGON_MAINNET_RPC_URL =
    process.env.POLYGON_MAINNET_RPC_URL || "https://polygon-mainnet.alchemyapi.io/v2/your-api-key"
const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL || "https://eth-goerli.alchemyapi.io/v2/your-api-key"

// Your API key for Etherscan, obtain one at https://etherscan.io/
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "Your etherscan API key"
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "Your polygonscan API key"
const REPORT_GAS = process.env.REPORT_GAS || false
const OWNER_PRIVATE_KEY = process.env.OWNER_PRIVATE_KEY || ""

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
      hardhat: {
          chainId: 31337,
          allowUnlimitedContractSize: true,
      },
      localhost: {
          chainId: 31337,
          allowUnlimitedContractSize: true,
      },
      kovan: {
          url: KOVAN_RPC_URL,
          accounts:
              OWNER_PRIVATE_KEY !== undefined
                  ? [
                        OWNER_PRIVATE_KEY
                    ]
                  : [],
          saveDeployments: true,
          chainId: 42,
          blockConfirmations: 6,
      },
      rinkeby: {
          url: RINKEBY_RPC_URL,
          accounts:
              OWNER_PRIVATE_KEY !== undefined
                  ? [
                        OWNER_PRIVATE_KEY,
                    ]
                  : [],          saveDeployments: true,
          chainId: 4,
          blockConfirmations: 6,
          allowUnlimitedContractSize: true,
      },

      goerli: {
          url: GOERLI_RPC_URL,
          accounts:
              OWNER_PRIVATE_KEY !== undefined
                  ? [
                        OWNER_PRIVATE_KEY,
                    ]
                  : [],
          saveDeployments: true,
          chainId: 5,
          blockConfirmations: 6,
          allowUnlimitedContractSize: true,
      },

      mainnet: {
          url: MAINNET_RPC_URL,
          accounts:
              OWNER_PRIVATE_KEY !== undefined
                  ? [
                        OWNER_PRIVATE_KEY,
                    ]
                  : [],
          saveDeployments: true,
          chainId: 1,
          blockConfirmations: 6,
          allowUnlimitedContractSize: true,
      },
      polygon: {
          url: POLYGON_MAINNET_RPC_URL,
          accounts:
              OWNER_PRIVATE_KEY !== undefined
                  ? [
                        OWNER_PRIVATE_KEY,
                    ]
                  : [],
          saveDeployments: true,
          chainId: 137,
          blockConfirmations: 6,
          allowUnlimitedContractSize: true,
      },
  },
  etherscan: {
      apiKey: {
          rinkeby: ETHERSCAN_API_KEY,
          kovan: ETHERSCAN_API_KEY,
          polygon: POLYGONSCAN_API_KEY,
          goerli: ETHERSCAN_API_KEY,
      },
  },
  gasReporter: {
      enabled: REPORT_GAS,
      currency: "USD",
      outputFile: "gas-report.txt",
      noColors: true,
      coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  contractSizer: {
      runOnCompile: true,
  },
  solidity: {
      compilers: [
          {
              version: "0.8.7",
          },
      ],
  },
  mocha: {
      timeout: 200000, // 200 seconds max for running tests
  },
}
