// scripts/index.js
async function main () {
    // Set up an ethers contract, representing our deployed NameRegistry instance
    const address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
    const NameRegistry = await ethers.getContractFactory('NameRegistry');
    const nameReg = await NameRegistry.attach(address);

    const result = await nameReg.register('foo', 'val');
    console.log(result);

    const val = await nameReg.read('foo');
    console.log("value is: " + val);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });