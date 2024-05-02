import React, { useState } from "react";
import { Modal, Row, Col } from "antd";
import "./Referral.scss";
import copy from "../../../assets/images/copy.svg";
import twitter from "../../../assets/images/twitter.svg";
import discord from "../../../assets/images/discord.svg";
import telegram from "../../../assets/images/telegram.svg";
import Vector from "../../../assets/images/Vector.svg";
import Union from "../../../assets/images/Union.svg";
import arrowDown from "../../../assets/images/arrowDown.svg";
import arrowUp from "../../../assets/images/arrowUp.svg";
import rightArrow from "../../../assets/images/rightArrow.svg";
import ReferralList from "./ReferralList";
import MyInviter from "./MyInviter";
import BorderButton from "../BorderButton/BorderButton";
import { CopyIcon } from "../../../assets/Svg/SvgImages";

const ReferralProgram = (props) => {
  const [show, setShow] = useState(false);

  const buttonShow = () => setShow(true);
  const buttonHide = () => setShow(false);

  const [isReferralVisible, setIsReferralVisible] = useState(false);
  const handleCancel2 = () => {
    setIsReferralVisible(false);
  };
  const showModal2 = () => {
    setIsReferralVisible(true);
  };

  const [isReferralListVisible, setIsReferralListVisible] = useState(false);
  const handleCancel3 = () => {
    setIsReferralListVisible(false);
  };
  const showModal3 = () => {
    setIsReferralListVisible(true);
  };

  const [isMyInviterVisible, setIsMyInviterVisible] = useState(false);
  const handleCancel5 = () => {
    setIsMyInviterVisible(false);
  };
  const showModal5 = () => {
    setIsMyInviterVisible(true);
  };
  return (
    <>
      <Modal
        title="Referral Program"
        scrollable={true}
        visible={props.isReferralVisible}
        onCancel={props.handleCancel2}
        className="connect_wallet ProgramRefrerral"
        footer={null}
        centered
      >
        <Row>
          <Col className="ReferralDesign">
            <div className={show ? "button-Hide" : "button-Show "}>
              <div className="Referra">
                <div className="Referral_code">
                  <p>https://ysl.io/?referral_a=0x9dc...</p>
                  <BorderButton className="copyBtn">
                    <CopyIcon />
                  </BorderButton>
                </div>
                <div className="ReferralsDirect">
                  <div className="referralComn">
                    <p>Direct</p>
                    <h5>500</h5>
                  </div>
                  <div className="referralComn">
                    <p>Referrals</p>
                    <h5>1000</h5>
                  </div>
                  <div className="referralComn Share">
                    <p>Share</p>
                    <ul>
                      <li>
                        <img src={twitter} alt="icon" />
                      </li>
                      <li>
                        <img src={discord} alt="icon" />
                      </li>
                      <li>
                        <img src={telegram} alt="icon" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="claimCode comnBg">
              <div className="claim">
                <h4>100,000 BUSD</h4>
                <button>Claim</button>
              </div>
            </div>
            <div className={show ? "button-Hide" : "button-Show "}>
              <div className="claimInvite">
                <div className="Claim commnInvite_Wrap comnBg">
                  <button
                    onClick={() => {
                      props.handleCancel2();
                      showModal5(true);
                    }}
                  >
                    <img src={Vector} alt="icon" />
                  </button>
                  <p>Claim Fee:</p>
                  <h6>0%</h6>
                </div>
                <div className="Invite commnInvite_Wrap comnBg">
                  <button>
                    <img src={Vector} alt="icon" />
                  </button>
                  <p>My Inviter:</p>
                  <h6
                    onClick={() => {
                      props.handleCancel2();
                      showModal5(true);
                    }}
                  >
                    78asd...dfiud
                  </h6>
                </div>
              </div>
              <div className="Forget commnInvite_Wrap comnBg">
                <div className="forgicon">
                  <img src={Union} alt="icon" />
                  <p> &nbsp; &nbsp;Forfeit Countdown:</p>
                </div>
                <h6>730 hours, 59 mins</h6>
              </div>
              <div className="ReferralStats">
                <button onClick={buttonShow}>
                  Referral Stats &nbsp;
                  <img src={arrowDown} alt="icon" />
                </button>
              </div>
            </div>
            <div className={show ? "button-Show " : "button-Hide"}>
              <div className="ReferralUping">
                <button onClick={buttonHide}>
                  Referral Stats &nbsp;
                  <img src={arrowUp} alt="icon" />
                </button>
                <div className="TotalRe">
                  <div className="RefeTotal">
                    <p>Total Referrals</p>
                    <h5>1000</h5>
                  </div>
                  <div className="RefeTotal">
                    <p>Total Earned</p>
                    <h5>100,000 BUSD</h5>
                  </div>
                </div>
                <div className="levelReferral">
                  <div className="LevelHeading">
                    <p>Level</p>
                    <p>Referrals</p>
                    <p>BUSD Earned</p>
                  </div>
                  <div className="LevelData">
                    <p>Level 1</p>
                    <p>500</p>
                    <p>60,000</p>
                  </div>
                  <div className="LevelData">
                    <p>Level 2</p>
                    <p>200</p>
                    <p>30,000</p>
                  </div>
                  <div className="LevelData">
                    <p>Level 3</p>
                    <p>300</p>
                    <p>10,000</p>
                  </div>
                </div>
                <button
                  className="ListRe"
                  onClick={() => {
                    props.handleCancel2();
                    showModal3(true);
                  }}
                >
                  Referral List &nbsp;
                  <img src={rightArrow} alt="icon" />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
      <ReferralList
        isReferralListVisible={isReferralListVisible}
        showModal3={showModal3}
        handleCancel3={handleCancel3}
        onCancel={handleCancel3}
      />
      <MyInviter
        isMyInviterVisible={isMyInviterVisible}
        showModal5={showModal5}
        handleCancel5={handleCancel5}
        onCancel={handleCancel3}
      />
    </>
  );
};

export default ReferralProgram;
