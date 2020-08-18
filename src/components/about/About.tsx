import React from 'react';
import Banner from '../main/blocks/Banner';
import ContactBlock from '../main/blocks/ContactBlock';
import CBlock from '../main/blocks/CBlock';
import PythonBlock from '../main/blocks/PythonBlock';
import JSBlock from '../main/blocks/JSBlock';

const About: React.FunctionComponent = () => {
    console.log("About page");
    return(
        <div className="about">
            <div className="img-container"></div>
            <div className="content-container">
                <div className="content">
                    <p>
                        Hello, my name is <span>John Gilbert</span> and I am passionate about science and technology. 
                        Current interests include <span>AI</span> and <span>distributed systems</span>. 
                        I also love to travel, and am fluent in <span>English, Spanish,</span> and <span>Mandarin Chinese</span>. 
                        I am always learning new skills.
                    </p>
                    <p>
                        Prior to developing software, 
                        I worked as a <span>chemist</span> in <span>analytical</span> and <span>organic research</span> laboratories,
                        as well as in the pharmaceutical industry. 
                        Skilled in the <span>scientific method</span>, I bring both rigor and experimentation to my work.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;