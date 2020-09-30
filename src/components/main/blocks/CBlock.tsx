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
              He modificado y compilado un <span>kernel Linux</span>. 
              No tengo miedo de usar <span>C</span> cuando el rendimiento es crucial.
            </p>
            <p>
              También he experimentado con una variedad de lenguajes tal como <span>Clojure</span>, 
              <span> Haskell</span>, <span>Julia</span>, y <span>Go</span>. 
              Estoy dispuesto a aprender nueva tecnología 
              si es adecuada para el proyecto.
            </p>
            <p>
              ¡Adelante! Estoy disponible para asistirle.
            </p>
            </Fade>
          </div>
        ) || (lang==="chinese_traditional") && (
          <div className="content Title cn">
            <Fade delay={500}>
            <p>
              我改過和編輯過 <span>Linux 的核心</span>。程式表現重要時，我不怕用 <span>C</span> 來寫程式。
            </p>
            <p>
              我試過很多不同的程式語言，比如 <span>Clojure、Haskell、Julia</span>、和 <span>Go</span>。
              我願意為了工作而學新的能力。
            </p>
            <p>
              我們一起工作吧！
            </p>
            </Fade>
          </div>
        ) || (lang==="chinese_simplified") && (
          <div className="content Title cn">
            <Fade delay={500}>
            <p>
              我改过和编辑过 <span>Linux 的核心</span>。程序表现重要时，我不怕用 <span>C</span> 来写程序。
            </p>
            <p>
              我试过很多不同的程序语言，比如 <span>Clojure、Haskell、Julia</span>、和 <span>Go</span>。
              我愿意为了工作而学新的能力。
            </p>
            <p>
              我们一起工作吧！
            </p>
            </Fade>
          </div>
        )}
      </div>
  );
}

export default CBlock;