import { Link } from "react-scroll";
import { Document } from "react-pdf";

function NavBar() {
  return (
    <div className="navbar">
      {/* <Link to="top" className="logo" smooth={true} duration={1500}></Link> */}

      <Link className="link-nav" to="aboutme" smooth={true} duration={1000}>
        Mike Who?
      </Link>
      <Link className="link-nav" to="projects" smooth={true} duration={1000}>
        Projects
      </Link>
      <Link className="link-nav" to="myinfo" smooth={true} duration={1000}>
        Contact Info
      </Link>
      <Link
        className="link-nav"
        to="src/Components/Software-Engineering-Resume-MC.pdf"
        smooth={true}
        duration={1000}
      >
        Resume
      </Link>
    </div>
  );
}
export default NavBar;
