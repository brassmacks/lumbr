import React from 'react'
import photoAdd from '../../../app/assets/images/photoAdd.png'
import video from '../../../app/assets/images/video.png'
import url from '../../../app/assets/images/url.png'

export const mediaPost = (update, handleFile, path) => {
  let icon;
  console.log(path)
  path === 'photo' ? icon = photoAdd : icon = video
  return (
    <div id={`${path}-post-guts`} className={`${path}-post-form`}>
      <div id={`${path}-post-choices`} className={`${path}-form`}>
        <div id={`${path}-upload-icon`}>
          <input type='file' id={`${path}-upload-input`}className={`${path}-form`}/>
            <label id={`${path}-upload-label`}>
              
              <img src={icon} alt="https://lumbr-dev.s3.us-west-1.amazonaws.com/photoAdd.png" width="86px"/>
            Upload images
            </label>
        </div>
        <div id={`${path}-url-square`}>
        <div id={`${path}-url-butainer`}>
          <button id={`${path}-url-butt`}>
            <img id={`${path}-url-pic`} src={url} width="50px"></img>
          </button>
        </div>
        </div>

      </div>
    </div>
  )
}
