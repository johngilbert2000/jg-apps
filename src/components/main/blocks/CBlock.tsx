import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { StoreContext } from '../../storeContext';

const CBlock: React.FunctionComponent = () => {
  const Context = useContext(StoreContext);
  const [lang, setLang] = Context.lang;

  return(
      <div className="c-bloc">
        {(lang==="english") && (
          <div className="content Title">
            <Fade delay={500}>
            <p>
              I have modified and compiled a <span>Linux kernel</span>.
              I am not afraid to use <span>C</span> when performance is critical.
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
        ) || (lang==="spanish") && (
          <div className="content Title">
            <Fade delay={500}>
            <p>
              I have modified and compiled a <span>Linux kernel</span>.
              I am not afraid to use <span>C</span> when performance is critical.
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
        ) || (lang==="chinese_traditional") && (
          <div className="content Title">
            <Fade delay={500}>
            <p>
              I have modified and compiled a <span>Linux kernel</span>.
              I am not afraid to use <span>C</span> when performance is critical.
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
        ) || (lang==="chinese_simplified") && (
          <div className="content Title">
            <Fade delay={500}>
            <p>
              I have modified and compiled a <span>Linux kernel</span>.
              I am not afraid to use <span>C</span> when performance is critical.
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
        )}
      </div>
  );
}

export default CBlock;