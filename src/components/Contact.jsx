import {React} from "react";
import "./Contact.css"

function Contact(){
    return(
        <div className="container-fluid">
      <div className="conclusion">
        <h1>Conclusion</h1>

        <p>
         Looking ahead, I am eager to further develop my expertise, 
         particularly in areas such as fornt-end and back-end development
         I am excited about the opportunities to contribute to innovative 
         projects and collaborate with talented teams to create impactful solutions.
         <span className="para1">
            Thank you for taking the time to explore my portfolio. 
            I look forward to the possibility of collaborating on future projects and contributing 
            to the tech community.
         </span>
        </p>
      </div>
      <div className="row contact">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <i class="fa-solid fa-mobile-screen-button"></i>
          <h2>Call me at</h2>
          <a href="tel:+91 9344945837" target="_blank">
            <button className="btn btn-success">Call</button>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <i class="fa-brands fa-whatsapp"></i>
          <h2>Chat with me</h2>

          <a href="https://wa.me/919344945837" target="_blank">
            <button className="btn btn-success">Chat</button>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <i class="fa-regular fa-envelope"></i>
          <h2>Send mail to</h2>
          <a href="mailto:keyankarthik2003@gmail.com" target="_blank">
            <button className="btn btn-success">Mail</button>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <i class="fa-solid fa-location-dot"></i>
          <h2>Meet me at</h2>
          <p>14A | Oumaithurai Street</p>
          <p>Kuppinayakanpatti , Bodinayakanur</p>
          <p>Theni 625513</p>
          <a href="https://maps.app.goo.gl/2MNtQP45S3m2k7q77" target="_blank">
            <button className="btn btn-success">view on map</button>
          </a>
        </div>
      </div>
      <div className="declaration">
        <h2>Declaration</h2>
        <p>
          I hereby declare that the information provided in my portfolio is true
          and accurate to the best of my knowledge and belief.
        </p>
      </div>
      <footer class="bg-dark text-white text-center py-3 ">
        <h2>Thank You</h2>
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

export default Contact;