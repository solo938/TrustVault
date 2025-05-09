const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiSigWallet", function () {
  let MultiSigWallet;
  let wallet;
  let owner1, owner2, owner3, recipient;

  beforeEach(async function () {
    [owner1, owner2, owner3, recipient] = await ethers.getSigners();

    MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");

    // ✅ Deploy the contract and assign the result to `wallet`
    wallet = await MultiSigWallet.deploy(
      [owner1.address, owner2.address, owner3.address],
      2 // 2 out of 3 confirmations required
    );

    // ✅ Wait until deployment is complete
    await wallet.waitForDeployment();

    // ✅ Fund the wallet with 1 ETH from owner1
    await owner1.sendTransaction({
      to: await wallet.getAddress(),
      value: ethers.parseEther("1.0"),
    });
  });

  it("should allow submission and execution of a transaction after enough confirmations", async function () {
    const txData = "0x";
    const txAmount = ethers.parseEther("0.1");

    // Submit by owner1
    await wallet.connect(owner1).submitTransaction(
      recipient.address,
      txAmount,
      txData
    );

    // Confirm by owner1
    await wallet.connect(owner1).confirmTransaction(0);

    // Confirm by owner2 (should execute now)
    await wallet.connect(owner2).confirmTransaction(0);

    const tx = await wallet.getTransaction(0);
    expect(tx.executed).to.be.true;
    expect(tx.confirmations).to.equal(2);
  });
});
