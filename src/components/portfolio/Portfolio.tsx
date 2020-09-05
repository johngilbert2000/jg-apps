import React, { useState, useContext } from 'react';
import {motion, useAnimation} from 'framer-motion';

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
import { Fade } from 'react-awesome-reveal';
import { StoreContext } from '../storeContext';


const Portfolio: React.FunctionComponent = () => {
    const Context = useContext(StoreContext);
    const [lang, setLang] = Context.lang;

    const cardInit = {opacity:0, scale:1};
    const cardFinal = {opacity:1, scale:1};
    const trans = {type:"spring", duration: 0.2};
    // const controls = useAnimation();

    const [fade, setFade] = useState(false);
    const [selectedID, setZoom] = useState(0);

    const [cardValue, setCardValue] = useState("");
    // let fade: boolean = false;

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

    const cardDescriptions: string[] = [
        "Dengue Prediction description english",
        "Nested Lookahead description english",
        "Sentiment140 Analysis description english",
        "Bacteriocin Sequence Prediction description english",
        "Quantum Phase Estimation description english",
        "KDE Implementation description english",
        "OS Scheduler description english",
        "Asynchronous Federated Learning description english",
        "React Portfolio description english",
    ]


    const cardNames_spanish: string[] = [
        "Dengue Predicción",
        "Nested Lookahead",
        "Análisis de Sentiment140",
        "Predicción de las Secuencias de Bacteriocinas",
        "Estimación de Fase Cuántica",
        "KDE Implementación",
        "Planificador de Sistema Operativo",
        "Aprendimiento Federado Asincrónico",
        "Portafolio con React",

    ]

    const cardDescriptions_spanish: string[] = [
        "Dengue Prediction description spanish",
        "Nested Lookahead description spanish",
        "Sentiment140 Analysis description spanish",
        "Bacteriocin Sequence Prediction description spanish",
        "Quantum Phase Estimation description spanish",
        "KDE Implementation description spanish",
        "OS Scheduler description spanish",
        "Asynchronous Federated Learning description spanish",
        "React Portfolio description spanish",
    ]


    const cardNames_chinese_traditional: string[] = [
        "登革熱預測",
        "Nested Lookahead",
        "Sentiment140分析",
        "細菌素序列預測",
        "量子相預測",
        "KDE做法",
        "作業系統排程",
        "非同步的聯邦學習",
        "React的網站",
    ]

    const cardDescriptions_chinese_traditional: string[] = [
        "Dengue Prediction description chinese traditional",
        "Nested Lookahead description chinese traditional",
        "Sentiment140 Analysis description chinese traditional",
        "Bacteriocin Sequence Prediction description chinese traditional",
        "Quantum Phase Estimation description chinese traditional",
        "KDE Implementation description chinese traditional",
        "OS Scheduler description chinese traditional",
        "Asynchronous Federated Learning description chinese traditional",
        "React Portfolio description chinese traditional",
    ]


    const cardNames_chinese_simplified: string[] = [
        "登革热预测",
        "Nested Lookahead",
        "Sentiment140分析",
        "细菌素序列预测",
        "量子相预测",
        "KDE做法",
        "作业系统排程",
        "非同步的联邦学习",
        "React的网站",
    ]

    const cardDescriptions_chinese_simplified: string[] = [
        "Dengue Prediction description chinese simplified",
        "Nested Lookahead description chinese simplified",
        "Sentiment140 Analysis description chinese simplified",
        "Bacteriocin Sequence Prediction description chinese simplified",
        "Quantum Phase Estimation description chinese simplified",
        "KDE Implementation description chinese simplified",
        "OS Scheduler description chinese simplified",
        "Asynchronous Federated Learning description chinese simplified",
        "React Portfolio description chinese simplified",
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


    const expandCard = (idx: number) => {
        // console.log(selectedID);
        // const card = document.querySelector('.card');        
        const card = document.getElementById(`${idx}`);

        if (selectedID !== idx) {
            // console.log('zoom in', idx, selectedID);
            card?.classList.toggle('card-zoomin');
            setTimeout(() => { card?.classList.toggle('card-zoomin') }, 200);
            // selectedID = idx;
            switch(lang) {
                case "english": setCardValue(cardDescriptions[idx]); break;
                case "spanish": setCardValue(cardDescriptions_spanish[idx]); break;
                case "chinese_traditional": setCardValue(cardDescriptions_chinese_traditional[idx]); break;
                case "chinese_simplified": setCardValue(cardDescriptions_chinese_simplified[idx]); break;
                default: setCardValue(cardDescriptions[idx]);
            }
            // setCardValue(cardNames[idx]);
        }
        setTimeout(() => { card?.classList.toggle('card-active') }, 200);

        // card?.classList.toggle('card-active');
        if (selectedID === idx) {
            // setTimeout(() => {
            //     console.log('zoomout');
            //     card?.classList.toggle('card-zoomout');
            //     setTimeout(() => { card?.classList.toggle('card-zoomout') }, 200); // 200
            // }, 300);
            // console.log('zoom out');
            card?.classList.toggle('card-zoomout');
            setTimeout(() => { card?.classList.toggle('card-zoomout') }, 200); // 200
        }
        // selectedID = idx;

        setFade(!fade);
        setZoom(idx);
        // fade = !fade;
        // setTimeout(() => setFade(!fade), 200);

        // console.log(card);
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
        

        <div>


            <div className="portfolio">
                <div className="Title">
                    {(lang==="english") && (
                        <h1>Portfolio</h1>
                    ) || (lang==="spanish") && (
                        <h1>Portafolio</h1>
                    ) || (lang==="chinese_traditional") && (
                        <h1>專案</h1>
                    ) || (lang==="chinese_simplified") && (
                        <h1>专案</h1>
                    )}
                </div>
                <div className="content">
                    {cardNames.map((name, idx) => 

                    
                        <motion.div id={`${idx}`} key={idx} className="card" 
                        style={{backgroundImage: `url(${cardBackgrounds[idx]})`}} 
                        initial={cardInit} animate={cardFinal} transition={{...trans, delay: 0.1*idx}}
                        onClick={() => expandCard(idx)}
                        whileTap={{scale: 0.94}}>
                            {(lang==="english") && (
                                <motion.h2>{name}</motion.h2>
                            ) || (lang==="spanish") && (
                                <motion.h2>{cardNames_spanish[idx]}</motion.h2>
                            ) || (lang==="chinese_traditional") && (
                                <motion.h2>{cardNames_chinese_traditional[idx]}</motion.h2>
                            ) || (lang==="chinese_simplified") && (
                                <motion.h2>{cardNames_chinese_simplified[idx]}</motion.h2>
                            )}
                            {fade && (
                                <div className="scroll-me">
                                    <div className="long-content">
                                        <p className="card-info"></p>
                                    </div>
                                </div>
                            ) }
                            {fade && (
                                <div className="X"><h1>&times;</h1></div>
                            )}
                        </motion.div>
                    )}

                    { fade && (
                        <motion.div className="scroll-this" initial={{opacity:0}} animate={{opacity: 1}}>
                            {(lang==="english") && (
                                <p>{cardDescriptions[selectedID]}</p>
                            ) || (lang==="spanish") && (
                                <p>{cardDescriptions_spanish[selectedID]}</p>
                            ) || (lang==="chinese_traditional") && (
                                <p>{cardDescriptions_chinese_traditional[selectedID]}</p>
                            ) || (lang==="chinese_simplified") && (
                                <p>{cardDescriptions_chinese_simplified[selectedID]}</p>
                            )}
                            <div className="btn-wrapper">
                                <a href="https://github.com/johngilbert2000" target="_blank">
                                    {(lang==="english") && (
                                       <div>
                                            <button className="btn">View on Github</button>
                                        </div>
                                    ) || (lang==="spanish") && (
                                       <div>
                                            <button className="btn">Ver en Github</button>
                                        </div>
                                    ) || (lang==="chinese_traditional") && (
                                       <div>
                                            <button className="btn">在Github看</button>
                                        </div>
                                    ) || (lang==="chinese_simplified") && (
                                       <div>
                                            <button className="btn">在Github看</button>
                                        </div>
                                    )}
 
                                </a>
                            </div>
                        </motion.div>
                    )}
                    { fade && (
                        <motion.div className="card-cover" initial={{opacity: 0}} animate={{opacity: 1}}></motion.div>
                    )}
                </div>
                <div className="icon-container">
                    <a href="https://github.com/johngilbert2000" target="_blank"><i className="fab fa-github fa-3x"></i></a>
                    
                    {(lang==="english") && (
                        <p className="github-label">My GitHub</p>
                    ) || (lang==="spanish") && (
                        <p className="github-label">Mi GitHub</p>
                    ) || (lang==="chinese_traditional") && (
                        <p className="github-label">我的GitHub</p>
                    ) || (lang==="chinese_simplified") && (
                        <p className="github-label">我的GitHub</p>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Portfolio;