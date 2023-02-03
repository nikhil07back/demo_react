import React from "react";
import PropTypes from 'prop-types'

function Navbar({logo}) {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-center w-100">{logo}</span>
      </div>
    </nav>
  );
}


Navbar.defaultProps = {
  logo : "Default Value"
}


Navbar.propTypes = {
  logo : PropTypes.string
}

export default Navbar;
