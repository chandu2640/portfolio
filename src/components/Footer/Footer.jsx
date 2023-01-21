import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Gmail from "../../img/gmail.png"
import WhatsApp from "../../img/whatsapp.png"
import Leetcode from "../../img/leetcode.png"
import Gfg from "../../img/gfg.png"
import Codechef from "../../img/codechef_short.png"
import Linkedin from "../../img/linkedin.png"
import Github from "../../img/github.png"

const Footer = () => {
  const d = new Date();
  return (
    <div className="footer">
      <div className="f-content">
        <div className="first-heading">
          <span><span className="firstSubHeading">Let's</span> Talk</span>
        </div>
        <div className="my-details">
          <div className="leftDetails myDetails-det">
            <a href="mailto:chandanthakur.bee@gmail.com"><img src={Gmail} alt="" /><span>chandanthakur.bee@gmail.com</span></a>
          </div>
          <div className="rightDetails myDetails-det">
          <a href="tel:+91-9894402722"><img src={WhatsApp} alt="" />
            <span>+91 9894402722</span></a>
          </div>
        </div>
        <div className="first-heading">
          <span><span className="firstSubHeading">Find</span> Me</span>
        </div>
        <div className="findIcons">
          <div className="linkedin lastIcons">
            <a href="https://www.linkedin.com/in/chandanthakur4562/" target={"_blank"}><img src={Linkedin} alt="" /></a>
          </div>
          <div className="github lastIcons">
            <a href="https://github.com/chandu2640" target={"_blank"}><img src={Github} alt="" /></a>
          </div>
          <div className="leetcode lastIcons">
            <a href="https://leetcode.com/chandan2640/" target={"_blank"}><img src={Leetcode} alt="" /></a>
          </div>
          <div className="codeshef lastIcons">
          <a href="https://www.codechef.com/users/chandan4562" target={"_blank"}><img src={Codechef} alt="" /></a>
          </div>
          <div className="geeks lastIcons">
          <a href="https://auth.geeksforgeeks.org/user/thakurchandan4562/practice" target={"_blank"}><img src={Gfg} alt="" /></a>
          </div>
        </div>
        <div className="copyWright">
          <span>©{d.getFullYear()} Chandan | All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
