import React from "react";
import "../LatestWork/LatestWork.css";
import ArrowUpRight from "../../assets/Arrowupright.png";

const LatestWork = () => {
  return (
    <div className="latest container">
      <h1 className="latesth1">See our latest work</h1>
      <p className="latestp">
        Usabiltiy flesh that out, we want to empower the team with the right
        tools <br /> and guidance to uplevel our craft and build better.
      </p>
      <div className="latestdiv">
        <div className="latesth1img">
          <h1 className="latestdivh">Wealth Residence</h1>
          <img src={ArrowUpRight} alt="" className="latestimg" />
        </div>
        <div className="latestpp">
          <p className="latestdivp">Architect Designer for Cluster Residence</p>
          <p className="latestdivpp">2019 - 2021</p>
        </div>
      </div>
      <div className="latestdiv1">
        <div className="latesth1img">
          <h1 className="latestdivh">Changhong Airport</h1>
          <img src={ArrowUpRight} alt="" className="latestimg" />
        </div>
        <div className="latestpp">
          <p className="latestdivp">Lead of Urban Planner</p>
          <p className="latestdivpp">2019 - 2021</p>
        </div>
      </div>
      <div className="latestdiv1">
        <div className="latesth1img">
          <h1 className="latestdivh">Havit Head Office Building</h1>
          <img src={ArrowUpRight} alt="" className="latestimg" />
        </div>
        <div className="latestpp">
          <p className="latestdivp">Lead of Interior Designer</p>
          <p className="latestdivpp">2019 - 2021</p>
        </div>
      </div>
      <div className="latestdiv1">
        <div className="latesth1img">
          <h1 className="latestdivh">Reborn Skate Park</h1>
          <img src={ArrowUpRight} alt="" className="latestimg" />
        </div>
        <div className="latestpp">
          <p className="latestdivp">Lead of Urban Planner</p>
          <p className="latestdivpp">2019 - 2021</p>
        </div>
      </div>
      <div className="latestdiv1">
        <div className="latesth1img">
          <h1 className="latestdivh">Temaran Private Museum</h1>
          <img src={ArrowUpRight} alt="" className="latestimg" />
        </div>
        <div className="latestpp">
          <p className="latestdivp">Lead of Architect & Interior Designer</p>
          <p className="latestdivpp">2019 - 2021</p>
        </div>
      </div>
      <button className="latestbtn">Get in Touch</button>
    </div>
  );
};

export default LatestWork;
