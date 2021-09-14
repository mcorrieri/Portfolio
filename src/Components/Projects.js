import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import ReactJS from "../Assets/react-original.svg";
import HTML from "../Assets/html5-original.svg";
import JS from "../Assets/javascript-original.svg";
import Ruby from "../Assets/ruby-original.svg";
import Rails from "../Assets/rails-original-wordmark.svg";
import MUI from "../Assets/materialui-original.svg";
import Semantic from "../Assets/semantic-logo.png";
import Firebase from "../Assets/firebase.png";
import JWTlogo from "../Assets/jwt_05.jpeg";

function Projects() {
  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  return (
    <div id="projects">
      <div className="color1">
        <div className="project-name">
          <h2>Emoji Tic Tac Toe</h2>
          <div className="proj-desc">
            <a href="https://github.com/mcorrieri/emoji-tic-tac-toe">
              <img
                src="https://i.imgur.com/IrbrXDL.png"
                alt="Emoji-Tic-Tac-Toe"
                className="projectimg"
              />
            </a>
            <div className="project-info">
              <p>
                A fun and new way to play Tic Tac Toe! Allows players to choose
                from a dropdown of emojis instead of using those antiquated Xs
                and Os. Built with:{" "}
              </p>
              <img
                src={ReactJS}
                className="icon"
                alt="portimg"
                height="65px"
                weight="65px"
              />
              <img
                src={JS}
                className="icon"
                alt="portimg"
                height="65px"
                weight="65px"
              />
              <img
                src={Semantic}
                className="icon"
                alt="portimg"
                height="50px"
                weight="50px"
              />
            </div>
          </div>
        </div>
        <div className="project-name">
          <h2>Twitter Clone</h2>
          <div className="proj-desc">
            <a href="https://github.com/mcorrieri/twitter-clone-mc">
              <img
                id="twitter-clone-image"
                src="https://i.imgur.com/ApdOvcH.png"
                alt="Twitter-clone"
                className="projectimg"
              />
            </a>
            <div className="project-info">
              <p>
                Twitter clone app created using React and Firebase. Built with:
              </p>
              <img
                src={ReactJS}
                className="icon"
                alt="portimg"
                height="65px"
                weight="65px"
              />
              <img
                src={JS}
                className="icon"
                alt="portimg"
                height="65px"
                weight="65px"
              />
              <img
                src={Firebase}
                className="icon"
                alt="portimg"
                height="50px"
                weight="50px"
              />
              <img
                src={MUI}
                className="icon"
                alt="portimg"
                height="65px"
                weight="65px"
              />
            </div>
          </div>
        </div>
        <div className="project-name">
          <h2>Fishy</h2>
          <div className="proj-desc">
            <a href="https://github.com/mcorrieri/frontend-fishy">
              <img
                src="https://i.imgur.com/ZRWpMeA.png"
                alt="Fishy img"
                className="projectimg"
              />
            </a>
            <div className="project-info">
              <p>
                Craigslist-based app that allows users to sell and buy fish
                while adding them to their virtual aquarium. Built with:
              </p>
              <img
                src={ReactJS}
                className="icon"
                alt="portimg"
                height="65px"
                weight="65px"
              />
              <img
                src={JS}
                className="icon"
                alt="portimg"
                height="65px"
                weight="65px"
              />
              <img src={Rails} className="icon" alt="portimg" height="65px" />
              <img
                src={Semantic}
                className="icon"
                alt="portimg"
                height="65px"
              />
              <img
                src={JWTlogo}
                className="icon"
                alt="portimg"
                height="65px"
                width="auto"
              />
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
            <a href="https://github.com/pjhg14/phase4-pair-project-frontend">
              <img
                src="https://i.imgur.com/d6Ce6AV.png"
                alt="Big Apple Vacations img"
                className="projectimg"
              />
            </a>
            <div className="project-info">
              <p>
                Airbnb app which allows users to host or rent apartments in New
                York City. Renters can book appointments using a calendar and
                can view or cancel any appointment on their appointments page.
                Built with:
              </p>
              <img
                src={ReactJS}
                className="icon"
                alt="portimg"
                height="65px"
                weight="65px"
              />
              <img
                src={JS}
                className="icon"
                alt="portimg"
                height="65px"
                weight="65px"
              />
              <img src={Rails} className="icon" alt="portimg" height="65px" />
              <img
                src={Semantic}
                className="icon"
                alt="portimg"
                height="65px"
              />
              <img
                src={JWTlogo}
                className="icon"
                alt="portimg"
                height="65px"
                width="auto"
              />
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
          <a href="https://github.com/mcorrieri/Phase3-Frontend">
            <img
              src="https://i.imgur.com/P02TVwR.png"
              alt="Vaccine Project img"
              className="projectimg"
            />
          </a>

          <div className="project-info">
            <p>
              Public health app which graphically represents vaccination rates
              in the US using ChartJS. Built with:
            </p>
            <img
              src={ReactJS}
              className="icon"
              alt="portimg"
              height="65px"
              weight="65px"
            />
            <img
              src={JS}
              className="icon"
              alt="portimg"
              height="65px"
              weight="65px"
            />
            <img src={Ruby} className="icon" alt="portimg" height="65px" />
            <img src={HTML} className="icon" alt="portimg" height="65px" />
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
