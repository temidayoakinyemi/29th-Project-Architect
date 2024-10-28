import React from "react";
import "../Our Workflow/OurWorkflow.css";
import Workflow from "../../assets/workflow.png";
import Megaphone from "../../assets/megaphone.png";
import ProjectorScreen from "../../assets/projectorscreen.png";
import PresentationChart from "../../assets/presentationchart.png";
import PaintRoller1 from "../../assets/paintroller1.png";
import Play from "../../assets/play.png"

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
            Usabiltiy flesh that out, we want to empower the team with the right <br />
            tools and guidance to uplevel our craft and build better. Can you <br />
            ballpark the cost per unit for me golden goose they have
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWorkflow;
