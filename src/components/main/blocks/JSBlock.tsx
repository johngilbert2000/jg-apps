import React from 'react';

const JSBlock: React.FunctionComponent = () => {
    return(
        <div className="js-bloc">
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
        </div>
    );
}

export default JSBlock;