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
              <li className="dropdown">
                <Link href="/services">Services</Link>
                <ul>
                  <li>
                    <Link href="/services">Services 01</Link>
                  </li>
                  <li>
                    <Link href="/services-two">Services 02</Link>
                  </li>
                  <li>
                    <Link href="/service-details">Service Details</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <Link href="/shop">Shop</Link>
                <ul>
                  <li>
                    <Link href="/shop">All Products</Link>
                  </li>
                  <li>
                    <Link href="/product-details">Product Details</Link>
                  </li>
                  <li>
                    <Link href="/cart">Shopping Cart</Link>
                  </li>
                  <li>
                    <Link href="/checkout">Checkout</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <Link href="#">Pages</Link>
                <ul>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/faqs">faqs</Link>
                  </li>
                  <li className="dropdown">
                    <Link href="/projects">Projects</Link>
                    <ul>
                      <li>
                        <Link href="/project-grid">Project Grid</Link>
                      </li>
                      <li>
                        <Link href="/project-list">Project List</Link>
                      </li>
                      <li>
                        <Link href="/project-details">Project Details</Link>
                      </li>
                    </ul>
                    <div className="dropdown-btn">
                      <span className="far fa-angle-down" />
                    </div>
                  </li>
                  <li className="dropdown">
                    <Link href="/team">Team</Link>
                    <ul>
                      <li>
                        <Link href="/team">Team</Link>
                      </li>
                      <li>
                        <Link href="/team-details">Team Details</Link>
                      </li>
                    </ul>
                    <div className="dropdown-btn">
                      <span className="far fa-angle-down" />
                    </div>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/404">404 Error</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <Link href="/blog">blog</Link>
                <ul>
                  <li>
                    <Link href="/blog">blog Grid</Link>
                  </li>
                  <li>
                    <Link href="/blog-standard">blog Standard</Link>
                  </li>
                  <li>
                    <Link href="/blog-details">blog details</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
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
      {/*Header-Upper*/}
      <div className="header-upper bordered-bottom bgc-black">
        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/favicon.png"
                    alt="Logo"
                    title="Logo"
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
                <a href="callto:+000(123)889933">+000 (123) 88 99 33</a>
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
