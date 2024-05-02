import React from "react";
import ysl from "../../../assets/images/ysl.svg";
import "./PairList.scss";

const PairList = () => {
  return (
    <div className="pairList">
      <ul className="pairList_Head">
        <li>Name</li>
        <li className="textCenter">BUSD / bYSL</li>
        <li className="textCenter">Diff</li>
      </ul>
      <ul className="pairList_Body">
        <li>
          <div className="pairContent">
            <img src={ysl} />
            YSL.IO
          </div>
          <div className="pairContent textCenter">19.45803</div>
          <div className="pairContent textCenter">
            <span className="best">Best</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PairList;
