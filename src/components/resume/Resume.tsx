import React, { useContext } from 'react';
import {motion} from 'framer-motion';

import resume from '../../images/resume.png';
import { StoreContext } from '../storeContext';

const Resume: React.FunctionComponent = () => {
    const Context = useContext(StoreContext);
    const [lang, setLang] = Context.lang;

    return(
        <div>
        {(lang==="english") && (
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

        ) || (lang==="spanish") && (
            <div className="resume">
                <div className="content">
                    <h1>Currículum</h1>
                </div>
                <motion.div className="img-container" initial={{opacity: 0, y: 15}} animate={{opacity:1, y: 0}} transition={{duration: 1}}>

                    <img src={resume} alt="resume-image"/>
                </motion.div>
                <div className="btn-container">
                    <button className="btn draw-border">Descargar</button>
                </div>
                <div className="fader"></div>
            </div>

        ) || (lang==="chinese_traditional") && (
            <div className="resume">
                <div className="content">
                    <h1>簡歷</h1>
                </div>
                <motion.div className="img-container" initial={{opacity: 0, y: 15}} animate={{opacity:1, y: 0}} transition={{duration: 1}}>

                    <img src={resume} alt="resume-image"/>
                </motion.div>
                <div className="btn-container">
                    <button className="btn draw-border">下載</button>
                </div>
                <div className="fader"></div>
            </div>

        ) || (lang==="chinese_simplified") && (
            <div className="resume">
                <div className="content">
                    <h1>简历</h1>
                </div>
                <motion.div className="img-container" initial={{opacity: 0, y: 15}} animate={{opacity:1, y: 0}} transition={{duration: 1}}>

                    <img src={resume} alt="resume-image"/>
                </motion.div>
                <div className="btn-container">
                    <button className="btn draw-border">下载</button>
                </div>
                <div className="fader"></div>
            </div>
        )}
        </div>
    );
}

export default Resume;