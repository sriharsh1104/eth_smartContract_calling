import React, { useState } from "react";
import { Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ButtonCommon from "../../buttonCommon/ButtonCommon";
import { setIsLoggedIn } from "../../../../redux/Login/Login";
import { setWalletAddress } from "../../../../redux/Address/address";
import { CopyIcon, ExternalLinkIcon } from "../../../../assets/Svg/SvgImages";
import "./WalletDisconnect.scss";
import WalletModal from "../../../common/Modal/walletModal/WalletModal";
import { toast } from "../../Toasts/Toast";
import WalletConnectProvider from "@walletconnect/web3-provider";

export let provider = new WalletConnectProvider({
  rpc: {
    5: "https://eth-goerli.g.alchemy.com/v2/",
  },
  qrcode: true,
  qrcodeModalOptions: {
    mobileLinks: ["metamask", "trust"],
    desktopLinks: ["encrypted ink"],
  },
});

const WalletDisconnect = () => {
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.loginSlice.status);
  const waddress = useSelector((state) => state.addressSlice.walletAddress);
  const MetamaskClicked = () => {
    handleConnect1();
  };

  const handleCancel = () => {
    setIsModalVisible2(false);
  };
  
  const slicedAddress = `${waddress[0]?.slice(0, 6)}...${waddress[0]?.slice(
    waddress[0].length - 4,
    waddress[0].length
  )}`;
  const handleConnect1 = async () => {
    try {
      // const web3 = new Web3(provider);
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (account) {
        dispatch(setWalletAddress(account));
        dispatch(setIsLoggedIn(true));
        toast.success("Metamask Connected");
      }
    } catch (err) {
      toast.error("Metamask could not Connect");

      provider = new WalletConnectProvider({
        rpc: {
          5: "https://eth-goerli.g.alchemy.com/v2/",
        },
        qrcode: true,
        qrcodeModalOptions: {
          mobileLinks: ["metamask", "trust"],
          desktopLinks: ["encrypted ink"],
        },
      });
    }
  };

  const handleLogout = () => {
    toast.success("Metamask Disconnected");
    dispatch(setIsLoggedIn(false));
    dispatch(setWalletAddress(""));
  };

  const content = (
    <div className="disconnectWallet">
      <div className="walletWrap dflx">
        <div className="walletDetail">
          {/* <img src={metamask} alt="icon" /> */}
          <div className="walletName">
            <button className="boldTxt" onClick={MetamaskClicked}>
              MetaMask
            </button>

            <span className="lightTxt">{isLoggedIn ? slicedAddress : ""}</span>
          </div>
        </div>
        <ButtonCommon title="Disconnect" onClick={handleLogout} />
      </div>
      <div className="walletExtra_Wrap dflx">
        <a href="#">
          <CopyIcon />
          Copy Address
        </a>
        <a href="#">
          <ExternalLinkIcon />
          View on Bscscan
        </a>
      </div>
    </div>
  );
  return (
    <Popover placement="bottom" content={content} trigger="click">
      <ButtonCommon
        className="connect_wallet_style connected_wllet"
        // onClick={showModal}
        title={
          <span className="walletAddress">
            {isLoggedIn ? slicedAddress : "Connect"}
          </span>
        }
      />
      <WalletModal
        isModalVisible={isModalVisible2}
        handleCancel={handleCancel}
      />
    </Popover>
  );
};

export default WalletDisconnect;
