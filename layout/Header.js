import Link from "next/link";
import { Accordion } from "react-bootstrap";

const Menu = ({ logo = "assets/images/logos/logo.png", menus }) => {
  return (
    <nav className="main-menu navbar-expand-lg">
      <Accordion>
        <div className="navbar-header rpy-10">
          <div className="mobile-logo">
            <Link href="/">
              <img src={logo} alt="Logo" title="Logo" />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggle"
            eventKey="navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="navbar-collapse"
          className="navbar-collapse clearfix"
        >
          {menus ? (
            <ul className="navigation clearfix">
              {menus.map((menu, i) => (
                <li key={i}>
                  <a href={menu.href}>{menu.text}</a>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="navigation clearfix">
              <li className="dropdown current">
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services-two">Services</Link>
              </li>
              <li>
                <Link href="/project-list">Projects</Link>
              </li>
              {/* For now its disabled, latter will be enabled */}
              {/* <li>
                <Link href="/contact">Contact Us</Link>
              </li> */}
              <li>
                <Link href="/blog-standard">Blog</Link>
              </li>
            </ul>
          )}
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};



const Header = ({ menus }) => {
  return (
    <header className="main-header header-one white-menu menu-absolute">
      {/* Header Upper */}
        <div className="header-upper bordered-bottom bgc-black">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <Link href="/">
            <img
              src="assets/images/logos/logo.png"
              alt="Logo"
              title="Logo"
              style={{ width: "100px" }} 
            />
              </Link>
            </div>
          </div>
          <div className="nav-outer me-lg-auto ps-lg-5 ms-xxl-4 clearfix">
            {/* Main Menu */}
              <Menu menus={menus} />
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns d-lg-flex align-items-center">
              <div className="header-number me-5 d-none d-xl-block">
                <i className="fas fa-phone me-1" />
                <a href="callto:+447424438741">+00 (44) 7424438741</a>
              </div>
              <Link
                href="contact"
                className="theme-btn btn-small color-white"
                data-hover="Let’s Talk"
              >
                <span>Let’s Talk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

export default Header;
