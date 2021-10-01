import React, { Component } from 'react'
import { Blog } from './blog'
export default class BlogEdit extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div id="blogchannel">
      <div>
        <Blog blog={this.props.blog} author={this.props.currentUser}/>
      </div>

      </div>
    )
  }
}
