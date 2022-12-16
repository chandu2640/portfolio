import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Leetcode from "../../img/leetcode.png";
import Codechef from "../../img/codechef.png";
import Gfg from "../../img/gfg.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Resume.pdf'

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <img src="../../img/abc.png" alt="" />
      
      <div className="i-left">
        <div className="i-name">
          
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Chandan Thakur</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        
        
        <div className="i-icons">
          <a href="https://github.com/chandu2640"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/chandanthakur4562/"><img src={LinkedIn} alt="" /></a>
          <a href="https://leetcode.com/chandan2640/"><img src={Leetcode} alt="" /></a>
          <a href="https://auth.geeksforgeeks.org/user/thakurchandan4562/practice"><img src={Gfg} alt="" /></a>
          <a href="https://www.codechef.com/users/chandan2640"><img src={Codechef} alt="" /></a>
          
          {/* <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" /> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        /> 

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        


        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Software" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
