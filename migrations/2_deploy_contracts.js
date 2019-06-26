var NLFToken = artifacts.require("./NLFToken.sol");

module.exports = function(deployer) {
  deployer.deploy(NLFToken);
};
