
import React, { useRef } from 'react'
import { postContentUrl } from './post_content_url'

export const mediaPost = (update, handleFile, toggleContent, 
                                      urlInput, path, redXRef) => {


  let icon;
  let video = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/video.png'
  let url = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/url.png'
  let photoAdd = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/photoAdd.png'
  path === "Photo" ? icon = photoAdd : icon = video
  
  let showX = () => redXRef.current.style.display= 'flex';
  let hideX = () => redXRef.current.style.display= 'none';                                    


  // debugger

  return (

    <div id={`${path}-post-guts`} className={`${path}-post-form`}>

      {urlInput ? 
        <div id= "url-input" className={`media-post-${urlInput}`} 
        onMouseOver={() => showX()} onMouseOut={() => hideX()}>
          <div id='url-post-outline' className={"url-post-form"} >

            <div id='url-post-spacer' className={"url-post-form"}>
              <input type="url" id='url-post-input' className={"url-post-form"}
                placeholder='Type or paste link here' 
                />
            </div>
          </div>
        <div id="red-X-box" className="close-icon">
            <div id="red-X-circle" ref={redXRef} className="close-icon">
          <button onClick={e => toggleContent(e)} id="red-x"
              className="close-icon"></button>
            ✕
          </div>
        </div>
      </div>
        :
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
      }
    </div>
  )
}
