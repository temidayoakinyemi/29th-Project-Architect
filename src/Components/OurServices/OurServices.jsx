import React, { useRef } from "react";
import "../OurServices/OurServices.css";
import ArrowUpRight from "../../assets/ArrowUpRight.png";
import Bank from "../../assets/Bank.png";
import Sparkle from "../../assets/Sparkle.png";
import PaintRoller from "../../assets/PaintRoller.png";

const OurServices = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="ourServices container">
      <div className="ourServices-div">
        <h1 className="ourServices-h1">Estimate the price</h1>
        <p className="ourServices-p">
          Easily predict your estimated price by inputing your location and
          construction details
        </p>
        <input
          type="text"
          placeholder="construction location"
          className="ourServices-input"
        />
        <input
          type="text"
          placeholder="surface area (m2)"
          className="ourServices-input"
        />
        <input
          type="text"
          placeholder="construction style"
          className="ourServices-input"
        />
        <button className="btn-2">Get Estimation</button>
      </div>

      <h1 className="ourServices-h12">Our Services</h1>
      <div className="ourService-btn-p">
        <p className="ourServices-p2">
          We’re award winning architecture agency with <br /> extra ordinary
          skills of architecture
        </p>
        <button className="btn-3">
          Get in Touch <img src={ArrowUpRight} alt="" />
        </button>
      </div>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="all-archi">
                <div className="archi-design">
                  <img src={Bank} alt="" />
                </div>
                <div className="all-archi-2">
                  <h1 className="archi-h1">Architectural Design</h1>
                  <p className="archi-p">
                    One-sheet cross sabers, yet dunder mifflin so window licker.
                    But what's the real we're trying to solve here personal
                    development what's
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="all-archi">
                <div className="archi-design">
                  <img src={Sparkle} alt="" />
                </div>
                <div className="all-archi-2">
                  <h1 className="archi-h1">Interior Design</h1>
                  <p className="archi-p">
                    One-sheet cross sabers, yet dunder mifflin so window licker.
                    But what's the real we're trying to solve here personal
                    development what's
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="all-archi">
                <div className="archi-design">
                  <img src={PaintRoller} alt="" className="paint" />
                </div>
                <div className="all-archi-2">
                  <h1 className="archi-h1">Installation & Stuff</h1>
                  <p className="archi-p">
                    One-sheet cross sabers, yet dunder mifflin so window licker.
                    But what's the real we're trying to solve here personal
                    development what's
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="image-all">
        <button className="forward" onClick={slideForward}></button>
        <button className="backward" onClick={slideBackward}></button>
      </div>
    </div>
  );
};

export default OurServices;
