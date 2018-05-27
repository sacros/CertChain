var Users = artifacts.require("./Users.sol");
var CertChain = artifacts.require("./CertChain.sol");

module.exports = function(deployer) {
  deployer.deploy(Users);
  deployer.deploy(CertChain);
};
