import React from 'react';
import Banner from '../main/blocks/Banner';
import ContactBlock from '../main/blocks/ContactBlock';
import CBlock from '../main/blocks/CBlock';
import PythonBlock from '../main/blocks/PythonBlock';
import JSBlock from '../main/blocks/JSBlock';

const Contact: React.FunctionComponent = () => {
    console.log("Contact page");
    return(
        <div className="main">

            <ContactBlock />
        </div>
    );
}

export default Contact;