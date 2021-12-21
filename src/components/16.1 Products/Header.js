import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <Link to="/">Homepage</Link>
        <br />
        <Link to="/products">Products</Link>
      </>
    );
  }
}

export default Header;
