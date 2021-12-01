require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth pitch smile idea globe flock shine'; 
let testAccounts = [
"0x62b612193e44896371c788a9c798ce565513a256251b0c8d9187e521363dce00",
"0x85b97c7bd2294512c661903a04eea901657e181b4801b49b0f2244874760aa4e",
"0xc5b9d5c418a6f2fb97d2e67f0b78c4634c2c38fcbbeae0441240262a2ce1761d",
"0xa048f5dfc488a3a60262e515ddfd61d3ac503c465da90f52eae6505dc11ee11d",
"0xe1a06fe8a8a515af247e93cdcea9b9e9be2645ad30a26dcd0544d03374260b1c",
"0x6eae4e67b6e8cd3e0315bd35f08ac0b8a03a989ac9f5ab838862ee7a24df29d0",
"0x5711c23ae7533e81473f37726b460c6909fd2ece9e6baa84630f214b84c00e4f",
"0xac3e46f9411a262528bbb25a2ecc3b04a8bb0a83b1b35e828c7ba8fa7d128db5",
"0x5cb416304b1b40d5fdc4465f254a84e3b07d69d4a5841f3306cc14c0918caadb",
"0x261d59e870519d0c2d349376c6a52d1c12c46db14c71ba1d8458195e81ec80c9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

