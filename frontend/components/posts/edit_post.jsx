import React from 'react'

export const EditPost = (post, update, removeFile) => {
  let path = post.type;
  const renderContents = () => (
    post.title === 'media' ? 

      <div className={ `update-media-post` }>
        <img src={ post.photoUrl } id='preview' className='update-media-post' />
        <div id="red-X-box">
          <div id="red-X-circle">
            <button onClick={ () => removeFile()}>X</button>
          </div>
        </div>
      </div>
       : 
      <input type="text"
        placeholder={ post.title || 'Title' } value={ post.title }
        id={ `${path}-post-title` } className="post-form"
        autoComplete="off"
        onChange={ update('title') } />
  )

  return (
      <div id={'edit-post-guts'} className='post-form'>
        {renderContents()}

      </div>
  )
}
