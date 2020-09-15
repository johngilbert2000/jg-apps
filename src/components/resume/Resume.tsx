import React, { useContext } from 'react';
import {motion} from 'framer-motion';

// import resume from '../../images/resume.png';
import resume from '../../images/johngilbert_resume.jpg';
import resume_es from '../../images/johngilbert_resume_es.jpg';
import resume_cht from '../../images/johngilbert_resume_cht.jpg';
import resume_chs from '../../images/johngilbert_resume_chs.jpg';
// import resumePDF from '../../images/Resume.pdf';
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

                <a href="./johngilbert_resume.pdf" download>
                    <div className="btn-container" onClick={ () => window.open(require('../../images/johngilbert_resume.pdf'), '_none')}>
                        <button className="btn draw-border"><i className="far fa-arrow-alt-circle-down"></i> Download</button>
                    </div>
                </a>

                <div className="fader"></div>
            </div>

        ) || (lang==="spanish") && (
            <div className="resume">
                <div className="content">
                    <h1>Currículum</h1>
                </div>
                <motion.div className="img-container" initial={{opacity: 0, y: 15}} animate={{opacity:1, y: 0}} transition={{duration: 1}}>
                    <img src={resume_es} alt="resume-image"/>
                </motion.div>

                <a href="./johngilbert_resume_es.pdf" download>
                    <div className="btn-container" onClick={ () => window.open(require('../../images/johngilbert_resume_es.pdf'), '_none')}>
                        <button className="btn draw-border"><i className="far fa-arrow-alt-circle-down"></i> Descargar</button>
                    </div>
                </a>

                <div className="fader"></div>
            </div>

        ) || (lang==="chinese_traditional") && (
            <div className="resume">
                <div className="content">
                    <h1>簡歷</h1>
                </div>
                <motion.div className="img-container" initial={{opacity: 0, y: 15}} animate={{opacity:1, y: 0}} transition={{duration: 1}}>
                    <img src={resume_cht} alt="resume-image"/>
                </motion.div>

                <a href="./johngilbert_resume_cht.pdf" download>
                    <div className="btn-container" onClick={ () => window.open(require('../../images/johngilbert_resume_cht.pdf'), '_none')}>
                        <button className="btn draw-border"><i className="far fa-arrow-alt-circle-down"></i> 下載</button>
                    </div>
                </a>

                <div className="fader"></div>
            </div>

        ) || (lang==="chinese_simplified") && (
            <div className="resume">
                <div className="content">
                    <h1>简历</h1>
                </div>
                <motion.div className="img-container" initial={{opacity: 0, y: 15}} animate={{opacity:1, y: 0}} transition={{duration: 1}}>

                    <img src={resume_chs} alt="resume-image"/>
                </motion.div>

                <a href="./johngilbert_resume_chs.pdf" download>
                    <div className="btn-container" onClick={ () => window.open(require('../../images/johngilbert_resume_chs.pdf'), '_none')}>
                        <button className="btn draw-border"><i className="far fa-arrow-alt-circle-down"></i> 下载</button>
                    </div>
                </a>

                <div className="fader"></div>
            </div>
        )}
        </div>
    );
}

export default Resume;