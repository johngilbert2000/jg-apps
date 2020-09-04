import React, { useContext } from 'react';
import {motion} from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { StoreContext } from '../../storeContext';

const Banner: React.FunctionComponent = () => {

  const Context = useContext(StoreContext);
  const [lang, setLang] = Context.lang;

  const d = 0.5; // delay 1.7 0.7

  const coverInit = {
    opacity: 0,
    y: -40
  }
  const coverFinal = {
    opacity: 1,
    y: 0
  }
  const trans = {
    type: "tween",
    duration: 1,
    delay: d
  }

  return(
    <div className="banner">
      {(lang==="english") && (
        <div className="cover" >
          <Fade duration={1500}>
          <motion.h1 className="Title" initial={coverInit} animate={coverFinal} transition={trans} >
            Explore   Achieve   Surpass
          </motion.h1>
          <motion.h2 className="Title2" initial={{opacity:0, y: -25}} animate={coverFinal} transition={{...trans, delay: d+0.5}} >
            Hire a developer skilled in <span>AI, web development, </span> 
            and <span>scientific research</span>
          </motion.h2>
          </Fade>
        </div>
      ) ||
      (lang==="spanish") && (
        <div className="cover" >
          <Fade duration={1500}>
          <motion.h1 className="Title" initial={coverInit} animate={coverFinal} transition={trans} >
            Explorar   Lograr   Superar
          </motion.h1>
          <motion.h2 className="Title2" initial={{opacity:0, y: -25}} animate={coverFinal} transition={{...trans, delay: d+0.5}} >
            Contrata un desarrollador hábil en <span>inteligencia artificial, desarrollo web, </span> 
            y <span>investigación cientifica</span>
          </motion.h2>
          </Fade>
        </div>
      ) ||
      (lang==="chinese_traditional") && (
        <div className="cover" >
          <Fade duration={1500}>
          <motion.h1 className="Title" initial={coverInit} animate={coverFinal} transition={trans} >
            探索 成就 超越
          </motion.h1>
          <motion.h2 className="Title2" initial={{opacity:0, y: -25}} animate={coverFinal} transition={{...trans, delay: d+0.5}} >
            聘用對<span>人工智慧</span>、<span>網站編輯 </span>、以及<span>科學研究</span>有能力的編程者吧
          </motion.h2>
          </Fade>
        </div>
      ) ||
      (lang==="chinese_simplified") && (
        <div className="cover" >
          <Fade duration={1500}>
          <motion.h1 className="Title" initial={coverInit} animate={coverFinal} transition={trans} >
            探索 成就 超越
          </motion.h1>
          <motion.h2 className="Title2" initial={{opacity:0, y: -25}} animate={coverFinal} transition={{...trans, delay: d+0.5}} >
            应聘对<span>人工智慧、网站编程</span>、以及<span>科学研究</span>有能力的编程者吧
          </motion.h2>
          </Fade>
        </div>
      )}
    </div>
    );
}

export default Banner;
