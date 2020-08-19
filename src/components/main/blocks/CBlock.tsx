import React from 'react';
import { Fade } from 'react-awesome-reveal';

const CBlock: React.FunctionComponent = () => {
    return(
        <div className="c-bloc">
          <div className="content Title">
            <Fade delay={500}>
            <p>
              I have modified and compiled a <span>Linux kernel</span>.
              I can use <span>C</span> when performance is critical.
            </p>
            <p>
              I have also experimented with a variety of 
              languages such as <span>Clojure, Haskell, Julia,</span> and <span>Go</span>. 
              I am willing to learn new tech if it’s right for the job.
            </p>
            <p>
              Let’s get work done.
            </p>
            </Fade>
          </div>
        </div>
    );
}

export default CBlock;