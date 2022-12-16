import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Mwt from "../../img/mwt.png";
import Tanneri from "../../img/tanneri.png";
import FuncBox from "../../img/funcbox.png";
import Everest from "../../img/everestwalk.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./Resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span
          style={{ color: darkMode ? "white" : "" }}
          className="experience-heading"
        >
          My Experience
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ top: "-10rem", left: "14rem" }}
          whileInView={{ left: "14rem", top: "0rem" }}
          transition={transition}
        >
          <Card
            subtitle={"Hello"}
            emoji={Mwt}
            heading={"Mihtila Wildlife Trust"}
            detail={
              "Organize and operate all technical equipment, Maintain website"
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Tanneri}
            heading={"Tanneri Chaso"}
            detail={
              "UI Design, Social Media design and Handelling, Podcast Processing"
            }
          />
        </motion.div>
        <motion.div
          initial={{ left: "36rem", top: "8rem" }}
          whileInView={{ left: "30rem" }}
          transition={transition}
        >
          <Card
            emoji={Everest}
            heading={"Front-End Developer"}
            detail={
              "Website Designing and Development using React.js, Designing UI, API Integeration"
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "20rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={FuncBox}
            heading={"FuncBox"}
            detail={
              "Game Development, Developing the user interface using React.js, Debugging and Testing"
            }
            color="rgba(111, 111, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
