import React from 'react';
import {motion} from 'framer-motion';

import Banner from '../main/blocks/Banner';
import ContactBlock from '../main/blocks/ContactBlock';
import CBlock from '../main/blocks/CBlock';
import PythonBlock from '../main/blocks/PythonBlock';
import JSBlock from '../main/blocks/JSBlock';
import resume from '../../images/resume.png';

const Resume: React.FunctionComponent = () => {
    return(
        <div className="resume">
            <div className="content">
                <h1>Resume</h1>
            </div>
            <motion.div className="img-container" initial={{opacity: 0, y: 15}} animate={{opacity:1, y: 0}} transition={{duration: 1}}>

                <img src={resume} alt="resume-image"/>
            </motion.div>
            <div className="btn-container">
                <button className="btn draw-border">Download</button>
            </div>
            <div className="fader"></div>
        </div>
    );
}

export default Resume;