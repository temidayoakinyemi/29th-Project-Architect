import React from "react";
import "../Our Workflow/OurWorkflow.css";
import Workflow from "../../assets/workflow.png";
import Megaphone from "../../assets/megaphone.png";
import ProjectorScreen from "../../assets/projectorscreen.png";
import PresentationChart from "../../assets/presentationchart.png";
import PaintRoller1 from "../../assets/paintroller1.png";
import Play from "../../assets/play.png";

const OurWorkflow = () => {
  return (
    <div className="container">
      <div className="all-workimg">
        <img src={Workflow} alt="" className="workimg" />
        <div className="allwork">
          <h1 className="workh1">Our workflow</h1>
          <div className="allimgwork">
            <div className="workbrief">
              <div className="allworkpshout">
                <div className="workshout">
                  <img src={Megaphone} alt="" />
                </div>
                <p className="workp">Briefing</p>
              </div>
            </div>
            <div className="workshout-1">
              <img src={ProjectorScreen} alt="" />
            </div>
            <div className="workshout-1">
              <img src={PresentationChart} alt="" />
            </div>
            <div className="workshout-1">
              <img src={PaintRoller1} alt="" />
            </div>
          </div>
          <div className="allplay">
            <div className="playdiv">
              <img src={Play} alt="" />
            </div>
            <h2 className="playh">
              Explaining <br /> what you needs
            </h2>
          </div>
          <p className="playp">
            Usabiltiy flesh that out, we want to empower the team with the right
            <br />
            tools and guidance to uplevel our craft and build better. Can you{" "}
            <br />
            ballpark the cost per unit for me golden goose they have
          </p>
        </div>
      </div>
      <div className="allnum2">
        <div className="allnum3">
          <h1 className="numh1">
            See our impacts <br /> in number
          </h1>
          <p className="nump">
            Guerrilla marketing will hit the ground running with <br />{" "}
            powerpoint bunny for or optimize them
          </p>
          <button className="numbtn">Get in Touch</button>
        </div>
        <div className="allnum4">
          <div className="allnum">
            <div className="allinner">
              <div className="allh1pnum">
                <h2 className="numh2">
                  128<span className="numk">k</span>
                </h2>
                <h3 className="numh3">Costumers</h3>
              </div>
              <p className="nump1">
                With high dedication, our designs <br /> are always perfectly to
                the applied <br />
                container which also pixel
              </p>
            </div>
            <div className="allinner">
              <div className="allh1pnum">
                <h2 className="numh2">
                  170<span className="numk">k</span>
                </h2>
                <h3 className="numh3">Building built</h3>
              </div>
              <p className="nump1">
                With high dedication, our designs <br /> are always perfectly to
                the applied <br />
                container which also pixel
              </p>
            </div>
          </div>
          <div className="allnum1">
            <div className="allinner">
              <div className="allh1pnum">
                <h2 className="numh2">
                  78<span className="numk">%</span>
                </h2>
                <h3 className="numh3">Yearly Growth</h3>
              </div>
              <p className="nump1">
                With high dedication, our designs <br /> are always perfectly to
                the applied <br />
                container which also pixel
              </p>
            </div>
            <div className="allinner">
              <div className="allh1pnum">
                <h2 className="numh2">
                  280<span className="numk">B</span>
                </h2>
                <h3 className="numh3">Profit Gained</h3>
              </div>
            <p className="nump1">
              With high dedication, our designs <br /> are always perfectly to
              the applied <br />
              container which also pixel
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkflow;
