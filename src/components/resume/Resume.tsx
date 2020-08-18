import React from 'react';
import Banner from '../main/blocks/Banner';
import ContactBlock from '../main/blocks/ContactBlock';
import CBlock from '../main/blocks/CBlock';
import PythonBlock from '../main/blocks/PythonBlock';
import JSBlock from '../main/blocks/JSBlock';
import resume from '../../images/resume.png';

const Resume: React.FunctionComponent = () => {
    console.log("Resume page");
    return(
        <div className="resume">
            <div className="content">
                <h1>Resume</h1>
            </div>
            <div className="img-container">

                <img src={resume} alt="resume-image"/>
            </div>
            <div className="btn-container">
                <button className="btn draw-border">Download</button>
            </div>
            <div className="fader"></div>
        </div>
    );
}

export default Resume;