

// const MetaMaskconn = () => {

//     if (window.ethereum && window.ethereum.isMetaMask) {
//         console.log("MetaMask Here!");

//         const data = window.ethereum
//             .request({ method: "eth_requestAccounts" })
//             .then((result) => {
//                 console.log("lllllllllllllll", result);

//                 return result[0];
//             })
//             .catch((error) => {

//             });
//         return data;
//     } else {
//         console.log("Need to install MetaMask");
//     }
// };
// export default MetaMaskconn;