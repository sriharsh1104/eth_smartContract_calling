import backABI from "./abis/back.json";
import wethAbi from './abis/weth.json'
import pair from "../components/ABI/pair.json"
import reflect from "./abis/reflectabi.json";

export const TokenCollection = [
  {
    tokenName: "WETH",
    symbol: "weth",
    address: "0x571b1c4C5E2b70a3CB1d7c7BC00e9A28f4A5790D",
    abi: wethAbi,
    // tsub: "0.00000 BNB",
    totalBalance: 0,
    isSelected: true,
    isNative: true,
  },
  {
    tokenName: "TOKENA",
    symbol: "TKNA",
    address: "0x3cd71b6a70F9A5920ED6154e580ef8A34429cbEd",
    abi: backABI,
    // tsub: "0.00000 BNB",
    totalBalance: 0,
    isSelected: true,
    isNative: false,
  },

  {
    tokenName: "TOKENB",
    symbol: "TKNB",
    address: "0xB0DCeAE93591544709BafDF464f87D4693C2F174",
    abi: backABI,
    // tsub: "0.00000 BNB",
    totalBalance: 0,
    isSelected: true,
    isNative: false,
  },
  {
    tokenName: "TOKENC",
    symbol: "TKNC",
    address: "0xc30127CE2FB78a092841c2039C61586A91640306",
    abi: backABI,
    tsub: "0.00000 BNB",
    tbal: "$0.00",
    isSelected: true,
    isNative: false,
  },
  {
    tokenName: "reflection",
    symbol: "RFIT",
    address: "0x06c395b121eDeAc576597F1a94D29068Ddc41A1e",
    abi: reflect,
    tsub: "0.00000 BNB",
    tbal: "$0.00",
    isSelected: true,
    isNative: false,
  },
  //tokenA-tokenB
  {
    symbol:"PAIR",
    address:"0x7fA355E98Baa545fcD3577D64A76197c387F2934",
    abi : pair
  },
  //weth-tokenA
  {
    symbol:"PAIR2",
    address:"0xc529afe2cCF82930EDD66c853429C10A3AC34eAd",
    abi : pair
  }
];
