import React, { useContext } from 'react';
import {motion} from 'framer-motion';
import { StoreContext } from '../storeContext';


const About: React.FunctionComponent = () => {

    const Context = useContext(StoreContext);
    const [lang, setLang] = Context.lang;

    const initial = {
        opacity: 0,
        y: -80
    }
    const final = {
        opacity: 1,
        y: 0,
        scale: 1
    }
    const trans = {
        type: "spring",
        duration: 0.5,
        stiffness: 50,
        delay: 0.7, // 0.6
    }
    const trans2 = {
        type: "spring",
        duration: 2,
        delay: 1.1, // 0.9
        stiffness: 20,
    }
    const contentInitial = {
        scale: 0.4,
    }
    const imgInit = {
        x: -50,
        opacity:0,
    }
    const imgFinal = {
        x: 0,
        opacity: 1,
    }
    const imgTrans = {
        type: "tween",
        duration: 0.1,
        delay: 1.4,
    }
    const hover = {
        // scale: 1.01
        // y: 10,
    }

    return(
        <div className="about">
            <motion.div className="img-container" initial={imgInit} animate={imgFinal} transition={imgTrans}></motion.div>
            {(lang==="english") && (
                <div className="content-container">
                    <motion.div className="content" initial={contentInitial} animate={final} exit={contentInitial} transition={{duration: 0.1}} >
                        <motion.p initial={initial} animate={final} exit={initial} transition={trans} whileHover={hover}>
                            Hello, my name is <span>John Gilbert</span> and I am passionate about science and technology. 
                            Current interests include <span>AI</span> and <span>distributed systems</span>. 
                            I also love to travel, and am fluent in <span>English, Spanish,</span> and <span>Mandarin Chinese</span>. 
                            I am always learning new skills.
                        </motion.p>
                        <motion.p initial={initial} animate={final} exit={initial} transition={trans2} whileHover={hover}>
                            Prior to developing software, 
                            I worked as a <span>chemist</span> in <span>analytical</span> and <span>organic research</span> laboratories,
                            as well as in the pharmaceutical industry. 
                            Skilled in the <span>scientific method</span>, I bring both rigor and experimentation to my work.
                        </motion.p>
                    </motion.div>
                </div>
            ) || (lang==="spanish") && (
                <div className="content-container">
                    <motion.div className="content" initial={contentInitial} animate={final} exit={contentInitial} transition={{duration: 0.1}} >
                        <motion.p initial={initial} animate={final} exit={initial} transition={trans} whileHover={hover}>
                            Hola, me llamo <span>John Gilbert</span>, y soy apasionado por la ciencia y la tecnología. 
                            Mis intereses incluyen la <span>inteligencia artificial</span> y <span>sistemas distribuidos</span>. 
                            Me encanta viajar también, y hablo <span>ingles</span>, <span>español</span>, y <span>chino</span> con fluidez. 
                            Siempre estoy aprendiendo nuevas habilidades.
                        </motion.p>
                        <motion.p initial={initial} animate={final} exit={initial} transition={trans2} whileHover={hover}>
                            Antes de desarrollar software, tabajé como <span>químico</span> en 
                            laboratorios <span>analíticos</span> y de <span>investigación organica</span>, 
                            y también en la industria farmacéutica. 
                            Con un firme <span>conocimiento de la ciencia</span>, el rigor científico y la experimentación 
                            son cualidades de mi trabajo.
                        </motion.p>
                    </motion.div>
                </div>
            ) || (lang==="chinese_traditional") && (
                <div className="content-container cn">
                    <motion.div className="content" initial={contentInitial} animate={final} exit={contentInitial} transition={{duration: 0.1}} >
                        <motion.p initial={initial} animate={final} exit={initial} transition={trans} whileHover={hover}>
                            您好，我叫 <span>John Gilbert</span>，還有我對科學和科技都熱烈感興趣。
                            目前興趣包括<span>人工智慧</span>和<span>分散式系統</span>。另外，我喜歡旅遊。
                            我<span>英文</span>、<span>西班牙文</span>、和<span>中文</span>都會說得很流利。我一直在學新的能力。
                        </motion.p>
                        <motion.p initial={initial} animate={final} exit={initial} transition={trans2} whileHover={hover}>
                            寫程式之前，我在<span>分析化學</span>和<span>有機化學</span>的實驗室當過<span>化學家</span>，
                            而且在製藥業工作過。我習慣了從科學的角度來開始解決問題。
                        </motion.p>
                    </motion.div>
                </div>
            ) || (lang==="chinese_simplified") && (
                <div className="content-container cn">
                    <motion.div className="content" initial={contentInitial} animate={final} exit={contentInitial} transition={{duration: 0.1}} >
                        <motion.p initial={initial} animate={final} exit={initial} transition={trans} whileHover={hover}>
                            您好，我叫 <span>John Gilbert</span>，还有我对科学和科技都热烈感兴趣。
                            目前兴趣包括<span>人工智慧</span>和<span>分散式系统</span>。另外，我喜欢旅游。
                            我<span>英文</span>、<span>西班牙文</span>、和<span>中文</span>都会说得很流利。我一直在学新的能力。
                        </motion.p>
                        <motion.p initial={initial} animate={final} exit={initial} transition={trans2} whileHover={hover}>
                            写程序之前，我在<span>分析化学</span>和<span>有机化学</span>的实验室当过<span>化学家</span>，
                            而且我在制药业工作过。我习惯了从科学的角度来开始解决问题。
                        </motion.p>
                    </motion.div>
                </div>
            )}
        </div>
    );
}

export default About;