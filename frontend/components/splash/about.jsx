import React from 'react'

export const About = () => {
  return (
        <footer id="splash-footer">
        <div id="splash-bottom-nav">
         <nav id="splash-bottom-nav">

            <a id="gitlink" href="https://github.com/brassmacks">Github</a>
            <a id="linkdlink" href="https://www.linkedin.com/in/joshua-elliott-a044b0209/">LinkedIn</a>
            {/* <a id='aboutLink' onClick={()=> this.aboutExpand()} >About</a> */}
            <a id='aboutLink' >About</a>
          </nav>          

    <div id="About">
      <div id="about-title-container" className="about-title">

          <h1 id="about-tagline"> ...is (b)logs. </h1>
      </div>
      <div id="about-body">
        <p id="about-body">
          Lumbr was my first full-fledge attempt at blending the power of a react/redux front-end, with the efficiency that is working on a rails backend. Its been a blast exploring the possibilities while developing my style, but it's time to send lumbr off into the world. 
          </p>
          <p id="about-closer">
          Should come accross any bugs or have ideas for improvements, I would love to hear from you. 
          </p>
            <p id="about-sign-off">I can be reached at:</p>
            <nav id="splash-bottom-nav" className="about">

            <a id="gitlink" href="https://github.com/brassmacks">Github</a>
            <a id="linkdlink" href="https://www.linkedin.com/in/joshua-elliott-a044b0209/">LinkedIn</a>
              <a href="mailto:tertiaryoptical@gmail.com">Email</a>
              </nav>
        
      </div>
    </div>
    </div>
    </footer>
  )
}
