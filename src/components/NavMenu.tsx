import React, { useState, useContext } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Fade, Bounce, Slide } from 'react-awesome-reveal';
import {motion} from 'framer-motion';
import { StoreContext } from './storeContext';

// interface Props {
//     name: string;
// }

const NavMenu: React.FunctionComponent = () => {

    // const [lang, setLang] = useState("english");
    const Context = useContext(StoreContext);
    const [lang, setLang] = Context.lang;

    const changeLang = (event: any) => {
      setLang(event.target.value);
    }

    const titles: string[] = [
        "Main",
        "About",
        "Portfolio",
        "Resume",
        "Contact",
    ]

    let checked:boolean = false;
    let menuStyle

    const clickBox = () => {
      const box = document.getElementById("box") as HTMLInputElement; 
      box?.click();
    }
  
    let handleCheck = () => {
      checked = !checked;

      menuStyle = {"opacity": (checked ? 1 : 0)};
      const menu = document.querySelector('.menu');
      // console.log(menu?.classList);
      // menu?.toggleAttribute('menu-active')
      menu?.classList.toggle('menu-active');
  
      // console.log(checked, menuStyle);
    }
  
  
    const navSlide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('Navbar');
  
      burger?.addEventListener('click', () => {
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

                {(lang==="english") && (
                  <ul>
                    <Link to="/"><li>Main</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/portfolio"><li>Portfolio</li></Link>
                    <Link to="/resume"><li>Resume</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                  </ul>

                ) || (lang==="spanish") && (
                  <ul className="es">
                    <Link to="/"><li>Inicio</li></Link>
                    <Link to="/about"><li>Acerca de Mí</li></Link>
                    <Link to="/portfolio"><li>Portafolio</li></Link>
                    <Link to="/resume"><li>Currículum</li></Link>
                    <Link to="/contact"><li>Contacteme</li></Link>
                  </ul>
                ) || (lang==="chinese_traditional") && (
                  <ul>
                    <Link to="/"><li>首頁</li></Link>
                    <Link to="/about"><li>關於我</li></Link>
                    <Link to="/portfolio"><li>專案</li></Link>
                    <Link to="/resume"><li>簡歷</li></Link>
                    <Link to="/contact"><li>聯絡</li></Link>
                  </ul>
                ) || (lang==="chinese_simplified") && (
                  <ul>
                    <Link to="/"><li>首页</li></Link>
                    <Link to="/about"><li>关于我</li></Link>
                    <Link to="/portfolio"><li>专案</li></Link>
                    <Link to="/resume"><li>简历</li></Link>
                    <Link to="/contact"><li>联络</li></Link>
                  </ul>
                )}
              
            </div>
            </div>
            
            <div className="selection" >
              <i className="fas fa-globe"></i>
              <select value={lang} onChange={changeLang}>
                <option value="english">English</option>
                <option value="spanish">Español</option>
                <option value="chinese_traditional">繁體中文</option>
                <option value="chinese_simplified">简体中文</option>
              </select>
            </div>

            <div className="burger-bun">
              <input type="checkbox" className="toggler" id="box" onChange={handleCheck} />
              <div className="burger">
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
              </div>
            </div>
          </div>


          <div className="menu" style={menuStyle}>
            {(lang==="english") && (
              <ul className="menu-items">

                <Fade delay={100}>
                <Slide direction={'down'} damping={3} delay={50}>
                <li><Link to="/" onClick={clickBox}>Main</Link></li>
                <li><Link to="/about" onClick={clickBox}>About</Link></li>
                <li><Link to="/portfolio" onClick={clickBox}>Portfolio</Link></li>
                <li><Link to="/resume" onClick={clickBox}>Resume</Link></li>
                <li><Link to="/contact" onClick={clickBox}>Contact</Link></li>
                </Slide>
                </Fade>
              </ul>
            ) || (lang==="spanish") && (
              <ul className="menu-items">

                <Fade delay={100}>
                <Slide direction={'down'} damping={3} delay={50}>
                <li><Link to="/" onClick={clickBox}>Inicio</Link></li>
                <li><Link to="/about" onClick={clickBox}>Acerca de Mí</Link></li>
                <li><Link to="/portfolio" onClick={clickBox}>Portafolio</Link></li>
                <li><Link to="/resume" onClick={clickBox}>Currículum</Link></li>
                <li><Link to="/contact" onClick={clickBox}>Contacteme</Link></li>
                </Slide>
                </Fade>
              </ul>
            ) || (lang==="chinese_traditional") && (
              <ul className="menu-items">

                <Fade delay={100}>
                <Slide direction={'down'} damping={3} delay={50}>
                <li><Link to="/" onClick={clickBox}>首頁</Link></li>
                <li><Link to="/about" onClick={clickBox}>關於我</Link></li>
                <li><Link to="/portfolio" onClick={clickBox}>專案</Link></li>
                <li><Link to="/resume" onClick={clickBox}>簡歷</Link></li>
                <li><Link to="/contact" onClick={clickBox}>聯絡</Link></li>
                </Slide>
                </Fade>
              </ul>
            ) || (lang==="chinese_simplified") && (
              <ul className="menu-items">

                <Fade delay={100}>
                <Slide direction={'down'} damping={3} delay={50}>
                <li><Link to="/" onClick={clickBox}>首页</Link></li>
                <li><Link to="/about" onClick={clickBox}>关于我</Link></li>
                <li><Link to="/portfolio" onClick={clickBox}>专案</Link></li>
                <li><Link to="/resume" onClick={clickBox}>简历</Link></li>
                <li><Link to="/contact" onClick={clickBox}>联络</Link></li>
                </Slide>
                </Fade>
              </ul>
            )}
          </div>

            <div className="BottomNav">
                <Link to="/"><i className="fas fa-home"></i></Link>
                <Link to="/about"><i className="fas fa-address-card"></i></Link>
                <Link to="/portfolio"><i className="fas fa-folder-open"></i></Link>
                <Link to="/resume"><i className="fas fa-file-alt"></i></Link>
                <Link to="contact"><i className="fas fa-envelope"></i></Link>
            </div>
          </div>


    );
}

export default NavMenu;
