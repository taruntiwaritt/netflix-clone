import React from "react";
import StaticDescription from "./StaticDescription";

function RegisterUser() {
  return (
    <div className="register-user">
      <StaticDescription />
      <br />
      <form className="ui form get-started-form">
        <div className="ui action input email-field">
          <input type="text" placeholder="Email Address" />
          <button className="get-started-button ui red button ">
            Get Started {`>`}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterUser;
