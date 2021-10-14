import React from 'react'

export const EditPost = (post, update, removeFile) => {
  let path = post.content_type;
  
  



  return (
      <div id={'edit-post-guts'} className='post-form'>

      { (path === 'Photo' || path === 'Video') ?
      <div className={`update-media-post`}>
        <img src={post.photoUrl} id='preview' className='update-media-post' />
        <div id="red-X-box">
          <div id="red-X-circle">
            <button id="red-X-button" onClick={e => removeFile(e)}>X</button>
          </div>
        </div>
      </div>
      :

      <div className={`update-media-post`}>
        <input type="text" className="post-form"
          // ACTION_ITEM
          // add default value instead on other inputs
          placeholder={post.title || 'Title'} defaultValue={post.title}
          id={`${path}-post-title`} className="post-form"
          autoComplete="off"
          onChange={update('title')} />
      </div>
          }
        
        <textarea
          placeholder={post.body} defaultValue={post.body}
          id={`${path}-post-body`} className="post-form" autoComplete="off"
          onChange={update('body')}
        />
      </div>
  )
}
