import React, { Component } from 'react'
import { Blog } from './blog'
export default class BlogEdit extends Component {
  constructor(props) {
    super(props)
    this.postsList = []
    this.sortPosts()
    console.log('inside blog edit', this.props.blog)
  }
  sortPosts() {
    Object.values(this.props.posts).map(post => {
      if (post.user_id === this.props.currentUser.id) this.postsList.push(post)
  })}
  render() {
    return (
      <div id="blogchannel">
      <div>
        <Blog blog={this.props.blog} author={this.props.currentUser} 
        posts={this.postsList}/>
      </div>

      </div>
    )
  }
}
