import React from 'react';
import { Link } from 'react-router-dom';
import { textPost } from './text_post';
import { mediaPost } from './media_post';
import { createPhotoPost } from '../../util/post_util';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser
    this.state = Object.assign(
      this.props.post,
    { tagString: "",
      photoFile: null,
      user_id: this.props.currentUser.id } 
      );
    this.update = this.update.bind(this)
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this)
    this.component;
    
    switch (this.props.formType) {
      case 'Text':
        this.component = () => (
          textPost(this.update, this.state.title, this.state.body, 'Text')
          );
        break;
      case 'Photo': 
        this.component = () => ( mediaPost(this.update, this.handleFile, 'photo'));
        break;
      case 'Quote':
            this.component = () => (
              textPost(this.update, this.state.title, this.state.body, 'Quote')
              );
        break;
      case 'Link':
        break;
      case 'Video':
        this.component = () => ( mediaPost(this.update, this.handleFile, 'Video'));
        break;
      default:
        this.component = <h1>Broke</h1>
        break;
      }
      this.component = this.component.bind(this)
    console.log(this.props)
  }
  componentDidMount() {
    
  }


  handlePostSubmit(e) {
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
            onSubmit={(e) => this.handlePostSubmit(e) }>
            {this.component()}
            <input type="text" placeholder="#add tags" value={this.state.tagString}
              id="post-tags-input" className="post-form"
              onChange={this.update('tagString')}
            />
            <div id="post-buttons" className="post-submit">
              <Link to="/dashboard">
                <button onClick={ () => this.closeForm() } id="post-form-close" >Close</button>
              </Link>
              <button type="submit" id="post-form-post" onSubmit={ (e) => this.handlePostSubmit(e)}>
                Post now</button>
            </div>
          </form>
          </div> 
        </div>
    )
  }
}
export default PostForm