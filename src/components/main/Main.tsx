import React from 'react';
import Banner from './blocks/Banner';
import ContactBlock from './blocks/ContactBlock';
import CBlock from './blocks/CBlock';
import PythonBlock from './blocks/PythonBlock';
import JSBlock from './blocks/JSBlock';

const Main: React.FunctionComponent = () => {
    return(
        <div className="main">
            <Banner />
            <PythonBlock />
            <JSBlock />
            <CBlock />
            <ContactBlock />
        </div>
    );
}

export default Main;