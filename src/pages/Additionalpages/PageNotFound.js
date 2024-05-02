import React from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import ButtonCommon from "../../components/common/buttonCommon/ButtonCommon";
import astro from "../../assets/images/astro.png";
import "./AdditionalPagesStyle.scss";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row className="astro-page">
        <Col lg={12}>
          <div className="Oxy-textsec">
            <h1 className="Num-title">404</h1>
            <h2 className="sub-title">You've run out of oxygen!</h2>
            <p className="defination">
              The page you're looking for is beyond our reach Let's get you back
              home to YSL.IO!
            </p>
            <ButtonCommon
              className="go-back"
              title="GO BACK"
              onClick={() => navigate("/")}
            />
          </div>
        </Col>

        <Col lg={12}>
          <img fluid className="Error-img" src={astro} alt="token_icon" />
        </Col>
      </Row>
    </>
  );
};

export default PageNotFound;
