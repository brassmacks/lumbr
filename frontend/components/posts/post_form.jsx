import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
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
    console.log(this.props)
  }
  componentDidMount() {
    
  }


  handleSubmit(e) {
    e.preventDefault();
    let post = {}
    console.log(this.props)
    switch(this.props.formType) {
      case 'Text':
        console.log('Text test')
        post = {
          title: this.state.title,
          body: this.state.body,
          // tags: this.attachTag(this.state.tags),
          content_type: 'text',
          user_id: this.state.user_id
        }
        console.log(post)
        this.props.textPost(post)
        break;
      case ('Photo'):
        this.props.createPhoto(post)
        break;
        default:
          console.log('no post type');
    }
    console.log(this.state)
    console.log(this.props)
    this.closeForm()
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
  closeForm() {
    this.props.closeModal()
    this.props.melt()
  }
  render(){
    let type = this.state.contentType;
    let username = this.currentUser.username;
    
    return (
      <div id="post-channel">
        <div id="post-form-container">
          <h3 id="post-form-author" className="post-form">{username}</h3>
          <form className="post-form" id="post-form-form" 
          onSubmit={ () => this.handleSubmit() }>

            <input 
              type="text" placeholder="Title" value={this.state.title} 
              id="post-title-input" className="post-form" autoComplete="off"
              onChange={this.update('title')} 
            />
            <textarea 
              placeholder="Go ahead, put anything" value={this.state.body}
              id="post-body-input" className="post-form" autoComplete="off"
              onChange={this.update('body')} 
            />

        {( type === '/new/photo' || type === '/new/video') 
            ? <input type="file" onChange={this.handleFile}/> 
            : <a></a>
          }
            <input type="text" placeholder="#add tags" value={this.state.tagString}
              id="post-tags-input" className="post-form"
              onChange={this.update('tagString')}
            />
            <div id="post-buttons" className="post-submit">
              <Link to="/dashboard">
                <button onClick={ () => this.closeForm() } id="post-form-close" >Close</button>
              </Link>
              <button type="submit" id="post-form-post" onSubmit={ () => this.handleSubmit(e)}>
                Post now</button>
            </div>
          </form>
          </div> 
        </div>
    )
  }
}
export default PostForm