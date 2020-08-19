import React from 'react';
import {motion} from 'framer-motion';
import Banner from '../main/blocks/Banner';
import ContactBlock from '../main/blocks/ContactBlock';
import CBlock from '../main/blocks/CBlock';
import PythonBlock from '../main/blocks/PythonBlock';
import JSBlock from '../main/blocks/JSBlock';



const About: React.FunctionComponent = () => {

    const initial = {
        opacity: 0,
        y: -80
    }
    const final = {
        opacity: 1,
        y: 0,
        scale: 1
    }
    const trans = {
        type: "spring",
        duration: 0.5,
        stiffness: 50,
        delay: 0.6,
    }
    const trans2 = {
        type: "spring",
        duration: 2,
        delay: 0.9,
        stiffness: 20,
    }
    const contentInitial = {
        scale: 0.4,
    }
    const imgInit = {
        x: -50,
        opacity:0,
    }
    const imgFinal = {
        x: 0,
        opacity: 1
    }
    const imgTrans = {
        type: "tween",
        duration: 0.1,
        delay: 0,
    }
    const hover = {
        // scale: 1.01
        // y: 10,
    }

    return(
        <div className="about">
            <motion.div className="img-container" initial={imgInit} animate={imgFinal} transition={imgTrans}></motion.div>
            <div className="content-container">
                <motion.div className="content" initial={contentInitial} animate={final} exit={contentInitial} transition={{duration: 0.1}} >
                    <motion.p initial={initial} animate={final} exit={initial} transition={trans} whileHover={hover}>
                        Hello, my name is <span>John Gilbert</span> and I am passionate about science and technology. 
                        Current interests include <span>AI</span> and <span>distributed systems</span>. 
                        I also love to travel, and am fluent in <span>English, Spanish,</span> and <span>Mandarin Chinese</span>. 
                        I am always learning new skills.
                    </motion.p>
                    <motion.p initial={initial} animate={final} exit={initial} transition={trans2} whileHover={hover}>
                        Prior to developing software, 
                        I worked as a <span>chemist</span> in <span>analytical</span> and <span>organic research</span> laboratories,
                        as well as in the pharmaceutical industry. 
                        Skilled in the <span>scientific method</span>, I bring both rigor and experimentation to my work.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}

export default About;