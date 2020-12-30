import React from "react";
import logo from "./../../../assets/Netflix_logo.png";
function HeaderTop() {
  return (
    <React.Fragment>
      <img className="register_netflix_logo" src={logo} alt="netflix logo" />
      <div className="sign-in-button">
        <button className="ui youtube button">Sign in</button>
      </div>
    </React.Fragment>
  );
}

export default HeaderTop;
