import React from "react";
import "./About.css";
import education from '../assets/education.png';
import about from '../assets/about.jfif';

function About(){
    return(
        <div className="container">
      <section className="row about">
        <div className="col-lg-4 col-sm-12 profile_pic">
          <img src={about}></img>
        </div>
        <div className="col-lg-8 col-sm-12 para">
          <h1>So... Who am I?</h1>
          <p>
            I am a passionate Full Stack Developer with a strong background in designing and building 
            comprehensive web applications. With expertise in both front-end and back-end development, 
            I enjoy creating seamless and intuitive user experiences while ensuring robust and scalable server-side logic. 
            My journey in software development has equipped me with a deep understanding of various technologies, 
            including Java, Spring Boot, React, and database management systems. I thrive on solving complex problems, 
            continuously learning new tools, and contributing to projects that make a meaningful impact. 
            Whether working independently or as part of a collaborative team, I am committed to delivering 
            high-quality solutions that align with business goals and exceed user expectations.
          </p>
        </div>
      </section>
      <section className="row edu">
        <div className="col-lg-6 col-md-6 col-sm-12 edu-det">
          <h1 >What i've done?</h1>
          <p>
            Hello! I'm Karthikeyan, a java full stack developer with a solid educational
            foundation in Information Technology.
            <span className="highlight">
              I completed my 10th and 12th standards at ZKM Higher
              Secondary School in Bodinayakanur, where I secured 76% and 64.3%,
            </span>
            respectively. Following my school education,
            <span className="highlight">
              I pursued a Bachelor of Science in Information Technology at Hajee
              Karutha Rowther Howdia College in Uthamapalayam, graduating with
              72%.
            </span>
            My academic journey has provided me with a strong understanding of
            technology, which I now apply in my web development projects.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 logo">
          <img src={education}></img>
        </div>
      </section>
      <section className="row certificates">
        <h1 className="text-white">Now ,What i have?</h1>
        <div className="col-lg-6 col-sm-12 col-md-12 right">
          <h6>Java Full Stack Development Course</h6>
          <p> Besant Technologies Velachery</p>
          <p>
            Successfully completed an intensive Java Full Stack Development
            course at  Besant Technologies Velachery. This course equipped me with a
            comprehensive understanding of front-end , back-end development and Database development,
            covering technologies like HTML, CSS, JavaScript, React, Java, Springboot
            and MySql .
          </p>
          <button className="btn btn-success">
            <a
              href="https://drive.google.com/file/d/1JaCh3tEi-bs1LM5bxn-SxWhPcHvS5t3U/view?usp=drivesdk"
              target="_blank"
            >
              Course Complition Certificate
            </a>
          </button>
        </div>
      </section>
      <footer class="bg-dark text-white text-center py-3 ">
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

export default About;