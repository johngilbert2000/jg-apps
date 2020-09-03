import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Fade, Bounce, Slide } from 'react-awesome-reveal';
import {motion} from 'framer-motion';

// interface Props {
//     name: string;
// }

const NavMenu: React.FunctionComponent = () => {
    const titles: string[] = [
        "Main",
        "About",
        "Portfolio",
        "Resume",
        "Contact",
    ]

    let checked:boolean = false;
    let menuStyle
  
    let handleCheck = () => {
      checked = !checked;
      menuStyle = {"opacity": (checked ? 1 : 0)};
      const menu = document.querySelector('.menu');
      console.log(menu?.classList);
      // menu?.toggleAttribute('menu-active')
      menu?.classList.toggle('menu-active');
  
      console.log(checked, menuStyle);
    }
  
  
    const navSlide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('Navbar');
  
      burger?.addEventListener('click', () => {
        console.log('hello');
        // nav?.classList.toggle('nav-active');
      });
    }

    const initial = {opacity: 0, x: 100, scale: 0};
    const final = {opacity:1, x: 0, scale: 1};
    const trans = {type:"spring", duration: 3};
    const s = 0; // start

    navSlide();
    
    return (
        <div>
          <div className="Navbar">
            <p className="Logo">JG</p>

            <div className="Pages">

            <div className="moveright">
                <ul>
                {/* <li><a href="/">Main</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/contact">Contact</a></li> */}
                {/* <Link to="/"><motion.li initial={initial} animate={final} transition={{...trans, delay: 0.1+s}}>Main</motion.li></Link>
                <Link to="/about"><motion.li initial={initial} animate={final} transition={{...trans, delay: 0.2+s}}>About</motion.li></Link>
                <Link to="/portfolio"><motion.li initial={initial} animate={final} transition={{...trans, delay: 0.3+s}}>Portfolio</motion.li></Link>
                <Link to="/resume"><motion.li initial={initial} animate={final} transition={{...trans, delay: 0.4+s}}>Resume</motion.li></Link>
                <Link to="/contact"><motion.li initial={initial} animate={final} transition={{...trans, delay: 0.5+s}}>Contact</motion.li></Link> */}

                <Link to="/"><li>Main</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/portfolio"><li>Portfolio</li></Link>
                <Link to="/resume"><li>Resume</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                {/* <Link to="/"><i className="fas fa-globe"></i></Link> */}
                </ul>

                {/* <div className="dropdown">
                  <div className="dropbtn">
                    <i className="fas fa-globe"></i>Language
                  </div>
                  <div className="dropdown-content">
                    <p>English</p>
                    <p>Español</p>
                    <p>繁體中文</p>
                    <p>简体中文</p>
                  </div>
                </div> */}
                <div className="selection">
                  <i className="fas fa-globe"></i>
                  <select>
                    <option>English</option>
                    <option>Español</option>
                    <option>繁體中文</option>
                    <option>简体中文</option>
                  </select>
                </div>
            </div>
            </div>

            <div>
            <input type="checkbox" className="toggler" onChange={handleCheck} />
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            </div>

          </div>

          <div className="menu" style={menuStyle}>
              <ul>
                {/* <li><a href="/">Main</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/contact">Contact</a></li> */}
                {/* <Link to="/"><li>Main</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/portfolio"><li>Portfolio</li></Link>
                <Link to="/resume"><li>Resume</li></Link>
                <Link to="/contact"><li>Contact</li></Link> */}
                {/* <li><motion.a href="/" initial={initial} animate={final} transition={{...trans, delay: 5.0}}>Main</motion.a></li>
                <li><motion.a href="/about" initial={initial} animate={final} transition={{...trans, delay: 0.8}}>About</motion.a></li>
                <li><motion.a href="/portfolio" initial={initial} animate={final} transition={{...trans, delay: 0.6}}>Portfolio</motion.a></li>
                <li><motion.a href="/resume" initial={initial} animate={final} transition={{...trans, delay: 0.4}}>Resume</motion.a></li>
                <li><motion.a href="/contact" initial={initial} animate={final} transition={{...trans, delay: 0.2}}>Contact</motion.a></li> */}
                <Fade delay={100}>
                <Slide direction={'down'} damping={3} delay={50}>
                <li><a href="/">Main</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/contact">Contact</a></li>
                </Slide>
                </Fade>
              </ul>
          </div>

          <div className="BottomNav">
            {/* <a href="/"><i className="fas fa-home fa-2x"></i></a>
            <a href="/about"><i className="fas fa-address-card fa-2x"></i></a>
            <a href="/portfolio"><i className="fas fa-folder-open fa-2x"></i></a>
            <a href="/resume"><i className="fas fa-file-alt fa-2x"></i></a>
            <a href="/contact"><i className="fas fa-envelope fa-2x"></i></a> */}

            <Link to="/"><i className="fas fa-home fa-2x"></i></Link>
            <Link to="/about"><i className="fas fa-address-card fa-2x"></i></Link>
            <Link to="/portfolio"><i className="fas fa-folder-open fa-2x"></i></Link>
            <Link to="/resume"><i className="fas fa-file-alt fa-2x"></i></Link>
            <Link to="contact"><i className="fas fa-envelope fa-2x"></i></Link>
          </div>
        </div>

    );
}


// const Navbar: React.FunctionComponent<Props> = () => {

// interface Props {
//     name: string;
// }

// function Navbar(name: string) {
//     // const { name } = name;

//     return (
//         <div>Hello {name}</div>
//     )
// }

export default NavMenu;
