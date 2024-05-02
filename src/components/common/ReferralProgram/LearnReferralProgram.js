import React from "react";
import { Modal } from "antd";
import Referral from "../../../assets/images/referral.svg";
import "./Referral.scss";
import ButtonCommon from "../buttonCommon/ButtonCommon";

const LearnReferralProgram = (props) => {
  return (
    <Modal
      title="Referral Program"
      scrollable={true}
      visible={props.isLearnRfrlVisible}
      onCancel={props.LearnRfrlhandleCancel}
      className="connect_wallet My_inviter"
      footer={null}
      centered
    >
      <div className="text-center learnRefferal_Content">
        <img src={Referral} />
        <p>
          Refer your friends and family and earn 4% as BUSD reflections on their
          bYSL and USDy transactions and an extra 5% from their downline!
        </p>
        <ButtonCommon title="LEARN MORE" />
      </div>
    </Modal>
  );
};

export default LearnReferralProgram;
