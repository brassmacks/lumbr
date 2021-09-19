import React from 'react'

export const PostIndexItem = ({post, deletePost}) => {
  // move alt to postindex and fetch in component did mount
  // switch case for each content type
  const tagString = () => {
    let list = ""
    post.tags.forEach(tag => {
      console.log(tag.tag_content)
        list = list +'#'+ tag.tag_content + " "
      })
      console.log(list)
    return list
  }

  return (
    <li className='post' id='post-item'>
      
        <div id="pi-prof-box">
          <div id="prof-slider-bounds" >
          <img id="pi-prof-pic" className="sticky" src={post.profileUrl} alt="" ></img>
          </div>
        <div id="pi-post-house">
        <h3 id="post-author">{post.username}</h3>
    
          {
            post.content_type === 'Text' ?
          <div id="text-content" className="post">
          <h3 id="post-title">{post.title}</h3>
          <p className="post" id="text-content">{post.body}</p>
          <p>{tagString()}</p>
          </div>
          : 
          <div>

            <img key={post.id}
            className="post-image" 
            width='540px' 
            src={post.photoUrl}>
            </img>
            <div id="text-content" className="post">
            <p className="post" id="text-content">{post.body}</p>
            <p>{tagString()}</p>
            </div>
          </div>
          }
        </div>
      </div>
      
    </li>
  )
}
