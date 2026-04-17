import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <img src="../assets/logo.png" alt="Nav Logo" />
          <a className=""></a>
        </div>
        <div className="navbar-end">
          <a className="btn">Home</a>
          <a className="btn">Timeline</a>
          <a className="btn">Stats</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
