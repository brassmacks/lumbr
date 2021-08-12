import React from 'react'
import EditPostForm from '../posts/edit_post_form_container'

class Blog extends React.Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    this.props.fetchBlog(this.props.author.id)
    console.log(this.props)
    console.log(this.state)
  }
  render () {

    return (
    <div>
      
    </div>
   )
  }
}
export default Blog