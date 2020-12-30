import React from "react";

function DownloadShowsCard() {
  return (
    <div className="enjoy-tv-container">
      <div className="ui grid">
        <div className="equal width row">
          <div className="column download-card-img-container">
            <div className="download-card-animation-container">
              <img
                alt=""
                className="our-story-card-img"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              />
              <div className="our-story-card-animation">
                <div className="our-story-card-animation-image">
                  <img
                    alt=""
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  />
                </div>
                <div className="our-story-card-animation-text">
                  <div className="text-0" data-uia="">
                    Stranger Things
                  </div>
                  <div className="text-1" data-uia="">
                    Downloading...
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" column our-story-card-text">
            <h1 id="" className="card-title">
              Download your shows to watch offline.
            </h1>
            <h2 id="" className="card-subtitle">
              Save your favourites easily and always have something to watch.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadShowsCard;
