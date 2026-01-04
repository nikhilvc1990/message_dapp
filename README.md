# Welcome Developers DApp

A minimal decentralized application (DApp) that interacts with an Ethereum smart contract using MetaMask and Ethers.js.

## 🧾 Features

- Connect to MetaMask
- View the welcome message from the smart contract
- Update the message on the blockchain
- Display current contract message
- Frontend deployed on Vercel

## 🧱 Smart Contract

This frontend interacts with the following Solidity contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract WelcomeDevelopers {
    string smessage = "Welcome Developers to Ethereum !";

    function getMessage() public view returns (string memory) {
        return smessage;
    }

    function setMessage(string memory lmessage) public {
        smessage = lmessage;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

``` 

## 🚀 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/nikhilvc1990/MessageDApp.git
cd MessageDApp

``` 


### 2. Install Dependencies
```bash
npm install

``` 

### 3. Compile the Smart Contract
```bash
npx hardhat compile

``` 
### 4. Deploy the Contract Locally
First, start a local Hardhat network:
```bash
npx hardhat node

``` 
In another terminal window, deploy the contract:
```bash
npx hardhat run scripts/deploy.js --network localhost

```

Or

```bash
npx hardhat ignition deploy ./ignition/modules/WelcomeDevelopers.js --network localhost

```

After deployment, copy the deployed contract address. You'll use it in the UI (index.html).

## 🌍 Host User Interface 
### 1. Serve the UI
Open a new terminal in the root folder (MessageDApp)

### 2. Set the Contract Address
Update the contractAddress variable in your index.html file:
```bash
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

```

### 🔍 To Serve Frontend Locally:
From the root folder:
```bash
npx serve .

``` 

###  Deploy on Vercel

Go to https://vercel.com

Import the GitHub repo

Click Deploy

Your frontend will be live on a Vercel URL.

## 💡 Requirements
1. MetaMask extension installed in your browser: make sure the hardhat accounts are imported in your metamask to interact with hardhat instance
2. Node.js and npm
3. Vercel account (free)