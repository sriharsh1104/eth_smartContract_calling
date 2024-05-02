import { useEffect, useState } from "react";
import './App.css';
import { StakeAddress } from "./constant";
import StakeAbi from "../src/Abi/stake.json"
 
const App: React.FC = () => {
 const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
 const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);
 const [contractInstance, setContractInstance] = useState<any | null>(null);
 
 useEffect(() => {
   if((window as any).ethereum){
     //check if Metamask wallet is installed
     setIsMetamaskInstalled(true);
     const web3 = new (window as any).Web3((window as any).ethereum);
     const contract = new web3.eth.Contract(StakeAbi, StakeAddress);
     setContractInstance(contract);

   }
 },[]);
 
 //Does the User have an Ethereum wallet/account?
 async function connectMetamaskWallet(): Promise<void> {
   //to get around type checking
   (window as any).ethereum
     .request({
         method: "eth_requestAccounts",
     })
     .then((accounts : string[]) => {
       setEthereumAccount(accounts[0]);
     })
     .catch((error: any) => {
         alert(`Something went wrong: ${error}`);
     });
 }
 async function callContractFunction(): Promise<void> {
  try {
    // Make sure there is a connected Ethereum account
    if (!ethereumAccount) {
      throw new Error("No Ethereum account connected");
    }
    // Make sure there is a contract instance
    if (!contractInstance) {
      throw new Error("Contract instance not initialized");
    }
    // Call your contract function here, replace `methodName` with the actual method name
    const result = await contractInstance.methods.methodName().send({ from: ethereumAccount });
    console.log("Transaction successful", result);
  } catch (error) {
    alert(`Something went wrong: ${error}`);
  }
}
 
 if (ethereumAccount === null) {
   return (
     <div className="App App-header">
       {
         isMetamaskInstalled ? (
           <div>
             <button onClick={connectMetamaskWallet}>Connect Your Metamask Wallet</button>
           </div>
         ) : (
           <p>Install Your Metamask wallet</p>
         )
       }
 
     </div>
   );
 }
 
 
 return (
   <div className="App">
     <header className="App-header">
       <p>
         ETH wallet connected as: {ethereumAccount}
       </p>
       <button onClick={callContractFunction}>Call Contract Function</button>
     </header>
   </div>
 );
}
 
export default App;