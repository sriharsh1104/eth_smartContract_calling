import React from "react";
import { Modal } from "antd";
import "./ClaimingModal.scss";

const ClaimingModal = (props) => {
  return (
    <Modal
      scrollable={true}
      visible={props.isClaimingVisible}
      onCancel={props.claimingCancel}
      className="connect_wallet"
      footer={null}
      centered
    >
      <div className="claiming">
        <div className="claiming__content">
          <h3>Claiming Tokens</h3>
          <h2>100.1293 YSL</h2>
        </div>
        <p className="claiming__note">
          Confirm this transaction in your wallet
        </p>
      </div>
    </Modal>
  );
};

export default ClaimingModal;
