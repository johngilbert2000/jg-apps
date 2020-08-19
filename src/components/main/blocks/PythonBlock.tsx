import React from 'react';
import {motion} from 'framer-motion';
import { Fade } from 'react-awesome-reveal';

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
        </div>
    );
}

export default PythonBlock;