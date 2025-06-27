import React from "react";
import reward from '../assets/research.png';

function Rewards() {
  return (
    <div>
          <section className="section-wrap" id="bannersection">
              <div className="section-container-full">
                  <div className="banner_images_2">
                      <div className="banner_images_desk">
                          <img 
                              src={reward} 
                              alt="Contact Banner"
                              className="desktop_banner"
                          />
                      </div>
                  </div>
              </div>
          </section>

    </div>
  );
};

export default Rewards;
