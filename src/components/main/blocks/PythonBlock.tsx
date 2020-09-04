import React, { useContext } from 'react';
import {motion} from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { StoreContext } from '../../storeContext';

const PythonBlock: React.FunctionComponent = () => {
  const Context = useContext(StoreContext);
  const [lang, setLang] = Context.lang;

  const coverInit = {
    opacity: 0,
    // y: -400
  }
  const coverFinal = {
    opacity: 1,
    y: 0
  }
  const trans = {
    type: "spring",
    duration: 1,
    delay: 1.4, // 2.5

  }

  return(
    <div className="ai-bloc" >

      {(lang==="english") && (
        <motion.div className="content Title" initial={coverInit} animate={coverFinal} transition={trans}>
          <Fade damping={1.5} delay={300} fraction={0.4} duration={1500}>
          <motion.p initial={coverInit} animate={coverFinal} transition={{...trans, delay: 1}}>
          {/* <p> */}
            Experienced with <span>Natural Language Processing, Image Classification</span>, and <span>Tabular Data</span> analysis, 
            I have developed deep learning models and optimizers in <span>Pytorch</span> and <span>Tensorflow</span>.
          </motion.p>
          {/* </p> */}
          {/* <Fade triggerOnce={true}> */}
          <p>
            I am familiar with <span>Python’s</span> ecosystem and its computational limitations. 
            I have used both <span>Cython</span> and <span>Numba</span> to achieve performance boosts when 
            the code could not run on the <span>GPU</span> or be vectorized with <span>Numpy</span>.
          </p>
          </Fade>
        </motion.div>
      ) || (lang==="spanish") && (
        <motion.div className="content Title" initial={coverInit} animate={coverFinal} transition={trans}>
          <Fade damping={1.5} delay={300} fraction={0.4} duration={1500}>
          <motion.p initial={coverInit} animate={coverFinal} transition={{...trans, delay: 1}}>
            Con experiencia en el <span>Procesamiento Natural del Lenguaje</span>, <span>Clasificación de Imágenes</span>, 
            y <span>Analisis de Datos Tabulares</span>, he desarrollado modeles de deep learning (aprendizaje profundo) 
            y optimizadores en <span>Pytorch</span> y <span>Tensorflow</span>.
          </motion.p>
          <p>
            Estoy familiarizado con el ecosistema de <span>Python</span> y sus limitaciones computacionales. 
            He usado <span>Cython</span> y <span>Numba</span> para obtener aumentos de rendimiento cuando el código 
            no podía ejecutarse en la <span>GPU</span> o ser vectorizado con <span>Numpy</span>.
          </p>
          </Fade>
        </motion.div>
      ) || (lang==="chinese_traditional") && (
        <motion.div className="content Title" initial={coverInit} animate={coverFinal} transition={trans}>
          <Fade damping={1.5} delay={300} fraction={0.4} duration={1500}>
          <motion.p initial={coverInit} animate={coverFinal} transition={{...trans, delay: 1}}>
            對<span>自然語言</span>處理、<span>圖像分類</span>、以及<span>表格數據分析</span>都有經驗。
            我用過 <span>Pytorch</span> 和 <span>Tensorflow</span> 為了做出來深度學習的模型和優化器。
          </motion.p>
          <p>
            我對 <span>Python</span> 的生態系統和它的運算缺點很熟悉。
            我用過 <span>Cython</span> 和 <span>Numba</span> 為了進步優化，還有 <span>Numpy</span> 的向量功能也會常用。
          </p>
          </Fade>
        </motion.div>
      ) || (lang==="chinese_simplified") && (
        <motion.div className="content Title" initial={coverInit} animate={coverFinal} transition={trans}>
          <Fade damping={1.5} delay={300} fraction={0.4} duration={1500}>
          <motion.p initial={coverInit} animate={coverFinal} transition={{...trans, delay: 1}}>
          {/* <p> */}
            Experienced with <span>Natural Language Processing, Image Classification</span>, and <span>Tabular Data</span> analysis, 
            I have developed deep learning models and optimizers in <span>Pytorch</span> and <span>Tensorflow</span>.
          </motion.p>
          {/* </p> */}
          {/* <Fade triggerOnce={true}> */}
          <p>
            I am familiar with <span>Python’s</span> ecosystem and its computational limitations. 
            I have used both <span>Cython</span> and <span>Numba</span> to achieve performance boosts when 
            the code could not run on the <span>GPU</span> or be vectorized with <span>Numpy</span>.
          </p>
          </Fade>
        </motion.div>
      )}

    </div>
    );
}

export default PythonBlock;