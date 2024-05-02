import React from "react";
import maintenancepage from "../../assets/images/main.png";
import { SocialLinks } from "../../components/common";
import { Link } from "react-router-dom";
import "./AdditionalPagesStyle.scss";

const ScheduledRepair = () => {
  return (
    <div className="Error-repair">
      <img
        className="Error-main"
        fluid
        src={maintenancepage}
        alt="token_icon"
      />

      <h2 className="repair-title">Scheduled repairs are in progress!</h2>
      <p>
        We'll be up and running shortly, so please try again soon. Thanks for
        your patience!
      </p>

      <div className="media_links">
        <div className="icon">
          <Link to="https://t.me/ysl_io/" target="_blank">
            <i className="telegram" />
          </Link>
        </div>
        <div className="icon">
          <Link to="https://twitter.com/ysl_io/" target="_blank">
            <i className="twitter" />
          </Link>
        </div>
        <div className="icon">
          <Link to="https://twitter.com/ysl_io/" target="_blank">
            <i className="master" />
          </Link>
        </div>
        <div className="icon">
          <Link to="https://twitter.com/ysl_io/" target="_blank">
            <i className="Book" />
          </Link>
        </div>
        <div className="icon">
          <Link to="https://discord.com/invite/ysl-io" target="_blank">
            <i className="Linkin" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScheduledRepair;
