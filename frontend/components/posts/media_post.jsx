import React from 'react'
import photoAdd from '../../../app/assets/images/photoAdd.png'
import video from '../../../app/assets/images/video.png'
import url from '../../../app/assets/images/url.png'
import { postContentUrl } from './post_content_url'

export const mediaPost = (update, handleFile, toggleContent, urlInput, path) => {
  
  let icon;
  path === "Photo" ? icon = photoAdd : icon = video

  function clickHiddenInput (e){
    e.preventDefault()
    debugger
    e.currentTarget.children[0].trigger.click()
    console.log('hidden-click', e.currentTarget.children[0])
    // e.target.firstChild.click()


    // document.getElementById(`${path}-upload-input`).click()
    
  }
  debugger

  return (

    <div id={`${path}-post-guts`} className={`${path}-post-form`}>
        
      <div className={`media-post-${urlInput}`}>
        <div id="red-X-box" className="close-icon">
          <div id="red-X-circle" className="close-icon">
          <button onClick={e => toggleContent(e)} className="close-icon">x</button>
          </div>
        </div>
        {postContentUrl('flex', update)}
      </div>
      <div id={`${path}-post-choices`} className={`media-post-${!urlInput}`}>

      <div id={`${path}-upload-icon`}>
          <input type='file'
          id={`${path}-upload-input`} className={`${path}-form`}
           onClick={e => console.log(e)} onChange={(e) => handleFile(e)} />

            <img src={icon} id={`${path}-post-upload`}
              alt="https://lumbr-dev.s3.us-west-1.amazonaws.com/photoAdd.png" />
            Upload {path === 'Photo' ? 'photos' : 'video'}
            
          </div>
          <div id={`${path}-url-square`}>
          <div id={`${path}-url-butt-ainer`}>
            <button onClick={e => toggleContent(e)} id={`${path}-url-butt`}>
              <div id='inner-url-spacer'>
              <img id={`${path}-url-pic`} src={url} width="50px"></img>
              Add {path === 'Photo' ? 'photo' : 'video'} from web
                </div>
            </button>
          </div>
          </div>

        </div> 
    </div>
  )
}
