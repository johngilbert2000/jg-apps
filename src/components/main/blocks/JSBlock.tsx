import React, { useContext } from 'react';
import {motion} from 'framer-motion';
// import Fade from 'react-reveal/Fade';
import { Fade } from "react-awesome-reveal";
import { StoreContext } from '../../storeContext';

const JSBlock: React.FunctionComponent = () => {
  const Context = useContext(StoreContext);
  const [lang, setLang] = Context.lang;

  const coverInit = {
    // opacity: 0.5,
    y: -400
  }
  const coverFinal = {
    opacity: 1,
    y: 0
  }
  const trans = {
    type: "spring",
    duration: 4,
  }

  return(
    <motion.div className="js-bloc" initial={coverInit} animate={coverFinal} transition={trans}>

      {(lang==="english") && (
        <div className="content Title">
          <div className="">
            <div className="">
              <Fade damping={1.3} duration={1500} triggerOnce={false} delay={500}>
              <p>
                I am familiar with both <span>Object-Oriented Programming</span> and <span>Functional Programming</span>, 
                and can adapt my programming style to meet your company’s needs.
              </p>
              <span className="lighter"> <i className="fab fa-react fa-2x"></i></span>
              {/* <span className="lighter"> <i className="fab fa-node-js fa-2x"></i></span> */}
              <p>
                I have done projects in the frontend with <span>React</span>, 
                and in the backend with <span>Django</span>.
              </p>
            </Fade>
            </div>
          </div>
        </div>
      ) || (lang==="spanish") && (
        <div className="content Title">
          <div className="">
            <div className="">
              <Fade damping={1.3} duration={1500} triggerOnce={false} delay={500}>
              <p>
                Estoy familiarizado con <span> Object-Oriented Programming</span> (Programación Orientada a Objetos) 
                y <span>Programación Funcional</span>, y puedo adaptar mi estilo de programación para cumplir con 
                las necesidades de su empresa.
              </p>
              <span className="lighter"> <i className="fab fa-react fa-2x"></i></span>
              <p>
                He hecho proyectos utilizando <span>React</span> y <span>Django</span>. 
                Puedo ser un desarrollador de frontend o de backend para su empresa.
              </p>
            </Fade>
            </div>
          </div>
        </div>
      ) || (lang==="chinese_traditional") && (
        <div className="content Title cn">
          <div className="">
            <div className="">
              <Fade damping={1.3} duration={1500} triggerOnce={false} delay={500}>
              <p>
              我對 <span>Object-Oriented Programming</span> (物件導向程式設計）
              和 <span>Functional Programming</span> (函式編程）都很熟悉，所以我可以為公司改變我寫程式的方法。
              </p>
              <span className="lighter"> <i className="fab fa-react fa-2x"></i></span>
              <p>
                我用過 <span>React</span> 和 <span>Django</span>。<br />
                我對前端和後端都有能力。
              </p>
            </Fade>
            </div>
          </div>
        </div>
      ) || (lang==="chinese_simplified") && (
        <div className="content Title cn">
          <div className="">
            <div className="">
              <Fade damping={1.3} duration={1500} triggerOnce={false} delay={500}>
              <p>
                我对 <span>Object Oriented Programming</span> (物件导向程序设计) 和 <span>Functional Programmming</span>
                (函式编程) 都很熟悉，所以我可以为公司改变我些程序的方法。
              </p>
              <span className="lighter"> <i className="fab fa-react fa-2x"></i></span>
              <p>
                我用过 <span>React</span> 和 <span>Django</span>。<br />
                我对前端和后端都有能力。
              </p>
            </Fade>
            </div>
          </div>
        </div>
      )}

    </motion.div>
  );
}

export default JSBlock;