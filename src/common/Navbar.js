import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

// import image from '../../assets/logo.png'

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      navbarOpen: false,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false });
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <span role="img" aria-label="book"></span>
            </Link>

            <a
              href
              role="button"
              className={`navbar-burger ${
                this.state.navbarOpen ? "is-active" : ""
              }`}
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div
            className={`navbar-menu ${
              this.state.navbarOpen ? "is-active" : ""
            }`}
          >
            <div className="navbar-end">
              <div className="PageSwitcher">
                <NavLink
                  to="/sign-in"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign In
                </NavLink>
                <NavLink
                  exact
                  to="/"
                  className="PageSwitcher__Item"
                  activeClassName="PageSwitcher__Item--Active"
                >
                  Register
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
