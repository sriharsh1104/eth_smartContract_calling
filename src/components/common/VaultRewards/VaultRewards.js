import React, { useState } from "react";
import ButtonCommon from "../buttonCommon/ButtonCommon";
import ClaimTokenModal from "../Modal/ClaimTokens/ClaimTokenModal";
import ysl from "../../../assets/images/ysl-coin.svg";
import AnimatePopup from "../AnimatePopup/AnimatePopup";
import "./VaultRewards.scss";

const VaultRewards = (props) => {
  // is claim token modal
  const [isClaimVisible, setIsClaimVisible] = useState(false);
  const claimCancel = () => {
    setIsClaimVisible(false);
  };
  const claimshowModal = () => {
    setIsClaimVisible(true);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isComplete, setIsComplete] = useState("PENDING");
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <div className="V-Rewards" lg={12}>
        <h3>{props.title}</h3>
        <div className="wrap_reward">
          <div className="base">
            <h2>
              <span className="icon_img">
                <img src={ysl} alt="icon" />
              </span>
              {props.amount}USDy
            </h2>
            <p>${props.value}</p>
          </div>
          <div className="reward_buttons">
            <ButtonCommon
              title="CLAIM"
              className="claimButton"
              onClick={() => {
                setTimeout(() => {
                  setIsComplete("COMPLETE");
                }, 2000);
                showModal(true);
              }}
            />
            <ButtonCommon
              title="STAKE"
              className="claimButton disabled"
              onClick={claimshowModal}
            />
            <ClaimTokenModal
              isClaimVisible={isClaimVisible}
              claimshowModal={claimshowModal}
              claimCancel={claimCancel}
            />
          </div>
        </div>
      </div>
      <AnimatePopup
        isModalVisible={isModalVisible}
        showModal={showModal}
        handleCancel={handleCancel}
        onCancel={handleCancel}
        isComplete={isComplete}
      ></AnimatePopup>
    </>
  );
};

export default VaultRewards;
