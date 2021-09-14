import React from 'react';
import { Link } from 'react-router-dom';
import { createPhotoPost } from '../../util/post_util';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser
    this.state = this.props.post;
    this.state.tagString = "";
    this.state.photoFile = null
    this.state.user_id = this.props.currentUser.id
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this)
  }
  componentDidMount() {
    console.log(this.state)
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('post[title]', this.state.title)
    formData.append('post[body]', this.state.body)
    
    formData.append('post[user_id]', this.state.user_id)
    
    
    if (this.state.photoFile) {
      
      formData.append('post[photo]', this.state.photoFile)
      this.props.createPhoto(formData)
    } else { this.props.textPost(this.state) }

    
  }

  // attachTag(tag) {
  //   if (tag.length >= 1) {
  //     const tags = tag.split(' ')
  //     tags.forEach(tag => {
  //       this.state.tags.push(fetchTagId(tag))
  //     })
  //   }
  // }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    let type = this.state.contentType;
    return (
      <div id="post-channel">
        <div className="post-form" id="post-form-container">
          <form className="post-form" id="post-form-form" 
          onSubmit={this.handleSubmit}>
            <h3>{this.props.contentType}</h3>
            <input 
              type="text" placeholder="Title" value={this.state.title} 
              id="post-title-input" className="post-form"
              onChange={this.update('title')} 
            />
            <textarea 
              placeholder="Go ahead, put anything" value={this.state.body}
              id="post-body-input" className="post-form"
              onChange={this.update('body')} 
            />

        {( type === '/new/photo' || type === '/new/video') 
            ? <input type="file" onChange={this.handleFile}/> 
            : <a></a>
          }
            <input type="text" placeholder="#tags" value={this.state.tagString}
              id="post-title-input" className="post-form"
              onChange={this.update('tagString')}
            />
            <button type="submit">post</button>
            <Link to="/dashboard">
              <button>close</button>
            </Link>
          </form>
          </div> 
        </div>
    )
  }
}
export default PostForm