import React, { useState } from 'react';


const ContactBlock: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);
  const submitHandler = (e: any) => {
    e.preventDefault();
    setShow(!show);
  };
  
  return(
    <div className="contact-bloc">
        {
          !show && (
          <div className="card">
            <h1>
              Contact
            </h1>
            <p>
              <i className="far fa-envelope"></i>
            </p>


            <input type="text" name="name" id="contact-name" placeholder="Your Name" />
            <input type="email" name="email" id="contact-email" placeholder="Your Email" />
            <textarea name="contact-message" id="contact-message" placeholder="Message"></textarea>
            <button className="btn draw-border" type="submit" onClick={submitHandler}>Submit</button>
          </div>
          )
        }
        {
          show && (
            <div className="card">
              <div className="message-sent">
                <h1>Message Sent</h1>
                <p><i className="far fa-check-circle fa-6x"></i></p>
              </div>
            </div>
          )
        }

    </div>
  );
}

export default ContactBlock;