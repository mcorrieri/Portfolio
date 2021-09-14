import React from "react";
import { SocialIcon } from "react-social-icons";
function MyInfo() {
  return (
    <div id="myinfo">
      <h3>Let's Connect!🚀 ⬇️</h3>
      <div className="sociallinks">
        <SocialIcon url="https://www.linkedin.com/in/michaelcorrieri/" />
        <SocialIcon url="https://github.com/mcorrieri" />
        <SocialIcon url="mailto:mlcorrieri@gmail.com" />
      </div>
      <div className="footer">
        <span>Michael Corrieri ©2021</span>
      </div>
    </div>
  );
}

export default MyInfo;
