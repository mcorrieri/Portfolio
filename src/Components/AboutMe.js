import ReactJS from "../Assets/react-original.svg";
import HTML from "../Assets/html5-original.svg";
import JS from "../Assets/javascript-original.svg";
import Ruby from "../Assets/ruby-original.svg";
import Rails from "../Assets/rails-original-wordmark.svg";
import PSQL from "../Assets/postgresql-original.svg";
import MUI from "../Assets/materialui-original.svg";
import Semantic from "../Assets/semantic-logo.png";
import Mongo from "../Assets/mongodb.png";
import Firebase from "../Assets/firebase.png";

function AboutMe() {
  return (
    <div id="aboutme">
      <div className="aboutmebox">
        <h2>About me</h2>
        <p className="description">
          Hey there! My name is Michael Corrieri and I'm a Software Developer
          based in New York City. After moving to New York in January 2021 and
          living with my two friends who are both Software Developers, I guess
          that beginning my own journey into programming was inevitable.{" "}
          <br></br>
          <br></br> I enjoy incorporating my new found passion for programming
          with the communication skills and research experience I gained while
          completing my Masters of Public Health degree in New Orleans. My
          scientific background, in combination with my newly acquired Full
          Stack Software Engineering education, has allowed me to work on some
          pretty cool projects and I am always ready to learn more.
        </p>
        <br></br>
        <h2>Tools I Like</h2>
        <div className="language-icons">
          <img
            src={JS}
            className="icon"
            alt="portimg"
            height="65px"
            weight="65px"
          />
          <img
            src={ReactJS}
            className="icon"
            alt="portimg"
            height="65px"
            weight="65px"
          />
          <img
            src={Mongo}
            className="icon"
            alt="portimg"
            height="65px"
            weight="65px"
          />
          <img src={Firebase} className="icon" alt="portimg" height="65px" />
          <img src={Ruby} className="icon" alt="portimg" height="65px" />
          <img src={Rails} className="icon" alt="portimg" height="65px" />
          <img src={PSQL} className="icon" alt="portimg" height="65px" />
          <img src={MUI} className="icon" alt="portimg" height="65px" />
          <img src={HTML} className="icon" alt="portimg" height="65px" />
          <img src={Semantic} className="icon" alt="portimg" height="65px" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
