import React, { useState } from "react";
import ModalVideo from "react-modal-video";

function Projects() {
  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  return (
    <div id="projects">
      <div className="color1">
        <div className="project-name">
          <h2>Fishy</h2>
          <div className="proj-desc">
            <img
              src="https://i.imgur.com/ZRWpMeA.png"
              alt="Fishy img"
              className="projectimg"
            />
            <div className="project-info">
              <p>
                Craigslist-based app that allows users to post and buy fish
                while adding them to their virtual aquarium
              </p>
            </div>
            <div className="project-demo">
              <React.Fragment>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="iyt62efBkOM"
                  onClose={() => setOpen(false)}
                />

                <span onClick={() => setOpen(true)}>Watch the Demo</span>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>

      <div className="color2">
        <div className="project-name">
          <h2>Big Apple Vacations</h2>
          <div className="proj-desc">
            <img
              src="https://i.imgur.com/d6Ce6AV.png"
              alt="Big Apple Vacations img"
              className="projectimg"
            />
            <div className="project-info">
              <p>
                Manage vacation rentals by posting your own rentals as an admin
                or scroll through the rentals up for grabs and schedule an
                appointment as a rentee{" "}
              </p>
            </div>
            <div className="project-demo">
              <React.Fragment>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen1}
                  videoId="lTvMRwlDYf0"
                  onClose={() => setOpen1(false)}
                />

                <span onClick={() => setOpen1(true)}>Watch the Demo</span>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
      <div className="project-name">
        <h2>COVID-19 Vaccine Analysis </h2>
        <div className="proj-desc">
          <img
            src="https://i.imgur.com/P02TVwR.png"
            alt="Vaccine Project img"
            className="projectimg"
          />

          <div className="project-info">
            <p>
              Vaccination app which utilizes CDC reported data and displays the
              number of COVID-19 vaccines allocated to states over the pandemic
            </p>
          </div>
          <div className="project-demo">
            <React.Fragment>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen2}
                videoId="mXBkc_2mg1s"
                onClose={() => setOpen2(false)}
              />

              <span onClick={() => setOpen2(true)}>Watch the Demo</span>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
