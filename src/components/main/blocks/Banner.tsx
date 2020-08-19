import React from 'react';
import {motion} from 'framer-motion';

const Banner: React.FunctionComponent = () => {

    const coverInit = {
      opacity: 0,
      y: -100
    }
    const coverFinal = {
      opacity: 1,
      y: 0
    }
    const trans = {
      type: "tween",
      duration: 1,

    }

    return(
        <div className="banner">
          <div className="cover" >
            <motion.h1 className="Title" initial={coverInit} animate={coverFinal} transition={trans} >
              Explore   Achieve   Surpass
            </motion.h1>
            <motion.h2 className="Title2" initial={{opacity:0, y: -70}} animate={coverFinal} transition={{...trans, delay: 0.4}} >
              Hire a developer skilled in <span>AI, web development, </span> 
              and <span>scientific research</span>
            </motion.h2>
          </div>
        </div>
    );
}

export default Banner;