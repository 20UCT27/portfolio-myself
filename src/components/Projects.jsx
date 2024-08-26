import React from "react";
import { Link } from "react-router-dom";
import './Projects.css';
import project1 from '../assets/project1.jfif';
import tech from '../assets/tech.avif';
import project2 from '../assets/project2.jfif';
function Projects(){
    return(
        <div className="container">
        <div className="row project">
          <div className="col-lg-6 col-md-12 col-sm-12 leftside">
            <h1>EMPLOYEE MANAGEMENT SYSTEM</h1>
            <p>
              <b>Overview</b> : The Employee Management System is a comprehensive web application 
              designed to manage employee data effectively. 
              The system allows administrators to add, update, delete, 
              and view employee details, ensuring efficient management of organizational data.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 rightside">
            <img src={project1}></img>
          </div>
        </div>
        <div className="row tech">
          <div className="col-lg-6 col-md-12 col-sm-12 tech-stack">
            <h2>Technical Stack :</h2>
            <dl>
              <dt>
                <u>Front End</u>
              </dt>
              <dd>
                Developed using HTML, CSS, and JavaScript for structure and 
                styling, with React.js to build a dynamic and interactive user interface.
              </dd>
              <dt>
                <u>Back End</u>
              </dt>
              <dd>
                Implemented using Spring Boot, a powerful Java framework, 
                to handle the server-side logic, ensuring robust performance and scalability.
              </dd>
  
              <dt>
                <u>DataBase</u>
              </dt>
              <dd>
              MySQL is used to store and manage data securely, 
              offering reliable data retrieval and storage solutions.
              </dd>
              <dt>
                <u>ScreenShots</u>
              </dt>
              <dd>
                <Link to="/EMSscreen"><button className="btn btn-success">View ScreenShots</button></Link>
              </dd>

            </dl>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 tec-image">
            <img src={tech} className="tech-img"></img>
          </div>
        </div>
        <div className="row project">
          <div className="col-lg-6 col-md-12 col-sm-12 leftside">
            <h1>E-COMMERCE WEBSITE</h1>
            <p>
              <b>Overview</b> : Developed a static front-end e-commerce website showcasing products and 
              facilitating a simulated shopping experience. The website features 
              a user-friendly interface with product listings, category navigation, and a shopping cart.
              Display of various products with images, descriptions, and pricing.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 rightside">
            <img src={project2}></img>
          </div>
        </div>
        <div className="row tech">
          <div className="col-lg-6 col-md-12 col-sm-12 tech-stack">
            <h2>Technical Stack :</h2>
            <dl>
            <dt>
              
            </dt>
            <dd>
              <b>HTML & CSS :</b> For the structure and styling of the user
              interface. <br />
              <b>React :</b> For building a dynamic, component-based UI that
              updates efficiently with user interactions.
            </dd>
              <dt>
                
              </dt>
              <dd>
                <Link to="/EcommerceScreen"><button className="btn btn-success">View ScreenShots</button></Link>
              </dd>

            </dl>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 tec-image">
            <img src={tech} className="tech-img"></img>
          </div>
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
    )
}

export default Projects;