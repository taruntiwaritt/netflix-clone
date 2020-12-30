import React from "react";

function EnjoyTVContainer() {
  return (
    <div className="enjoy-tv-container">
      <div className="ui grid">
        <div className="equal width row">
          <div className="column enjoy-tv-static">
            <h1 className="enjoy-tv-title">Enjoy on your TV.</h1>
            <h2 className="enjoy-tv-subtitle">
              Watch on smart TVs, PlayStation, Xbox,
              <br /> Chromecast, Apple TV, Blu-ray players and <br />
              more.
            </h2>
          </div>
          <div className="column">
            <div className="enjoy-tv-img-container">
              <div className="enjoy-tv-animation-container">
                <img
                  alt=""
                  className="enjoy-tv-img"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  data-uia="enjoy-tv-img"
                />
                <div className="enjoy-tv-animation">
                  <video
                    className="enjoy-tv-video"
                    autoPlay
                    playsInline
                    muted
                    controls
                    loop
                  >
                    <source
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                      type="video/mp4"
                    />
                  </video>
                  <div className="enjoy-tv-animation-text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnjoyTVContainer;
