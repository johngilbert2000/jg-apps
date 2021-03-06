import React, { useState, useContext } from 'react';
import {motion, useAnimation} from 'framer-motion';

import bg_dengue from '../../images/dengue_scr.png';
import bg_nested from '../../images/nestedlookahead_scr.png';
import bg_sentiment from '../../images/sentiment140_scr.png';
import bg_bio from '../../images/bio_scr.png';
import bg_quantum from '../../images/phase_scr.png';
import bg_kde from '../../images/code_shot2.png';
import bg_os from '../../images/os_sched_scr.png';
import bg_fed from '../../images/sentiment140_scr.png';
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

    const [fade, setFade] = useState(false);
    const [selectedID, setZoom] = useState(0);

    const [cardValue, setCardValue] = useState("");

    const cardNames: string[] = [
        "Dengue Prediction",
        "Nested Lookahead",
        "Sentiment140 Analysis",
        "Bacteriocin Sequence Prediction",
        "Quantum Phase Estimation",
        "KDE Implementation",
        "OS Scheduler",
        "Django-Paypal Example",
        "React Portfolio",
    ]

    const cardNames_spanish: string[] = [
        "Predicción sobre el Dengue",
        "Nested Lookahead",
        "Análisis de Sentiment140",
        "Predicción de las Secuencias de Bacteriocinas",
        "Estimación de Fase Cuántica",
        "KDE Implementación",
        "Plantificación de Procesos",
        "Ejemplo de Django-Paypal",
        "Portafolio con React",

    ]

    const cardNames_chinese_traditional: string[] = [
        "登革熱預測",
        "Nested Lookahead",
        "Sentiment140分析",
        "細菌素序列預測",
        "量子相預測",
        "KDE做法",
        "作業系統排程",
        "Django-Paypal的例子",
        "React的網站",
    ]

    const cardNames_chinese_simplified: string[] = [
        "登革热预测",
        "Nested Lookahead",
        "Sentiment140分析",
        "细菌素序列预测",
        "量子相预测",
        "KDE做法",
        "作业系统排程",
        "Django-Paypal的例子",
        "React的网站",
    ]


     const descID: string[] = [
        "dengue",
        "nested",
        "sentiment",
        "bio",
        "quantum",
        "kde",
        "os",
        "django",
        "portfolio",
    ]

    const cardDesc = {
        "en": {
            "dengue": <p>I trained and assessed various machine learning models in Python 
                and R for predicting dengue fever in patients based on various symptoms and factors. 
                The models included logistic regression, decision trees, as well as basic deep learning 
                models designed for tabular analysis. The project involved using Scikit-Learn, Rpart, 
                Tensorflow, and Fastai. The data was made available to Professor Yen-Jen Oyang's lab at NTU 
                from various hospitals in Taiwan, but otherwise remains confidential.</p>,
            "nested": <p>This project was an implementation of a modified <a href="https://arxiv.org/abs/1907.08610" target="_blank" rel="noopener noreferrer">Lookahead Optimizer</a> in Pytorch. 
                This was done to assess whether multiple levels of Lookahead could improve convergence. 
                Overall, I demonstrated that regular Lookahead can indeed improve convergence when combined with
                optimizers such as Adam, but that multiple levels of Lookahead ("Nested Lookahead") does not 
                lead to an increase in performance.</p>,
            "sentiment": <p>The sentiment140 dataset contains 1.6 million tweets from Twitter, 
                along with scores rating whether the posts were of positive or negative sentiment. 
                This project was an example of training and performing sentiment analysis with Tensorflow and Fastai.</p>,
            "bio": <div>
                <p>
                    This was my own implementation of the following research paper: 
                    <a href="https://pubmed.ncbi.nlm.nih.gov/30418485/" target="_blank" rel="noopener noreferrer"> "Identifying antimicrobial peptides using word embedding with deep recurrent neural networks" </a> 
                    by Hamid and Friedberg.
                </p>
                <p>
                    This was part of a group project done in collaboration with Albert Li (李律), 
                    a fellow classmate at NTU. Together, we trained a neural network with 5-fold cross validation 
                    to classify whether or not amino acid sequences belonged to bacteriocins.
                </p>
                <p>
                    We compiled our own datasets of amino acid sequences from Uniprot and BAGEL databases. 
                    Amino acid sequences were split into trigrams, which then were used to train word embeddings using Gensim. 
                    The weights were then reused in training a Tensorflow model, which we assessed with a ROC curve and various other statistical metrics. 
                </p>
            </div>,
            "quantum": <div>
                <p>
                    This project implements a Quantum Phase Estimation circuit with an arbitrary number of qubits. 
                    The output of a quantum computer was simulated using Python's Qiskit library. 
                    Phase estimation allows for more advanced circuits and algorithms, such as 
                    the HHL algorithm which could theoretically be used to solve linear systems Ax = b with a quantum computer.
                </p>
                <p>
                    This was a project for a Quantum Algorithms course at NTU, offered by Professor Wen-Chin Chen (陳文進). 
                    References for the project include notes by Professor Chen as well as the documentation at <a href="https://qiskit.org/" target="_blank" rel="noopener noreferrer">qiskit.org</a>. 
                </p>
            </div>,
            "kde": <p>This was an implementation and comparison of various Kernel Density Estimation (KDE) methods, 
                including Silverman's fixed bandwidth KDE, Abramson's variable bandwidth KDE, relaxed variable KDE, 
                and elevated relaxed variable KDE. I initially implemented these methods using Cython for optimization, 
                but then switched to Numba for an easier debugging experience. I also implemented part of this in Julia, but ultimately 
                finished with Python as I am more familiar with Python's ecosystem.</p>,
            "os": <p>In this project, I built a program that creates, pauses, and resumes processes to mimic an operating system scheduler. 
                The program works with policies such as FIFO (First In First Out), RR (Round Robin), SJF (Shortest Job First), and PSJF (Preemptive Shortest Job First). 
                It was written in C and involved in the use of custom Linux syscalls. This project was done for an Operating Systems course at NTU.</p>,
            "django": <p>The sample code linked below provides a general-purpose example of part of an e-commerce website 
                that uses the django-paypal API to carry out transactions. This sample code is to be used primarily as a reference 
                for implementing django-paypal IPN transactions with Django, as well as to demonstrate my ability to work with Django.</p>,
            "portfolio": <p>This portfolio website was built using React, Sass, and Typescript. 
                State was managed with useContext and useState hooks, allowing for features such as changing 
                the site language without reloading the page. Page transitions were done with Animate.css, 
                framer-motion, and react-awesome-reveal.</p>,
        },
        "es": {
            "dengue": <p>Entrené y evalué varios modelos de aprendizaje automatico con Python y R para predicir dengue 
                a partir de varios síntomas y factores. Los modelos incluyeron regresión logística, árboles de decisión, 
                así como modelos básicos de aprendizaje profundo diseñados para analizar datos tabulares. Usé Scikit-Learn, Rpart, Tensorflow, y Fastai. 
                Los datos fueron facilitados del laboratorio de Profesor Yen-Jen Oyang en NTU por varios hospitales en Taiwán, 
                pero para los demás siguen siendo confidenciales.</p>,
            "nested": <p>Este proyecto fue una implementación de un optimizador modificado de <a href="https://arxiv.org/abs/1907.08610" target="_blank" rel="noopener noreferrer">Lookahead</a>. 
                El propósito era evaluar si usando múltiples niveles de Lookahead podrían mejorar la convergencia. 
                En general, demostré que el Lookahead regular puede mejorar la convergencia cuando se combina con optimizadores como Adam, 
                pero que múltiples niveles de Lookahead ("Nested Lookahead") no mejora la convergencia.</p>,
            "sentiment": <p>El conjunto de datos de Sentiment140 contiene 1.6 millones de tweets de Twitter, 
                junto con puntaciones que califican si fueron de sentimiento positivo o negativo. 
                Este proyecto fue un ejemplo de entrenamiento y de la realización de análisis de sentimientos con Tensorflow y Fastai.</p>,
            "bio": <div>
                <p>
                    Esta fue mi propria implementación del siguiente artículo de investigación:
                    <a href="https://pubmed.ncbi.nlm.nih.gov/30418485/" target="_blank" rel="noopener noreferrer"> "Identifying antimicrobial peptides using word embedding with deep recurrent neural networks" </a> 
                    de Hamid y Friedberg.
                </p>
                <p>
                    Esto fue parte de un proyecto de grupo hecho en colaboración con Albert Li (李律), 
                    un compañero de clase de NTU. Juntos, entrenamos una red neuronal con validación cruzada 
                    de 5 iteraciones para clasificar si las secuencias de los aminoácidos pertenecían a bacteriocinas.
                </p>
                <p>
                    Compilamos nuestros proprios conjuntos de datos de secuencias de aminoácidos de las bases de datos de Uniprot y BAGEL. 
                    Las secuencias de aminoácidos se dividieron en trigramas, que luego se usaron para entrenar word embeddings utilizando Gensim. 
                    Los pesos se reutilizaron para entrenar un modelo de Tensorflow, que evaluamos con una curva ROC y varias otras métricas estadísticas.
                </p>
            </div>,
            "quantum": <div>
                <p>
                    Implementé un circuito de Estimación de Fase Cuántica con un número arbitrario de qubits. 
                    La salida de una computadora cuántica se simuló utilizando Qiskit. La estimación de fase hace posibile circuitos 
                    y algoritmos más avanzados, como el algoritmo HHL que teóricamente se podría utilizar para resolver sistemas lineales 
                    Ax = b con una computadora cuántica.
                </p>
                <p>
                    Este fue un proyecto para un curso de Algoritmos Cuánticos en NTU del Profesor Wen-Chin Chen (陳文進). 
                    Referencias para el proyecto incluyen apuntes por el Profesor Chen y la documentación en <a href="https://qiskit.org/" target="_blank" rel="noopener noreferrer">qiskit.org</a>. 
                </p>
            </div>,
            "kde": <p>Esta fue una implementación y comparación de varios métodos de estimación de densidad de kernel (KDE), 
                incluyendo la KDE de ancho de banda fijo de Silverman, la KDE de ancho de banda variable de Abramson, 
                y la KDE de variable relajada, y la KDE de variable relajada elevada. Inicialmente implementé estos metodos 
                utilizando Cython para optimización, pero luego cambié a utilizar Numba para una experiencia de depuración más fácil. 
                También implementé parte de esto en Julia, pero finalmente terminé con Python porque conozco más sobre el ecosistema de Python.</p>,
            "os": <p>En este proyecto, construí una programa que crea, pausa, y reanuda procesos para imitar un planificador 
                de sistema operativo. Esta programa funciona con policias como PEPS (primero en entrar, primero en salir), 
                RR (Round Robin), SJF (Shortest Job First), y PSJF (Preemptive Shortest Job First). Se escribió en C y se utilizó 
                syscalls personalizadas de Linux.</p>,
            "django": <p>El código ejemplar, con su vínculo abajo-escrito, es un ejemplo general de parte de un sitio web de comercio que utiliza Django-Paypal
                para hacer transacciones. Se puede utilizar este código como un ejemplo para implementar las transacciones IPN con Django-Paypal,
                tanto como de mi capacidad en el uso de Django.</p>,
            "portfolio": <p>Este sitio web del portafolio fue construido utilizando React, Sass, y Typescript. 
                El estado fue manejado con los hooks de useContext y useState, los cuales facilitan características como 
                el cambio del idioma sin recargar la página. Las transiciones de la página se hicieron con Animate.css, framer-motion, y react-awesome-reveal.</p>,
        },
        "chs": {
            "dengue": <p>[ Translation in progress ]</p>,
            "nested": <p>[ Translation in progress ]</p>,
            "sentiment": <p>[ Translation in progress ]</p>,
            "bio": <p>[ Translation in progress ]</p>,
            "quantum": <p>[ Translation in progress ]</p>,
            "kde": <p>[ Translation in progress ]</p>,
            "os": <p>[ Translation in progress ]</p>,
            "django": <p>[ Translation in progress ]</p>,
            "portfolio": <p>[ Translation in progress ]</p>,
        },
        "cht": {
            "dengue": <p>[ Translation in progress ]</p>,
            "nested": <p>[ Translation in progress ]</p>,
            "sentiment": <p>[ Translation in progress ]</p>,
            "bio": <p>[ Translation in progress ]</p>,
            "quantum": <p>[ Translation in progress ]</p>,
            "kde": <p>[ Translation in progress ]</p>,
            "os": <p>[ Translation in progress ]</p>,
            "django": <p>[ Translation in progress ]</p>,
            "portfolio": <p>[ Translation in progress ]</p>,
        },
    }

    const cardLinks = {
        "dengue": "https://github.com/johngilbert2000",
        "nested": "https://github.com/johngilbert2000/nested_lookahead",
        "sentiment": "https://github.com/johngilbert2000/sentiment140_with_fastai",
        "bio": "https://github.com/johngilbert2000/bioinformatics_project",
        "quantum": "https://github.com/johngilbert2000/quantum_phase_estimation",
        "kde": "https://github.com/johngilbert2000/KDE_project",
        "os": "https://github.com/johngilbert2000/os_sched2",
        "django": "https://github.com/johngilbert2000/django-paypal-demonstration",
        "portfolio": "https://github.com/johngilbert2000/jg-apps",
    }

    const gitButt = {
       "button" :  
            <div className="btn-wrapper">
                <a href={(cardLinks as any)[descID[selectedID]]} target="_blank" rel="noopener noreferrer">
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
                            <button className="btn">在 Github 看</button>
                        </div>
                    ) || (lang==="chinese_simplified") && (
                        <div>
                            <button className="btn">在 Github 看</button>
                        </div>
                    )} 
                </a>
            </div>,
        "noButton" : <div></div>,
    }

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
        const card = document.getElementById(`${idx}`);

        if (selectedID !== idx) {
            card?.classList.toggle('card-zoomin');
            setTimeout(() => { card?.classList.toggle('card-zoomin') }, 200);
            switch(lang) {
                case "english": setCardValue((cardDesc as any).en[descID[idx]]); break;
                case "spanish": setCardValue((cardDesc as any).es[descID[idx]]); break;
                case "chinese_traditional": setCardValue((cardDesc as any).cht[descID[idx]]); break;
                case "chinese_simplified": setCardValue((cardDesc as any).chs[descID[idx]]); break;
                default: setCardValue((cardDesc as any).en[descID[idx]]);
            }
        }
        setTimeout(() => { card?.classList.toggle('card-active') }, 200);

        if (selectedID === idx) {
            card?.classList.toggle('card-zoomout');
            setTimeout(() => { card?.classList.toggle('card-zoomout') }, 200);
        }

        setFade(!fade);
        setZoom(idx);
    }

    return(
        <div>
            <div className="portfolio">
                <div className="Title">
                    {(lang==="english") && (
                        <h1>Portfolio</h1>
                    ) || (lang==="spanish") && (
                        <h1>Portafolio</h1>
                    ) || (lang==="chinese_traditional") && (
                        <h1 className="cn">專案</h1>
                    ) || (lang==="chinese_simplified") && (
                        <h1 className="cn">专案</h1>
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
                                <motion.h2 className="cn">{cardNames_chinese_traditional[idx]}</motion.h2>
                            ) || (lang==="chinese_simplified") && (
                                <motion.h2 className="cn">{cardNames_chinese_simplified[idx]}</motion.h2>
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
                                <div>
                                    {(cardDesc as any).en[descID[selectedID]]}
                                </div>
                            ) || (lang==="spanish") && (
                                <div>
                                    {(cardDesc as any).es[descID[selectedID]]}
                                </div>
                            ) || (lang==="chinese_traditional") && (
                                <div className="cn">
                                    {(cardDesc as any).cht[descID[selectedID]]}
                                </div>
                            ) || (lang==="chinese_simplified") && (
                                <div className="cn">
                                    {(cardDesc as any).chs[descID[selectedID]]}
                                </div>
                            )}
                            {(selectedID === 0) ? gitButt.noButton : gitButt.button}
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