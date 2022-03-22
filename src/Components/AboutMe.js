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
        <h2>About</h2>
        <p className="description">
          Wie Gehts! My name is Michael Corrieri and I'm a Software Engineer
          based in Brooklyn. I enjoy incorporating my passion for coding with
          the communication skills and research experience I gained while
          completing my Masters of Public Health degree.<br></br>
          <br></br> As a developer I strive to continually incorporate new tools
          into my repertoire, keep up with modern technologies and best
          practices, while writing readable and reusable code. I am excited to
          build solutions and improve software for ineffective practices within
          healthcare and wellness industries.
        </p>
        <br></br>
        <br></br>
        <br></br>

        <h2>Tools I Use</h2>
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
          <img src={Ruby} className="icon" alt="portimg" height="65px" />
          <img src={Rails} className="icon" alt="portimg" height="65px" />
          <img src={PSQL} className="icon" alt="portimg" height="65px" />
          <img
            src={Mongo}
            className="icon"
            alt="portimg"
            height="65px"
            weight="65px"
          />
          <img src={Firebase} className="icon" alt="portimg" height="65px" />
          <img src={MUI} className="icon" alt="portimg" height="65px" />
          <img src={HTML} className="icon" alt="portimg" height="65px" />
          <img src={Semantic} className="icon" alt="portimg" height="65px" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
