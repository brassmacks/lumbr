import React from 'react'

export const textPost = (update, title, body, path) => {

  return (
    <div id='text-form-guts' className="post-form">
      <input
        type="text" placeholder="Title" value={title}
        id="post-title-input" className="post-form" autoComplete="off"
        onChange={update('title')}
      />
      <textarea
        placeholder="Go ahead, put anything" value={body}
        id="post-body-input" className="post-form" autoComplete="off"
        onChange={update('body')}
      />
    </div>
  )
}
