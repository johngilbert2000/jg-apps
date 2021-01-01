import React, { useState, useContext } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Fade, Bounce, Slide } from 'react-awesome-reveal';
import {motion} from 'framer-motion';
import { StoreContext } from './storeContext';

const NavMenu: React.FunctionComponent = () => {

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
      menu?.classList.toggle('menu-active');
    }
  
  
    const navSlide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('Navbar');
  
      burger?.addEventListener('click', () => {
      });
    }

    const initial = {opacity: 0, x: 100, scale: 0};
    const final = {opacity:1, x: 0, scale: 1};
    const trans = {type:"spring", duration: 3};
    const s = 0; // start

    const selectedStyle = {background: 'rgb(50,55,65)', color: '#eee'};
    const unselectedStyle = {background: '', color: ''};

    let langActive: boolean = false;

    const [langOpen, setLangOpen] = useState(false);

    const langSelect = () => {
      const langmenu = document.querySelector('.opts');
      langmenu?.classList.toggle('opts-active');
      if (!langOpen) { 
        langmenu?.classList.toggle('opts-inactive'); 
      }
      if (langOpen) {
        setTimeout(() => {langmenu?.classList.toggle('opts-inactive')}, 400);
      }
      setLangOpen(!langOpen);
    }
    const langSelectOpen = () => {
      if (!langOpen && !langActive) {
        const langmenu = document.querySelector('.opts');
        langActive = !langActive;
        langmenu?.classList.toggle('opts-active');
      }
    }
    const langSelectClose = () => {
      if (langOpen || langActive) {
        const langmenu = document.querySelector('.opts');
        langActive = false;
        langmenu?.classList.toggle('opts-active');
      }
    }

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
                    <Link to="/contact"><li>Contactar</li></Link>
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

            <button className="selection2" onClick={langSelect} 
            style={langOpen ? {background: 'rgb(80,80,80)'} : {background: ''}}>
              <div>
                <i className="fas fa-globe"></i> 
                {(() => {
                      switch (lang) {
                        case "english":   return "English";
                        case "spanish": return "Español";
                        case "chinese_traditional":  return "繁體中文";
                        case "chinese_simplified":  return "简体中文";
                        default:      return "Select Language";
                      }
                    })()}
                {langOpen ? <i id="#arrow" className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i> }
              </div>

            </button>

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
                <li><Link to="/contact" onClick={clickBox}>Contactar</Link></li>
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
            
            <div className="opts opts-inactive">
              <div style={lang === "english" ? selectedStyle : unselectedStyle} 
              onClick={() => {setLang("english"); setTimeout(() => langSelect(), 270);}}>English</div>

              <div style={lang === "spanish" ? selectedStyle : unselectedStyle}
               onClick={() => {setLang("spanish"); setTimeout(() => langSelect(), 270);}}>Español</div>

              <div style={lang === "chinese_traditional" ? selectedStyle : unselectedStyle}
               onClick={() => {setLang("chinese_traditional"); setTimeout(() => langSelect(), 270);}}>繁體中文</div>

              <div style={lang === "chinese_simplified" ? selectedStyle : unselectedStyle}
               onClick={() => {setLang("chinese_simplified"); setTimeout(() => langSelect(), 270);}}>简体中文</div>
            </div>
          </div>
    );
}

export default NavMenu;
