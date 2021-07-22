import React from "react";
import { SocialIcon } from "react-social-icons";
function MyInfo() {
  return (
    <div id="myinfo">
      <h3>Let's be best friends ⬇️</h3>
      <div className="sociallinks">
        <SocialIcon url="https://www.linkedin.com/in/michaelcorrieri/" />
        <SocialIcon url="https://github.com/mcorrieri" />
        <SocialIcon url="mailto:mlcorrieri@gmail.com" />
      </div>
      <div className="footer">
        <a href="https://www.youtube.com/watch?v=989-7xsRLR4">
          <span>Built and designed by ©Michael Corrieri</span>
        </a>
      </div>
    </div>
  );
}

export default MyInfo;
