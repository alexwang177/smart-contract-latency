// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const NameRegistry = await ethers.getContractFactory('NameRegistry');
    console.log('Deploying NameRegistry...');
    const nameReg = await NameRegistry.deploy();
    await nameReg.deployed();
    console.log('NameRegistry deployed to:', nameReg.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });