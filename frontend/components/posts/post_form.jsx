import React from 'react';
import { Link } from 'react-router-dom';
import { textPost } from './text_post';
import { mediaPost } from './media_post';
import { postContentUrl } from './post_content_url';
import { EditPost } from './edit_post'

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props, 'post_form')
    this.currentUser = this.props.currentUser
    this.state = this.props.post;
    
    this.update = this.update.bind(this)
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.trackChanges = this.trackChanges.bind(this);
    this.component;

    this.setComponent = () => {
    
    switch (this.props.type) {          
      case 'Link':
          this.component = () => postContentUrl( 'flex', this.update )
        break;
      case 'Update':
        this.state.tagString = 
          this.props.post.tags ?
            this.props.post.tags.map(tag => `#${tag.tag_content} `).join('')
             :
            "";

        this.component = () => EditPost(
          this.state,
          this.update, 
          this.removeFile,
          )
        break;
      case 'Media': 
        this.component = () => mediaPost(
            this.update, this.handleFile, 
            this.toggleContent, 
            this.state.urlInput, this.props.formType 
            );
        break;
      default:
        this.component = () => textPost(
            this.update, 
            this.state.title, 
            this.state.body, 
            this.props.formType
          );
      }
      this.component = this.component.bind(this);
    }
    this.setComponent();
  }


  handlePostSubmit(e) {
    e.preventDefault();

    let draft = {}
    let post;

    if (this.props.type === 'Update') {
      draft = Object.fromEntries(
        this.state.changes.map( key => {
          // build out condition where all tags are handled pre post submit
          if (key === "tag_string") return ; 
          return [ key, this.state[key] ] 
        }));
      post = Object.assign(
        draft,
        { id: this.state.id }
        // { tags: this.attachTags(this.state.tagString)}
      );
      delete post.tagString;
    } else {
      draft = {
        title: this.state.title,
        body: this.state.body,
        content_type: this.props.formType,
        user_id: this.state.user_id,
        media_attached: this.state.mediaAttached,
        tags: [this.attachTags(this.state.tagString)]
      };
      post = new FormData();
      Object.keys(draft).forEach( key =>
         post.append(`post[${key}]`, draft[key]) );

      if (this.state.mediaAttached) post.append('post[media]', this.state.media);
    }
      
    this.props.postAction(post);
    this.props.closeForm();
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

  stringTags(tags) {
    let tagString = '';
    tags.forEach(tag => string.concat(`#${tag} `));
    return tagString;
  }

  removeFile(e, type='Text') {
    e.preventDefault();
    this.state.photoUrl = null;
    this.setComponent();
  }

  handleFile(e) {
    let media = e.target.files[0]
    let preview = URL.createObjectURL(media)

    this.setState({
      title: 'media',
      media: media,
      mediaAttached: true,
      formType: 'Preview'
      })
    
    this.component = () => <img id='preview' className='post-create' src={preview} />
  }
  trackChanges(postKey) {
    if (!this.state.changes.includes(postKey)) {
      this.state.changes.push(postKey)
    }
  }
  update(field) {
    if (this.props.type === 'Update') this.trackChanges(field)
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
            <input type="text" value={this.state.tagString} 
              placeholder={
                this.props.formType === 'Update' ? 
                this.state.tagString : "#add tags" } 
              id="post-tags-input" className="post-form"
              onChange={this.update('tagString')}
            />
            <div id="post-buttons" className="post-submit">
              <Link to="/dashboard">
                <button onClick={ () => this.props.closeForm() } id="post-form-close" >Close</button>
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