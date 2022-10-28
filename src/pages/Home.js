import React from "react";
import img from "../images/profile.png";
import resume from '../resume/resume.pdf'
import { Typewriter } from "react-simple-typewriter";
import {motion} from 'framer-motion'
function Home() {
  return (
    <motion.div className="home--section" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="home">
        <div className="home--titles">
          <h1>Hi Everyone</h1>
          <h2>
            I’m &nbsp;
            <span>
              <Typewriter
                words={["Aye Thet Su Khaing", "UI/UX Designer", "Programmer"]}
                loop={5}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
              />
            </span>
          </h2>
          <p>Freelance Developer</p>
          <motion.button className="general-btn" whileHover={{scale:1.2}}>
            <a href={resume} download='Resume.pdf'>Download Resume</a>
          </motion.button>
        </div>
        <div className="home--img">
          <img src={img} alt="aye thet" />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
