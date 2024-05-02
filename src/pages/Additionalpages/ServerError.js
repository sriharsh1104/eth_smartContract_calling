import React from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import ButtonCommon from "../../components/common/buttonCommon/ButtonCommon";
import plug from "../../assets/images/plug.png";
import "./AdditionalPagesStyle.scss";

const ServerError = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Row className="astro-page">
        <Col lg={12}>
          <div className="Oxy-textsec">
            <h1 className="Num-title">500</h1>
            <h2 className="sub-title">Internal Server Error</h2>
            <p className="defination">
              The server encountered error and couldn’t complete your request.
              Please try back later.
            </p>
            <ButtonCommon
              className="go-back"
              title="GO BACK"
              onClick={() => navigate("/")}
            />
          </div>
        </Col>

        <Col lg={12}>
          <img fluid className="Error-img" src={plug} alt="token_icon" />
        </Col>
      </Row>
    </div>
  );
};

export default ServerError;
