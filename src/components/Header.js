import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="/#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home" style={{color:'#111', fontFamily:'sans-serif '}}>Home</a></li>
               <li><a className="smoothscroll" href="#about" style={{color:'#111', fontFamily:'sans-serif '}}>About</a></li>
             <li><a className="smoothscroll" href="#resume" style={{color:'#111', fontFamily:'sans-serif '}}>Resume</a></li>
               <li><a className="smoothscroll" href="#testimonials" style={{color:'#111', fontFamily:'sans-serif '}}>Testimonials</a></li>

            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {resumeData.name}.</h1>
               <div>
                <h2> <span style={{opacity:0}}>.</span><span style = {{color:'#f099', fontFamily:'sans-serif '}} className="element"></span> </h2>
               </div>
               <h3 style={{color:'#111', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <h3 style={{color:'#111', fontFamily:'sans-serif '}}>Let's <a style={{color:'#f099', fontFamily:'sans-serif '}} className="smoothscroll" href="#about">start scrolling </a>
               and learn more <a style={{color:'#f099', fontFamily:'sans-serif '}} className="smoothscroll" href="#about">about me </a>. Don't forget to visit my Social Profiles!.</h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
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
