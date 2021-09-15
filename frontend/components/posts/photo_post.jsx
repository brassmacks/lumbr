import React from 'react'
import photoAdd from '../../../app/assets/images/photoAdd.png'
import url from '../../../app/assets/images/url.png'
export const photoPost = (update, handleFile, path) => {

  return (
    <div id='photo-post-guts' className='post-form'>
      <div id='photo-post-choices' className='photo-form'>
        <div id='photo-upload-icon'>
          <input type='file' id='photo-upload-input' className='photo-form'/>
            <label id='photo-upload-label'>
              <img src={photoAdd} alt="https://lumbr-dev.s3.us-west-1.amazonaws.com/photoAdd.png" width="86px"/>
            Upload images
            </label>
        </div>
        <div id="photo-url-square">
        <div id="photo-url-butainer">
          <button id="photo-url-butt">
            <img id="url-pic" src={url} width="50px"></img>
          </button>
        </div>
        </div>

      </div>
    </div>
  )
}
