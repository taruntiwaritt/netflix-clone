import React from "react";
import "./css/register.css";
import HeaderTop from "./HeaderTop";
import RegisterUser from "./RegisterUser";
function RegisterTab() {
  return (
    <div className="register-background">
      <div className="ui grid">
        <div className="row">
          <div className="column">
            <HeaderTop />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <RegisterUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterTab;
