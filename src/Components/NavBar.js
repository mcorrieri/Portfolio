import { Link } from "react-scroll";
// import resume from "../Components/SE-Resume.pdf";
import resume from "../Components/Resume--f.pdf";
function NavBar() {
  return (
    <div className="navbar">
      <Link className="link-nav" to="aboutme" smooth={true} duration={1000}>
        Mike Who?
      </Link>
      <Link className="link-nav" to="projects" smooth={true} duration={1000}>
        Projects
      </Link>
      <Link className="link-nav" to="myinfo" smooth={true} duration={1000}>
        Contact Info
      </Link>
      <a href={resume} className="resume-link-nav">
        Resume
      </a>
    </div>
  );
}
export default NavBar;
