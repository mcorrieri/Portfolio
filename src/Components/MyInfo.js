import React from "react";
import { SocialIcon } from "react-social-icons";
function MyInfo() {
  return (
    <div id="myinfo">
      <h3>Let's Connect!🚀</h3>
      <div className="social-links">
        <SocialIcon url="https://www.linkedin.com/in/michaelcorrieri/" />
        <SocialIcon url="https://github.com/mcorrieri" />
        <SocialIcon url="mailto:mlcorrieri@gmail.com" />
      </div>
      <div className="footer">
        <h3>Michael Corrieri ©2021</h3>
      </div>
    </div>
  );
}

export default MyInfo;
