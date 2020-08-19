import React from 'react';
import Banner from './blocks/Banner';
import ContactBlock from './blocks/ContactBlock';
import CBlock from './blocks/CBlock';
import PythonBlock from './blocks/PythonBlock';
import JSBlock from './blocks/JSBlock';
// import { useViewportScroll, useTransform, motion, motionValue } from 'framer-motion';

const Main: React.FunctionComponent = () => {
    // const { scrollYProgress } = useViewportScroll();
    // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    // const { scrollYProgress } = useViewportScroll()
    // const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5])
    // const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100])


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