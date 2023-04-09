# Wallet Generator

This is a command-line tool that generates Ethereum wallets from seed phrases stored in a JSON file. The output is a JSON file that contains the generated wallets' addresses and private keys.

## Installation
Clone this repository to your local machine.

Install the required dependencies by running `npm install` in the project directory.

## Usage
- Place your seed phrases in a file named seeds.json in the project directory. 
- The seed phrases should be stored as an array of strings.
- Run the program by executing `node index.js.` 
- The program will read the seeds.json file and generate wallets for each seed phrase.
- The output will be written to a file named address_private.json in the project directory. 
- This file will contain an array of objects, where each object represents a wallet and contains the wallet's address and private key.

### Example
For example, if your seeds.json file contains the following seed phrases:

```
[
  "auction behind rebuild spend sentence ship crowd grass right dragon drip strategy",
  "glance question limit okay trap silent report wall focus lounge wheel message"
]
```
Running the program will generate the following output in address_private.json:

```
[
  {
    "address": "0x3b8ceA68c0231B2C68A0Fc61B8D356B17f9A64D6",
    "privateKey": "0x234c6bde42a37e05e57f2b502c68a07e347d47c25c6d8b6ca39b6df274b6e130"
  },
  {
    "address": "0x4E4c3df4e4A309F48b5784a4D3CC3b0e6D87C6dC",
    "privateKey": "0x0b7c8ee1eb6c0c6f0e3646a871d6a56b40ca29322cf76f27ba4767f8e71ee98c"
  }
]
```
