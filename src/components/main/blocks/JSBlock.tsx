import React from 'react';
import {motion} from 'framer-motion';

const JSBlock: React.FunctionComponent = () => {
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
          <div className="content Title">
            <div className="">
              <div className="">

                <p>
                  I am familiar with both <span>Object-Oriented Programming</span> and <span>Functional Programming</span>, 
                  and can adapt my programming style to meet your company’s needs.
                </p>
                <span className="lighter"> <i className="fab fa-react fa-2x"></i></span>
                {/* <span className="lighter"> <i className="fab fa-node-js fa-2x"></i></span> */}
                <p>
                  I have done projects in the frontend with <span>React</span>, 
                  and in the backend with <span>Express</span> and <span>Django</span>.
                </p>

              </div>
            </div>

          </div>
        </motion.div>
    );
}

export default JSBlock;