import React from "react";
import { Link } from "react-router-dom";
import "./SocialLinks.scss";

const SocialLinks = ({ className }) => {
  return (
    <>
      <div className={`social_links ${className}`}>
        <div className="icon">
          <Link to="https://twitter.com/ysl_io/" target="_blank">
            <i className="twitter" />
          </Link>
        </div>
        <div className="icon">
          <Link to="https://discord.com/invite/ysl-io" target="_blank">
            <i className="discord" />
          </Link>
        </div>
        <div className="icon">
          <Link to="https://medium.com/ysl-io" target="_blank">
            <i className="medium" />
          </Link>
        </div>
        <div className="icon">
          <Link to="https://t.me/ysl_io/" target="_blank">
            <i className="telegram" />
          </Link>
        </div>
      </div>
    </>
  );
};

export { SocialLinks };
