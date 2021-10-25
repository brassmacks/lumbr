import React from 'react'

export const About = () => {
  let about = React.createRef();
  let aboutBody = React.createRef();
  const shrink =()=>{
    about.current.className = "down";
    aboutBody.current.className = "hidden";
  }
  const grow=()=>{
    about.current.className="showing";
    aboutBody.current.classname = "";
  }
  return (
        <footer id="splash-footer">
        <div id="splash-bottom-nav">
         <nav id="splash-bottom-nav">

            <a id="gitlink" href="https://github.com/brassmacks" target="_blank">Github</a>
            <a id="linkdlink" href="https://www.linkedin.com/in/joshua-elliott-a044b0209/" target="_blank">LinkedIn</a>
            {/* <a id='aboutLink' onClick={()=> this.aboutExpand()} >About</a> */}
            <a id='aboutLink' onClick={()=>{about.current.className="showing"}}>
              About</a>
          </nav>          

    <div id="About" ref={about} className="start"
     onClick={()=>shrink()}>
      <div id="about-title-container" className="about-title">

          <h1 id="about-tagline"> ...is (b)logs. </h1>
      </div>
      <div id="about-body" className="down" ref={aboutBody}>
        <p id="about-body" className="down" ref={aboutBody}>
          Lumbr was my first full-fledge attempt at blending the power of a react/redux front-end, with the sleek efficiency that is working with a rails backend. Its been a blast exploring the possibilities while developing my style, but it's time to send lumbr off into the world. 
          </p>
            <p id="about-closer" className="down" ref={aboutBody}>
          Should you come accross any bugs or have ideas for improvements, I would love to hear from you. 
          </p>
            <p id="about-sign-off" className="down" ref={aboutBody}> Feel free to reach out:</p>
            <nav id="splash-bottom-nav" className="about">

            <a id="gitlink" href="https://github.com/brassmacks" target="_blank">Github</a>
            <a id="linkdlink" href="https://www.linkedin.com/in/joshua-elliott-a044b0209/" target="_blank">LinkedIn</a>
              <a href="mailto:tertiaryoptical@gmail.com" target="_blank">Email</a>
              </nav>
        
      </div>
    </div>
    </div>
    </footer>
  )
}
