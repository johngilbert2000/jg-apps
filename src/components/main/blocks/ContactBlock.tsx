import React, { useState, useContext } from 'react';
import {motion} from 'framer-motion';
import { StoreContext } from '../../storeContext';


const ContactBlock: React.FunctionComponent = () => {
  const Context = useContext(StoreContext);
  const [lang, setLang] = Context.lang;

  const [msgSent, setMsgSent] = useState(false);
  const submitHandler = (e: any) => {
    // e.preventDefault();
    setMsgSent(!msgSent);
  };

  const init = {opacity: 0, scale: 1};
  const final = {opacity: 1, scale: 1};
  const trans = {type: 'spring', duration: 0.2, stiffness: 120, delay: 0.6};

  const contactFields = {
    "english": 
      <div className="card">
        <motion.h1 initial={{opacity: 0, x: -300}} animate={{opacity: 1, x: 0}} transition={{type: "spring", duration: 0.2, stiffness: 70}}>
          Contact
        </motion.h1>
        <motion.p initial={{...init, scale: 0.2}} animate={final} transition={{...trans, delay: 0.4, stiffnes: 120}}>
          <i className="far fa-envelope"></i>
        </motion.p>

        <input type="hidden" name="form-name" value="contact-form" />
        <motion.input required type="text" name="name" id="contact-name" placeholder="Your Name" initial={init} animate={final} transition={{...trans, delay: 0.7}} />
        <motion.input required type="email" name="email" id="contact-email" placeholder="Your Email" initial={init} animate={final} transition={{...trans, delay: 0.8}} />
        <motion.textarea required name="contact-message" id="contact-message" placeholder="Message" initial={init} animate={final} transition={{...trans, delay: 0.9}} ></motion.textarea>
        <motion.button className="btn draw-border" type="submit" initial={init} animate={final} transition={{...trans, delay: 1}}>Submit</motion.button>
      </div>,
    "spanish":
      <div className="card">
        <motion.h1 initial={{opacity: 0, x: -300}} animate={{opacity: 1, x: 0}} transition={{type: "spring", duration: 0.2, stiffness: 70}}>
          Contactar
        </motion.h1>
        <motion.p initial={{...init, scale: 0.2}} animate={final} transition={{...trans, delay: 0.4, stiffnes: 120}}>
          <i className="far fa-envelope"></i>
        </motion.p>

        <input type="hidden" name="form-name" value="contact-form" />
        <motion.input required type="text" name="name" id="contact-name" placeholder="Su Nombre" initial={init} animate={final} transition={{...trans, delay: 0.7}} />
        <motion.input required type="email" name="email" id="contact-email" placeholder="Su Correo Electronico" initial={init} animate={final} transition={{...trans, delay: 0.8}} />
        <motion.textarea required name="contact-message" id="contact-message" placeholder="Mensaje" initial={init} animate={final} transition={{...trans, delay: 0.9}} ></motion.textarea>
        <motion.button className="btn draw-border" type="submit" initial={init} animate={final} transition={{...trans, delay: 1}}>Enviar</motion.button>
      </div>,
    "chinese_traditional":
      <div className="card cn">
        <motion.h1 initial={{opacity: 0, x: -300}} animate={{opacity: 1, x: 0}} transition={{type: "spring", duration: 0.2, stiffness: 70}}>
          聯絡
        </motion.h1>
        <motion.p initial={{...init, scale: 0.2}} animate={final} transition={{...trans, delay: 0.4, stiffnes: 120}}>
          <i className="far fa-envelope"></i>
        </motion.p>

        <input type="hidden" name="form-name" value="contact-form" />
        <motion.input required type="text" name="name" id="contact-name" placeholder="您的姓名" initial={init} animate={final} transition={{...trans, delay: 0.7}} />
        <motion.input required type="email" name="email" id="contact-email" placeholder="您的電子郵件" initial={init} animate={final} transition={{...trans, delay: 0.8}} />
        <motion.textarea required name="contact-message" id="contact-message" placeholder="訊息" initial={init} animate={final} transition={{...trans, delay: 0.9}} ></motion.textarea>
        <motion.button className="btn draw-border" type="submit" initial={init} animate={final} transition={{...trans, delay: 1}}>發送</motion.button>
      </div>,
    "chinese_simplified":
      <div className="card">
        <motion.h1 initial={{opacity: 0, x: -300}} animate={{opacity: 1, x: 0}} transition={{type: "spring", duration: 0.2, stiffness: 70}}>
          联络
        </motion.h1>
        <motion.p initial={{...init, scale: 0.2}} animate={final} transition={{...trans, delay: 0.4, stiffnes: 120}}>
          <i className="far fa-envelope"></i>
        </motion.p>

        <input type="hidden" name="form-name" value="contact-form" />
        <motion.input required type="text" name="name" id="contact-name" placeholder="您的姓名" initial={init} animate={final} transition={{...trans, delay: 0.7}} />
        <motion.input required type="email" name="email" id="contact-email" placeholder="您的电子邮件" initial={init} animate={final} transition={{...trans, delay: 0.8}} />
        <motion.textarea required name="contact-message" id="contact-message" placeholder="讯息" initial={init} animate={final} transition={{...trans, delay: 0.9}} ></motion.textarea>
        <motion.button className="btn draw-border" type="submit" initial={init} animate={final} transition={{...trans, delay: 1}}>发送</motion.button>
      </div>,
  }
  
  return(
    <div className="contact-bloc">
      <form method="POST" data-netlify="true" name="contact" >
        {(contactFields as any)[lang]}
      </form>
    </div>
  );
}

export default ContactBlock;

