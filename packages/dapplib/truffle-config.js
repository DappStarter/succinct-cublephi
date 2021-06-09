require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict prison sugar spot tower ring remain huge give glimpse foster spatial'; 
let testAccounts = [
"0xc94aac0624fc7ea31be54942fa06974eaf429191dae7c80438a7badca609c159",
"0x2fad1f1a64a5a42dced92f0b07f704a733652ecb5ac57e3edcfa6f1005f5278f",
"0x51e3ea22eb8042bf327fab847e7309643a67f9c736d9d4f2907b95b731027e78",
"0x2564fd7a9ce1ba1106310c359bcd4023aee04309d93f32a4e12a5aee19ca6dd6",
"0x457cc898526ff14be5dccee45302430c1ab281146464c71a77a0390952ad5d13",
"0x631f7e06ec5dd1b744e43adf92c5d01cfecaad6112ab80d6c9012485d5d2c6a6",
"0x88650feeefe78f1cbe449fdb5ce2f4201a155f5e5772c975452c8c0f1f5a8332",
"0x8e0992f5f0c57a08c575ca68441435700a1ae684c12671da1c6d226c3f4be0ed",
"0xa912f05a95a7c53e400f8b0ce77d0973abcd39104059d17dbc41f377d228bf06",
"0xc95d882b502fb01f6f62edbd0df482602fca4df9925939cca46ce5d7f1bab10c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


