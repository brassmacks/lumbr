import React from 'react';
import { Link } from 'react-router-dom';
import { textPost } from './text_post';
import { mediaPost } from './media_post';
import { postContentUrl } from './post_content_url';


class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser
    
    this.state = Object.assign(
      this.props.post,
    { tagString: "",
      photoFile: null,
      user_id: this.props.currentUser.id,
      urlInput: false } 
      );

    this.update = this.update.bind(this)
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this)
    this.component;
    this.state.mediaAttached = false
    this.toggleContent = this.toggleContent.bind(this)

    switch (this.props.formType) {
      case 'Text':

        this.component = () => (
          textPost(this.update, this.state.title, this.state.body, 'Text')
          );
        break;
      case 'Photo': 
        this.component = () => ( mediaPost(this.update, this.handleFile, this.toggleContent, this.state.urlInput, 'photo'));
        break;
      case 'Quote':
            this.component = () => (
              textPost(this.update, this.state.title, this.state.body, 'Quote')
              );
        break;
      case 'Link':
        this.component = () => ( postContentUrl('flex', this.update ))
        break;
      case 'Video':
        this.component = () => (mediaPost(this.update, this.handleFile, this.toggleContent, this.state.urlInput, 'Video'));
        break;
      default:
        this.component = <h1>Broke</h1>
        break;
      }
      this.component = this.component.bind(this)
  }
  componentDidMount() {
    
  }


  handlePostSubmit(e) {
    e.preventDefault();
    let post = {}

    let draft = {
      title: this.state.title,
      body: this.state.body,
      content_type: this.props.formType,
      user_id: this.state.user_id,
      media_attached: this.state.mediaAttached,
      tags: [this.attachTags(this.state.tagString)]
    }

    post = new FormData()
    Object.keys(draft).forEach( key => post.append(`post[${key}]`, draft[key]) )
    
      console.log(post)
    if (this.state.mediaAttached) post.append('post[media]', this.state.media)

      
    this.props.createPost(post)
    this.closeForm()
  }

  toggleContent = (e) => {
    e.preventDefault();
    this.setState({
      urlInput: !this.state.urlInput
    })
  }
  attachTags(tagString) {
    if (tagString.length >= 1) {
      return tagString.split(' ').join('').split('#')
    }
    return false
  }

  handleFile(e) {
    let media = e.target.files[0]
    console.log(media)
    this.setState(
      {media: media,
       mediaAttached: true})

    console.log(this.state)
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