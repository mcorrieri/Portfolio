import { Link } from "react-scroll";

function NavBar() {
  return (
    <div className="navbar">
      {/* <Link to="top" className="logo" smooth={true} duration={1500}></Link> */}

      <Link className="link-nav" to="aboutme" smooth={true} duration={1000}>
        Mike who?
      </Link>
      <Link className="link-nav" to="projects" smooth={true} duration={1000}>
        My Projects
      </Link>
      <Link className="link-nav" to="myinfo" smooth={true} duration={1000}>
        My Info
      </Link>
    </div>
  );
}
export default NavBar;
