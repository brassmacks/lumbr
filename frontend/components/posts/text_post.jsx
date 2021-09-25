import React from 'react'
import { postContentUrl } from './post_content_url';

export const textPost = (update, title, body, path) => {
  let placeholder = [];
  
  path === 'Text' ?
   placeholder = ['Title', "Go ahead, put anything"]
    : 
   placeholder = [ '\"Quote\"', "-Source"];
   
  return (
    <div id='text-form-guts' className="post-form">
      <input type="text" placeholder={placeholder[0]} value={title}
        id={`${path}-post-title`} className="post-form" autoComplete="off"
        onChange={update('title')} />
      <textarea
        placeholder={placeholder[1]} value={body}
        id={`${path}-post-body`} className="post-form" autoComplete="off"
        onChange={update('body')}
      />
    </div>
  )
}
