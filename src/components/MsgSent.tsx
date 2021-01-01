import React, { useContext } from 'react';
import {motion} from 'framer-motion';
import { StoreContext } from './storeContext';

const MsgSent: React.FunctionComponent = () => {

    const Context = useContext(StoreContext);
    const [lang, setLang] = Context.lang;

    const trans = {type: 'spring', duration: 0.2, stiffness: 120, delay: 0.6};

    return(
    <div className="contact-bloc">
      {(lang==="english") && (
        <div className="contact-bloc">
            <div className="card">
                <div className="message-sent">
                <motion.h1 initial={{y:100}} animate={{y:0}} transition={{...trans, delay: 0}}>Message Sent</motion.h1>
                <p><motion.i className="far fa-check-circle fa-6x" initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{delay: 0.3, duration: 0.4}}></motion.i></p>
                </div>
            </div>
        </div>
      ) || (lang==="spanish") && (
        <div className="contact-bloc">
            <div className="card">
                <div className="message-sent">
                <motion.h1 initial={{y:100}} animate={{y:0}} transition={{...trans, delay: 0}}>Mensaje Enviado</motion.h1>
                <p><motion.i className="far fa-check-circle fa-6x" initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{delay: 0.3, duration: 0.4}}></motion.i></p>
                </div>
            </div>
        </div>
      ) || (lang==="chinese_traditional") && (
        <div className="contact-bloc">
            <div className="card cn">
                <div className="message-sent">
                <motion.h1 initial={{y:100}} animate={{y:0}} transition={{...trans, delay: 0}}>訊息已發送</motion.h1>
                <p><motion.i className="far fa-check-circle fa-6x" initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{delay: 0.3, duration: 0.4}}></motion.i></p>
                </div>
            </div>
        </div>
      ) || (lang==="chinese_simplified") && (
        <div className="contact-bloc">
            <div className="card">
                <div className="message-sent">
                <motion.h1 initial={{y:100}} animate={{y:0}} transition={{...trans, delay: 0}}>讯息已发送</motion.h1>
                <p><motion.i className="far fa-check-circle fa-6x" initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{delay: 0.3, duration: 0.4}}></motion.i></p>
                </div>
            </div>
        </div>
      )}
    </div>
    );
}

export default MsgSent;


