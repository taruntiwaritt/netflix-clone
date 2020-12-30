import React from "react";
import AuthenticateUser from "./Register/AuthenticateUser";
import EnjoyTVContainer from "./EnjoyTVContainer";

import "./css/netflix.css";
function Netflix() {
  return (
    <div className="netflix">
      <div className="ui grid">
        <div className="ui row">
          <div className="ui column">
            <AuthenticateUser />
          </div>
        </div>
        <div className="ui row">
          <div className="ui column">
            <EnjoyTVContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Netflix;
