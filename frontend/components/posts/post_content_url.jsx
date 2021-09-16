import React from 'react'

export const postContentUrl = (displayed = 'none', update) => {
    
    return(

      <div id='url-post-outline' className={"url-post-form"} style={{display: displayed}}>

      <div id='url-post-spacer' className={"url-post-form"}>
        <input type="url" id='url-post-input' className={"url-post-form"}
          placeholder='Type or past link here'/>
      </div>
    </div>
  )
}
