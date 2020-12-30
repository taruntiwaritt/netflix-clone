import React from "react";
import AuthenticateUser from "./Register/AuthenticateUser";
import EnjoyTVCard from "./EnjoyTVCard";

import "./css/netflix.css";
import DownloadShowsCard from "./DownloadShowsCard";
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
            <EnjoyTVCard />
          </div>
        </div>
        <div className="ui row">
          <div className="ui column">
            <DownloadShowsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Netflix;
