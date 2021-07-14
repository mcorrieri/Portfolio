import React from "react";
import { SocialIcon } from "react-social-icons";
function MyInfo() {
  return (
    <div id="myinfo">
      <h3>Avast! Here be my links yarg! 🏴‍☠️</h3>
      <div>
        <SocialIcon url="https://www.linkedin.com/in/michaelcorrieri/" />
        <SocialIcon url="https://github.com/mcorrieri" />
        <SocialIcon url="mailto:mlcorrieri@gmail.com" />
      </div>
      <div className="footer">
        <p>Built and designed by ©Michael Corrieri</p>
      </div>
    </div>
  );
}

export default MyInfo;
