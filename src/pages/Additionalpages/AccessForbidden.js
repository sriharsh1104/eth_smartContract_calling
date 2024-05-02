import React from "react";
import { Row, Col } from "antd";
import ButtonCommon from "../../components/common/buttonCommon/ButtonCommon";
import lock from "../../assets/images/lock.png";
import { useNavigate } from "react-router-dom";
import "./AdditionalPagesStyle.scss";

const AccessForbidden = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Row className="astro-page">
        <Col lg={12}>
          <div className="Oxy-textsec">
            <h1 className="Num-title"> 403</h1>
            <h2 className="sub-title">Access Forbidden</h2>
            <p className="defination">
              Unfortunately you're not permitted to see this page. Lets get
              <br /> you back to YSL.IO!
            </p>
            <ButtonCommon
              className="go-back"
              title="GO BACK"
              onClick={() => navigate("/")}
            />
          </div>
        </Col>

        <Col lg={12}>
          <img fluid className="Error-img" src={lock} alt="token_icon" />
        </Col>
      </Row>
    </div>
  );
};

export default AccessForbidden;
