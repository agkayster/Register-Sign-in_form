import React, {Component} from 'react';
import {  NavLink } from "react-router-dom";

class FormTitle extends Component {
    
    render() { 
        return (
          <div className="FormTitle">
            <NavLink
              to="/sign-in"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign In
            </NavLink>{" "}
            |{" "}
            <NavLink
              exact
              to="/"
              activeClassName="FormTitle__Link FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Register
            </NavLink>
          </div>
        );
    }
}
 
export default FormTitle;