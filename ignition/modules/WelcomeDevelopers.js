const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("WelcomeDevelopers", (m) => {
  const welcomeDevelopers = m.contract("WelcomeDevelopers");
  return { welcomeDevelopers };
});