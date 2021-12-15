const OnepiToken = artifacts.require("OnepiToken");

module.exports = function (deployer) {
  deployer.deploy(OnepiToken);
};
