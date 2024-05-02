// import { ConsoleWriter } from "istanbul-lib-report";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import Web3 from "web3";

// let web3Object;
// let contractOjbect;
// let currentContractAddress;
// let tokenContractObject;
// let currentTokenAddress;

// const callContract = async (contractAddress, contractABI) => {
//     const web3Object = await callWeb3();
//     if (!web3Object) return console.log("there is an error");
//     currentContractAddress = contractAddress;

//     contractOjbect = new web3Object.eth.Contract(contractABI, contractAddress);
//     return contractOjbect;
// };

// export let provider = new WalletConnectProvider({
//     rpc: {
//         80001: "https://rpc-mumbai.maticvigil.com/",
//     },
//     qrcode: true,
//     qrcodeModalOptions: {
//         mobileLinks: ["metamask", "trust"],
//         desktopLinks: ["encrypted ink"],
//     },
// });

// const callWeb3 = async () => {
//     if (web3Object) {
//         // if provider is already set
//         console.log("we already have web3Object", web3Object);
//         return web3Object;
//     }

//     // if not, then set the provider as per wallet selected
//     const { ethereum, web3, BinanceChain } = window;
//     // if wallet type is metamask
//     if (ethereum && ethereum.isMetaMask) {
//         web3Object = new Web3(ethereum);
//         return web3Object;
//     } else if (ethereum) {
//         web3Object = new Web3(ethereum);
//         return web3Object;
//     } else if (web3) {
//         web3Object = new Web3(web3.currentProvider);
//         return web3Object;
//     } else {
//         console.log("You have to install a wallet first");
//     }
// };
// const isMetamaskInstalled = async (type) => {
//     //Have to check the ethereum binding on the window object to see if it's installed
//     const { ethereum, web3 } = window;
//     // alert("in metamask");
//     const result = Boolean(ethereum && ethereum.isMetaMask);

//     if (result) {
//         //metamask
//         try {
//             const accounts = await ethereum.request({
//                 method: "eth_requestAccounts",
//             });
//             return accounts[0];
//         } catch (err) {
//             console.log(err);
//             return false;
//         }
//     }
// };
// export const walletConnect = async () => {
//     try {
//         const account = await provider.enable();
//         account ? localStorage.setItem("User address", JSON.stringify()) : null;
//         console.log("Your account address", account);

//         return account[0];
//     } catch (error) {
//         // window.location.reload();
//         provider = new WalletConnectProvider({
//             rpc: {
//                 80001: "https://rpc-mumbai.maticvigil.com/",
//             },
//             qrcode: true,
//             qrcodeModalOptions: {
//                 mobileLinks: ["metamask", "trust"],
//                 desktopLinks: ["encrypted ink"],
//             },
//         });
//     }
// };

// export const ContractServices = {
//     callContract,
//     callWeb3,
//     isMetamaskInstalled,
//     walletConnect,
// };
