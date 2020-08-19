import React from 'react';
import {motion} from 'framer-motion';

const PythonBlock: React.FunctionComponent = () => {
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
      delay: 0.8,

    }



    return(
        <div className="ai-bloc" >
          <motion.div className="content Title" initial={coverInit} animate={coverFinal} transition={trans}>
            <motion.p initial={coverInit} animate={coverFinal} transition={{...trans, delay: 1}}>
              Experienced with <span>Natural Language Processing, Image Classification</span>, and <span>Tabular Data</span> analysis, 
              I have developed deep learning models and optimizers in <span>Pytorch</span> and <span>Tensorflow</span>.
            </motion.p>
            <p>
              I am familiar with <span>Python’s</span> ecosystem and its computational limitations. 
              I have used both <span>Cython</span> and <span>Numba</span> to achieve performance boosts when 
              the code could not run on the <span>GPU</span> or be vectorized with <span>Numpy</span>.
            </p>
          </motion.div>
        </div>
    );
}

export default PythonBlock;