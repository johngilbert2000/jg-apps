import React, { useContext } from 'react';
import {motion} from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { StoreContext } from '../../storeContext';

const PythonBlock: React.FunctionComponent = () => {
  const Context = useContext(StoreContext);
  const [lang, setLang] = Context.lang;

  const coverInit = {
    opacity: 0,
  }
  const coverFinal = {
    opacity: 1,
    y: 0
  }
  const trans = {
    type: "spring",
    duration: 1,
    delay: 1.4,

  }

  return(
    <div className="ai-bloc" >
      {(lang==="english") && (
        <motion.div className="content Title" initial={coverInit} animate={coverFinal} transition={trans}>
          <Fade damping={1.5} delay={300} fraction={0.4} duration={1500}>
          <motion.p initial={coverInit} animate={coverFinal} transition={{...trans, delay: 1}}>
            Experienced with <span>Natural Language Processing, Image Classification</span>, and <span>Tabular Data</span> analysis, 
            I have developed deep learning models and optimizers in <span>Pytorch</span> and <span>Tensorflow</span>.
          </motion.p>
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
            Tengo experiencia en el <span>Procesamiento Natural del Lenguaje</span>, <span>Clasificación de Imágenes</span>, 
            y <span>Analisis de Datos Tabulares</span>. He desarrollado modelos de deep learning (aprendizaje profundo) 
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
        <motion.div className="content Title cn" initial={coverInit} animate={coverFinal} transition={trans}>
          <Fade damping={1.5} delay={300} fraction={0.4} duration={1500}>
          <motion.p initial={coverInit} animate={coverFinal} transition={{...trans, delay: 1}}>
            對<span>自然語言處理</span>、<span>圖像分類</span>、以及<span>表格數據分析</span>都有經驗。
            我用過 <span>Pytorch</span> 和 <span>Tensorflow</span> 為了做出來深度學習的模型和優化器。
          </motion.p>
          <p>
            我對 <span>Python</span> 的生態系統和它的運算缺點很熟悉。
            我用過 <span>Cython</span> 和 <span>Numba</span> 為了進步優化，還有 <span>Numpy</span> 的向量功能也會常用。
          </p>
          </Fade>
        </motion.div>
      ) || (lang==="chinese_simplified") && (
        <motion.div className="content Title cn" initial={coverInit} animate={coverFinal} transition={trans}>
          <Fade damping={1.5} delay={300} fraction={0.4} duration={1500}>
          <motion.p initial={coverInit} animate={coverFinal} transition={{...trans, delay: 1}}>
            对<span>自然语言处理</span>、<span>图像分析</span>、以及<span>表格数据分析</span>都有经验。
            我用过 <span>Pytorch</span> 和 <span>Tensorflow</span> 为了做出来深度学习的模型和优化器。
          </motion.p>
          <p>
            我对 <span>Python</span> 的生态系统和他的运算缺点很熟悉。
            我用过 <span>Cython</span> 和 <span>Numba</span> 为了进步优化，还有 <span>Numpy</span> 的向量功能也会常用。
          </p>
          </Fade>
        </motion.div>
      )}
    </div>
    );
}

export default PythonBlock;