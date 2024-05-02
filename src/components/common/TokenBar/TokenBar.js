import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import pancake from "../../../assets/images/pancake.svg";
import apeswap from "../../../assets/images/apeswap.svg";
import biswap from "../../../assets/images/biswap.svg";
import ysl from "../../../assets/images/ysl-coin.svg";
import btc from "../../../assets/images/bitcoin.svg";

import "./TokenBar.scss";
import ButtonCommon from "../buttonCommon/ButtonCommon";

const TokenBar = (props) => {
  const TokenArea = [
    {
      img: pancake,
      token_name: "CAKE",
      paltform: "PancakeSwap",
      w_amount: "0.0000",
      b_amount: "0.000",
      grow_amount: "0.0",
      ratio: "2.00",
      daily: "1.30",
      APY: "653.76",
      TVL: "531,138",
    },
    {
      img: apeswap,
      token_name: "BANANA",
      paltform: "ApeSwap",
      w_amount: "0.0000",
      b_amount: "0.000",
      grow_amount: "0.0",
      ratio: "3.01",
      daily: "0.51",
      APY: "463.76",
      TVL: "531,138",
    },
    {
      img: biswap,
      token_name: "BSW",
      paltform: "Biswap",
      w_amount: "0.0000",
      b_amount: "0.000",
      grow_amount: "0.0",
      ratio: "3.01",
      daily: "0.28",
      APY: "100.91",
      TVL: "53,138",
    },
    {
      img: ysl,
      token_name: "YSL",
      paltform: "YSL.IO",
      w_amount: "0.0000",
      b_amount: "0.000",
      grow_amount: "0.0",
      ratio: "5.01",
      daily: "0.11",
      APY: "324.91",
      TVL: "99,138",
    },
    {
      img: apeswap,
      token_name: "BANANA",
      paltform: "ApeSwap",
      w_amount: "0.0000",
      b_amount: "0.000",
      grow_amount: "0.0",
      ratio: "3.01",
      daily: "0.51",
      APY: "463.76",
      TVL: "531,138",
    },
    // {
    //   img1: btc,
    //   img2: pancake,
    //   token_name: "BTCB-BNB",
    //   paltform: "PancakeSwap",
    //   w_amount: "0.0000",
    //   b_amount: "0.000",
    //   grow_amount: "0.0",
    //   ratio: "2.00",
    //   daily: "0.28",
    //   APY: "100.43",
    //   TVL: "$3,375.64",
    // },
  ];
  return (
    <>
      <div className="token_strips">
        <div className="container">
          {TokenArea.map((item, index) => (
            <Link className="token_bar" to="/earndetail">
              <div className="token_info">
                <div className="token_name dflx">
                  <img src={item.img} alt="token_icon" />
                  {/* <div className="create_pair">
                    <span className="coin_imgs uppr">
                      <img src={item.img1} alt="pair_icon" />
                    </span>
                    <span className="coin_imgs down">
                      <img src={item.img2} alt="pair_icon" />
                    </span>
                  </div> */}
                  <div className="token_platform">
                    <p>{item.token_name}</p>
                    <span className="swaping_paltform">{item.paltform}</span>
                  </div>
                </div>
                <div className="token_wallet dflx">
                  <div className="wallet_view">
                    <p>Wallet</p>
                    <p className="w_amount">{item.w_amount}</p>
                    <p>${item.grow_amount}</p>
                  </div>
                  <div className="wallet_view">
                    <p>Balance</p>
                    <p className="w_amount">{item.b_amount}</p>
                    <p>${item.grow_amount}</p>
                  </div>
                  <div className="wallet_view">
                    <p>Ratio</p>
                    <p className="w_amount">{item.ratio}</p>
                  </div>
                  <div className="wallet_view">
                    <p>Daily</p>
                    <p className="w_amount">{item.daily}%</p>
                  </div>
                  <div className="wallet_view">
                    <p>APY</p>
                    <p className="w_amount define_apy">{item.APY}</p>
                  </div>
                  <div className="wallet_view">
                    <p>TVL</p>
                    <p className="w_amount">${item.TVL}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className="show_deprecated">
            <button className="simple_btn"> Show deprecated vaults </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { TokenBar };
