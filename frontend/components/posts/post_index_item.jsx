import React from 'react'

export const PostIndexItem = ({post, freeze, fetchBlog, blogOpen, openModal, deletePost}) => {
  // move alt to postindex and fetch in component did mount
  // switch case for each content type
  const tagString = () => {
    let list = ""
    post.tags.forEach(tag => {
        list = list +'#'+ tag.tag_content + " "
      })
    return list
  }
  const blgModal = () => {
    fetchBlog(post.user_id).then(
      
      openModal('show blog')

    )
  }

  return (
    <li className='post' id='post-item'>
      
      <div id="pi-prof-box" onClick={() => blgModal()}>
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
            // onClick={() => postZoom()}
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
