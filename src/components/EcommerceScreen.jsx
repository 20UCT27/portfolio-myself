import React from "react";
import { Link } from "react-router-dom";
import './EcommerceScreen.css';
import homepage from '../assets/screenshots/homepage.png';
import productpage from '../assets/screenshots/productpage.png';
import productviewpage from '../assets/screenshots/productviewpage.png';
import cartpage from '../assets/screenshots/cartpage.png';
import loginpage from '../assets/screenshots/loginpage.png';
import registrationpage from '../assets/screenshots/registrationpage.png';


function EcommerceScreen(){
    return(
        <div className="container">
        <div className="row screenshots">
        <h1>SCREENSHOTS</h1>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={loginpage} alt="" />
          <img src={registrationpage} alt="" />
          <img src={homepage} alt="" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={productpage} alt="" />
          <img src={productviewpage} alt="" />
          <img src={cartpage} alt="" />
        </div>
      </div>
      <div className="back">
        <Link to="/projects"><button>Back</button></Link>
      </div>
      <footer class="bg-dark text-white text-center py-3 ">
      {/* <h2>Thank You</h2> */}
      <ul className="contact-icons">
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
        <li>
          <a href="mailto:keyankarthik2003@gmail.com">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
      <p>&copy; 2024 Karthikeyan. All Rights Reserved.</p>
    </footer>
    </div>
    );
}

export default EcommerceScreen;