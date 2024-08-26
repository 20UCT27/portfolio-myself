import React from "react";
import "./Home.css";
import mypic from "../assets/mypic.jpg";

function Home() {
  return (
    <section className="container">
      <div className="row body">
        <div className="col-lg-6 col-sm-12 lh-side">
          <div className="text">
            <h2>Hello!...</h2>
            <br />
            <h1>
              I am <h1>Karthik.</h1>
            </h1>
            <br />
            <p>
              FULL NAME <h2>KARTHIKEYAN.</h2>
              <h4>JAVA FULL STACK DEVELOPER.</h4>
            </p>
          </div>
          <div className="buttons">
            <button className="btn btn-primary">
              <a href="/About">About Me</a>
            </button>
            <button className="btn btn-success">
              <a
                href="https://drive.google.com/file/d/1IxUco3Y7g8gWjGmAymAwFrrF66dxjJ8-/view?usp=drivesdk"
                target="_blank"
              >
                My Resume
              </a>
            </button>
          </div>
          <br/>
          <ul className="social">
            <li>
              <a
                href="https://www.linkedin.com/in/karthikeyan-s-996b11267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/__sk____18?igsh=cWp4M2poOG42OHU2" target="_blank">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/20UCT27/" target="_blank">
                <i class="fa-brands fa-square-github"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="vertical">
        </div> */}
        <div className="col-lg-6 col-sm-12 rh-side">
        <img src={mypic} className="avatar" width="400px" height="550px"></img>
        </div>
      </div>
    </section>
  );
}
export default Home;