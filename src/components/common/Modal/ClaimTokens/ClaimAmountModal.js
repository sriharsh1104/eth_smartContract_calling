import React, { useState } from "react";
import { Input, Modal } from "antd";
import ButtonCommon from "../../buttonCommon/ButtonCommon";
import yslWhite from "../../../../assets/images/yslWhite.svg";
import "./ClaimTokensStyle.scss";
import ClaimingModal from "../ClaimingModal/ClaimingModal";

const ClaimAmountModal = (props) => {
  // is claiming modal
  const [isClaimingVisible, setIsClaimingVisible] = useState(false);
  const claimingCancel = () => {
    setIsClaimingVisible(false);
  };
  const claimingshowModal = () => {
    setIsClaimingVisible(true);
  };
  return (
    <Modal
      title="Claim Tokens"
      scrollable={true}
      visible={props.isAmountVisible}
      onCancel={props.amountCancel}
      className="connect_wallet claimAmountModal"
      footer={null}
      centered
    >
      <div className="claimAmount">
        <div className="claimAmount__avialable">
          <img src={yslWhite} alt="icon" />
          <div className="claimAmount__avialable__content">
            <small>Avaliable Tokens</small>100.1293 YSL
          </div>
        </div>
        <p className="claimAmount__text">
          Enter an address to trigger your claim. If the address has any
          claimable tokens it will be sent to it on submission.
        </p>
        <div className="claimAmount__wallet">
          <p>Wallet Address</p>
          <Input placeholder="0x1a2f9bf0480e0dee4592cf86460ec76388618..." />
        </div>
        <ButtonCommon
          title="Claim YSL"
          className="claimAmount__button"
          onClick={claimingshowModal}
        />
        <ClaimingModal
          isClaimingVisible={isClaimingVisible}
          claimingshowModal={claimingshowModal}
          claimingCancel={claimingCancel}
        />
      </div>
    </Modal>
  );
};

export default ClaimAmountModal;
