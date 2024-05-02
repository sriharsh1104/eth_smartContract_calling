import React, { useEffect } from "react";
import "./Home.scss";
import { ReactComponent as Intro } from "../../../assets/images/YSL-logo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Home = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="landing_page">
        <div className="welcome_area">
          <Intro />
        </div>
      </div>
    </>
  );
};

export default Home;
