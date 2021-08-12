import React, { Component } from 'react'
import { Blog } from './blog'
export default class BlogEdit extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  componentDidMount(){
    this.props.fetchBlog(this.props.author.id)
    console.log(this.props)
  }

  render() {
    const { blog, author } = this.props;
    return (
      <div>
        <Blog blog={blog} author={author} />
      </div>
    )
  }
}
