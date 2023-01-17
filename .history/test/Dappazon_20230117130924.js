const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Dappazon", () => {
  let dappazon;
  let deployer, buyer;

  beforeEach(async () => {
    //setup accounts
    [deployer, buyer] = await ethers.getSigners();
    console.log(deployer.address, buyer.address);

    //deploy contract
    const Dappazon = await ethers.getContractFactory("Dappazon");
    dappazon = await Dappazon.deploy();
  });

  describe("Deployment", () => {
    it("Sets the owner", async () => {
      expect(await dappazon.owner()).to.equal(deployer.address);
    });
    describe("Listing", () => {
      let transaction;
      beforeEach(async () => {
        transaction = await dappazon
          .connect(deployer)
          .list(1, "Shows", "Clothing", "Image", 1, 4, 5);

        await transaction.wait();
      });

      it("retuns item attributes", async () => {});
    });
  });
});
