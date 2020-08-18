import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

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
                <Link to="/"><li>Main</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/portfolio"><li>Portfolio</li></Link>
                <Link to="/resume"><li>Resume</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                </ul>
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
                <li><a href="/">Main</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/contact">Contact</a></li>
                {/* <Link to="/"><li>Main</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/portfolio"><li>Portfolio</li></Link>
                <Link to="/resume"><li>Resume</li></Link>
                <Link to="/contact"><li>Contact</li></Link> */}
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
