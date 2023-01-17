const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Dappazon", () => {
  let dappazon;

  beforeEach(async () => {
    //setup accounts
    [deployer] = await ethers.getSigners();
    console.log(deployer, buyer);
    //deploy contract
    const Dappazon = await ethers.getContractFactory("Dappazon");
    dappazon = await Dappazon.deploy();
  });

  describe("Deployment", () => {
    it("has a name", async () => {
      const name = await dappazon.name();
      expect(name).to.equal("Dappazon");
    });
  });
});
