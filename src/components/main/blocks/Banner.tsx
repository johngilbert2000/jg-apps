import React from 'react';
import {motion} from 'framer-motion';
import { Fade } from 'react-awesome-reveal';

const Banner: React.FunctionComponent = () => {

    const d = 0.7; // delay 1.7

    const coverInit = {
      opacity: 0,
      y: -40
    }
    const coverFinal = {
      opacity: 1,
      y: 0
    }
    const trans = {
      type: "tween",
      duration: 1,
      delay: d
    }

    return(
        <div className="banner">
          <div className="cover" >
            <Fade duration={1500}>
            <motion.h1 className="Title" initial={coverInit} animate={coverFinal} transition={trans} >
              Explore   Achieve   Surpass
            </motion.h1>
            <motion.h2 className="Title2" initial={{opacity:0, y: -25}} animate={coverFinal} transition={{...trans, delay: d+0.5}} >
              Hire a developer skilled in <span>AI, web development, </span> 
              and <span>scientific research</span>
            </motion.h2>
            </Fade>
          </div>
        </div>
    );
}

export default Banner;