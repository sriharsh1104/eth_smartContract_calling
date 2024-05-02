import React, { useState } from "react";
import { Modal } from "antd";
import yslgradient from "../../../../assets/images/yslgradient.svg";
import xyslgradient from "../../../../assets/images/xyslgradient.svg";
import "./ClaimTokensStyle.scss";
import ClaimAmountModal from "./ClaimAmountModal";

const ClaimTokenModal = (props) => {
  // is claim amount modal
  const [isAmountVisible, setIsAmountVisible] = useState(false);
  const amountCancel = () => {
    setIsAmountVisible(false);
  };
  const amountshowModal = () => {
    setIsAmountVisible(true);
  };
  return (
    <Modal
      title="Claim Tokens"
      scrollable={true}
      visible={props.isClaimVisible}
      onCancel={props.claimCancel}
      className="connect_wallet claimModal"
      footer={null}
      centered
    >
      <ul className="claimWallet">
        <li className="claimWallet__item">
          <a className="claimWallet__wallet" onClick={amountshowModal}>
            <img src={yslgradient} alt="icon" />
            YSL Token
          </a>
        </li>
        <li>
          <a className="claimWallet__wallet claimWallet__wallet--disabled">
            <img src={xyslgradient} alt="icon" /> xYSL Token
          </a>
        </li>
      </ul>
      <ClaimAmountModal
        isAmountVisible={isAmountVisible}
        amountshowModal={amountshowModal}
        amountCancel={amountCancel}
      />
    </Modal>
  );
};

export default ClaimTokenModal;
