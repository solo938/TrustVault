async function main() {
    const [deployer, owner1, owner2] = await ethers.getSigners();
  
    const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
    const wallet = await MultiSigWallet.deploy(
      [owner1.address, owner2.address],
      2
    );
  
    await wallet.deployed();
  
    console.log("Multisig Wallet deployed to:", wallet.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  