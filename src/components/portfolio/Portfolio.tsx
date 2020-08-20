import React, { useState } from 'react';
import {motion, useAnimation} from 'framer-motion';

import Banner from '../main/blocks/Banner';
import ContactBlock from '../main/blocks/ContactBlock';
import CBlock from '../main/blocks/CBlock';
import PythonBlock from '../main/blocks/PythonBlock';
import JSBlock from '../main/blocks/JSBlock';

import bg_dengue from '../../images/dengue_scr.png';
import bg_nested from '../../images/nestedlookahead_scr.png';
import bg_sentiment from '../../images/sentiment140_scr.png'; // default
import bg_bio from '../../images/bio_scr.png';
import bg_quantum from '../../images/phase_scr.png';
import bg_kde from '../../images/code_shot2.png';
import bg_os from '../../images/os_sched_scr.png';
import bg_fed from '../../images/sentiment140_scr.png'; // default (no img yet)
import bg_web from '../../images/web_scr.png';
import { url } from 'inspector';


const Portfolio: React.FunctionComponent = () => {
    const cardInit = {opacity:0, scale:1};
    const cardFinal = {opacity:1, scale:1};
    const trans = {type:"spring", duration: 0.2};
    // const controls = useAnimation();

    const [fade, setFade] = useState(false);

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

    const cardBackgrounds: string[] = [
        bg_dengue,
        bg_nested,
        bg_sentiment,
        bg_bio,
        bg_quantum,
        bg_kde,
        bg_os,
        bg_fed,
        bg_web,
    ]

//    let checked:boolean = false;
//     let menuStyle
  
//     let handleCheck = () => {
//       checked = !checked;
//       menuStyle = {"opacity": (checked ? 1 : 0)};
//       const menu = document.querySelector('.menu');
//       console.log(menu?.classList);
//       // menu?.toggleAttribute('menu-active')
//       menu?.classList.toggle('menu-active');
  
//       console.log(checked, menuStyle);
//     }
  
    let selectedID: number = -1;

    const expandCard = (idx: number) => {
        // console.log(selectedID);
        // const card = document.querySelector('.card');        
        const card = document.getElementById(`${idx}`);
        // card?.classList.toggle('card-zoomin');
        // setTimeout(() => { card?.classList.toggle('card-zoomin') }, 600);
        setTimeout(() => { card?.classList.toggle('card-active') }, 100);

        // card?.classList.toggle('card-active');
        if (selectedID === idx) {
            card?.classList.toggle('card-zoomout');
            setTimeout(() => { card?.classList.toggle('card-zoomout') }, 200);
        }

        // setFade(!fade);

        console.log(card);
        selectedID = idx;
    }

    const cardClicked = (idx: number) => {
        // let mut: any = (document.getElementById(`${idx}`));
        // console.log(idx, mut);
        // mut.style.transform = "rotate(20deg)";
        console.log(idx);
        // const document.getElementById(idx)?.style.transform = "rotate(20deg)";
        return ({});
    }
// (event, info)=> {console.log(info.point.x, info.point.y, event);}
    return(
        <div className="portfolio">
            <div className="Title">
                <h1>Portfolio</h1>
            </div>
            <div className="content">
                {cardNames.map((name, idx) => 

                
                    <motion.div id={`${idx}`} key={idx} className="card" style={{backgroundImage: `url(${cardBackgrounds[idx]})`}} 
                    initial={cardInit} animate={cardFinal} transition={{...trans, delay: 0.1*idx}}
                    onClick={() => expandCard(idx)}
                    whileTap={{scale: 0.94}}>
                        {/* <div className="inner-card" id={`${idx}`} key={idx} onClick={() => expandCard(idx)}> */}
                            <motion.h2>{name}</motion.h2>
                        {/* </div> */}
                        {/* <motion.h2>{name}</motion.h2> */}
                    </motion.div>

                )}

            </div>
            <div className="icon-container">
                <a href="https://github.com/johngilbert2000" target="_blank"><i className="fab fa-github fa-3x"></i></a>
                <p className="github-label">My GitHub</p>
            </div>
        </div>
    );
}

export default Portfolio;