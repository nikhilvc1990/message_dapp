const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WelcomeDevelopers", function () {
	let contract;

	beforeEach(async function () {
		const Factory = await ethers.getContractFactory("WelcomeDevelopers");
		contract = await Factory.deploy();
		await contract.waitForDeployment();
	});

	it("returns the default via getMessage", async function () {
		const message = await contract.getMessage();
		expect(message).to.equal("Welcome Developers to Ethereum !");
	});

	it("updates the message via setMessage", async function () {
		const newMessage = "Hello, blockchain";
		const tx = await contract.setMessage(newMessage);
		await tx.wait();
		const message = await contract.getMessage();
		expect(message).to.equal(newMessage);
	});
});
