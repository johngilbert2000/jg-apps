import React from 'react';

const PythonBlock: React.FunctionComponent = () => {
    return(
        <div className="ai-bloc">
          <div className="content Title">
            <p>
              Experienced with <span>Natural Language Processing, Image Classification</span>, and <span>Tabular Data</span> analysis, 
              I have developed deep learning models and optimizers in <span>Pytorch</span> and <span>Tensorflow</span>.
            </p>
            <p>
              I am familiar with <span>Python’s</span> ecosystem and its computational limitations. 
              I have used both <span>Cython</span> and <span>Numba</span> to achieve performance boosts when 
              the code could not run on the <span>GPU</span> or be vectorized with <span>Numpy</span>.
            </p>
          </div>
        </div>
    );
}

export default PythonBlock;