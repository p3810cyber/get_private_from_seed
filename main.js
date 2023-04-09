const ethers = require('ethers');
const fs = require('fs');

const seeds = JSON.parse(fs.readFileSync('seeds.json'));

const addressPrivate = [];

for (let seed of seeds) {
  const wallet = ethers.Wallet.fromPhrase(seed);
  const address = wallet.address;
  const privateKey = wallet.privateKey;
  addressPrivate.push({address, privateKey});
}

fs.writeFileSync('address_private.json', JSON.stringify(addressPrivate, null, 2));
