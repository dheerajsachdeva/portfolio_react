import React, { Component } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default class Header extends Component {
  
  render() {
    let resumeData = this.props.resumeData;
    function Typewriter() {
      const [text] = useTypewriter({
        words: ['Software Developer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
        loop: true
      });
      return (
        <>
        <h3 style={{ color: '#fff', fontFamily: 'sans-serif' }}>
          I am a <span style = {{fontWeight: 'bold', color: 'orange'}}>{text}</span><Cursor />.
        </h3>
        <p>{resumeData.roleDescription}</p>
        </>
      );
    }
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
            HI THERE 👋🏽, I'M
               <h1 className="responsive-headline"> {resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}><Typewriter />
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}