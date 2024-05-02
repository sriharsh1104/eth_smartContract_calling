import React, { useState } from "react";
import { Modal, Row, Col, Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../../assets/images/ArrowLeft.svg";
import Invite from "../../../assets/images/Invite.svg";
import "./Referral.scss";
import BorderButton from "../BorderButton/BorderButton";
import { ExternalLinkIcon } from "../../../assets/Svg/SvgImages";

const MyInviter = (props) => {
  const navigate = useNavigate();

  const [isMyInviterVisible, setIsMyInviterVisible] = useState(false);
  const handleCancel5 = () => {
    setIsMyInviterVisible(false);
  };
  const showModal5 = () => {
    setIsMyInviterVisible(true);
  };
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );


  return (
    <>
      <Modal
        title={
          <div className="refrlTitle">
            <button className="ListRe" onClick={() => navigate("/earn")}>
              <ArrowLeft className="Left_arrow" />
              &nbsp;
            </button>
            My Inviter
          </div>
        }
        scrollable={true}
        visible={props.isMyInviterVisible}
        onCancel={props.handleCancel5}
        className="connect_wallet My_inviter"
        footer={null}
        centered
      >
        <Row>
          <Col className="Invitermy">
            <div className="Referra">
              <h4>My Inviter</h4>
              <div className="Referral_code">
                <p>https://ysl.io/?referral_a=0x9dc...</p>
                <BorderButton className="copyBtn">
                  <ExternalLinkIcon />
                </BorderButton>
              </div>
              <h4>New Inviter Address</h4>
              <div className="invitedAddress">
                <Input placeholder="Address" />
              </div>
              <div className="addressUpdate">
                <button>UPDATE ADDRESS</button>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default MyInviter;
