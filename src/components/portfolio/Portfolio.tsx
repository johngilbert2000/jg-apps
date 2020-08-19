import React from 'react';
import {motion} from 'framer-motion';

import Banner from '../main/blocks/Banner';
import ContactBlock from '../main/blocks/ContactBlock';
import CBlock from '../main/blocks/CBlock';
import PythonBlock from '../main/blocks/PythonBlock';
import JSBlock from '../main/blocks/JSBlock';

const Portfolio: React.FunctionComponent = () => {
    const cardInit = {opacity:0, scale:1};
    const cardFinal = {opacity:1, scale:1};
    const trans = {type:"spring", duration: 0.2};


    const cardNames: string[] = [
        "Dengue Prediction",
        "Nested Lookahead",
        "Sentiment140 Analysis",
        "Bacteriocin Sequence Prediction",
        "Quantum Phase Estimation",
        "KDE Implementation",
        "OS Scheduler",
        "Asynchronous Federated Learning",
        "React Portfolio",
    ]


    return(
        <div className="portfolio">
            <div className="Title">
                <h1>Portfolio</h1>
            </div>
            <div className="content">
                {cardNames.map((name, idx) => 
                    <motion.div className="card" initial={cardInit} animate={cardFinal} transition={{...trans, delay: 0.1*idx}}>
                        <motion.h2>{name}</motion.h2>
                    </motion.div>
                )}

            </div>
            <div className="icon-container">
                <a href="https://github.com/johngilbert2000" target="_blank"><i className="fab fa-github fa-3x"></i></a>
                <p>My GitHub</p>
            </div>
        </div>
    );
}

export default Portfolio;