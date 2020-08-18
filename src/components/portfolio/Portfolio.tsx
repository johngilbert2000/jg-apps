import React from 'react';
import Banner from '../main/blocks/Banner';
import ContactBlock from '../main/blocks/ContactBlock';
import CBlock from '../main/blocks/CBlock';
import PythonBlock from '../main/blocks/PythonBlock';
import JSBlock from '../main/blocks/JSBlock';

const Portfolio: React.FunctionComponent = () => {
    console.log("Portfolio page");
    return(
        <div className="portfolio">
            <div className="Title">
                <h1>Portfolio</h1>
            </div>
            <div className="content">
                <div className="card">
                    <h2>Dengue Prediction</h2>
                </div>
                <div className="card">
                    <h2>Nested Lookahead</h2>
                </div>
                <div className="card">
                    <h2>Sentiment140 Analysis</h2>
                </div>
                <div className="card">
                    <h2>Bacteriocin Sequence Prediction</h2>
                </div>
                <div className="card">
                    <h2>Quantum Phase Estimation</h2>
                </div>
                <div className="card">
                    <h2>KDE Implementation</h2>
                </div>
                <div className="card">
                    <h2>OS Scheduler</h2>
                </div>
                <div className="card">
                    <h2>Asynchronous Federated Learning</h2>
                </div>
                <div className="card">
                    <h2>This Website</h2>
                </div>
            </div>
            <div className="icon-container">
                <a href="https://github.com/johngilbert2000" target="_blank"><i className="fab fa-github fa-3x"></i></a>
                <p>My GitHub</p>
            </div>
        </div>
    );
}

export default Portfolio;