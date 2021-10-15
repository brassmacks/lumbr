import React from 'react';
import { Link } from 'react-router-dom';
import { textPost } from './text_post';
import { mediaPost } from './media_post';
import { postContentUrl } from './post_content_url';
import { EditPost } from './edit_post'

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.currentUser = this.props.currentUser;
    this.state = props.type === 'Update' || props.type === 'Repost' ? 
      {id: this.props.post} 
      :
      {
        title: '',
        body: '',
        source: '',
        tags: [],
        user_id: this.props.user_id,
        contentType: this.props.type,
        photoFile: null,
        urlInput: false,
        tagString: "",
        mediaAttached: false,
      }
    this.redXref = React.createRef();
    this.update = this.update.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.trackChanges = this.trackChanges.bind(this);
    this.component;
    

    this.setComponent();
  }

  setComponent = () => {
  
    switch (this.props.type) {
      case 'Link':
        this.component = () => postContentUrl('flex', this.update)
        break;
      case 'Update':
        this.component = () => EditPost(
          this.props.fullPost,
          this.update,
          this.removeFile,
        )
        break;
      case 'Repost':
        this.component = () => EditPost(
          this.props.fullPost,
          this.update,
          this.removeFile,
        )
        break;

      case 'Media':
        this.component = () => mediaPost(
          this.update, this.handleFile,
          this.toggleContent,
          this.state.urlInput, this.props.formType,
          this.redXref
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

  newPostSubmit(){
    let draft = {
      title: this.state.title,
      body: this.state.body,
      content_type: this.props.formType,
      user_id: this.state.user_id,
      media_attached: this.state.mediaAttached,
      tags: [this.attachTags(this.state.tagString)]
    }

    let post = new FormData();
    Object.keys(draft).forEach(key => post.append(`post[${key}]`, draft[key]));
    if (this.state.mediaAttached) post.append('post[media]', this.state.media);

    this.props.postAction(post);

  }

  handlePostSubmit(e) {
    e.preventDefault();
    
    this.props.type === 'Update' ?
        this.props.postAction(this.state) 
          :
        this.newPostSubmit();

    this.props.closeModal();
    this.props.closeForm();
  }

  toggleContent = (e) => {
    e.preventDefault();
    this.setState({
      urlInput: !this.state.urlInput
    })
  }
  close(e){
    e.preventDefault();
    
    this.props.closeForm();
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
    // ACTION_ITEM 2.1
    // CHANGE TO ON UPDATE

    // if (!this.state.changes.includes(postKey)) {
    //   this.state.changes.push(postKey)
    // }
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render(){
    let type = this.state.contentType;
    let username = this.currentUser.username;
    let component = this.component;
    return (

      <div id="post-channel">
        <div id="post-form-container">
          <div id="post-author-pic" >
            <img id="pa-prof-pic" className="post-author-pic" src={this.props.currentUser.profileUrl} alt="" ></img>
          </div>
          <h3 id="post-form-author" className="post-form">{username}</h3>

          <form className="post-form" id="post-form-form" 
            onSubmit={(e) => this.handlePostSubmit(e) }>
            {component()}
            <input type="text" value={this.state.tagString} 
              placeholder={
                this.props.formType === 'Update' ? 
                this.state.tagString : "#add tags" } 
              id="post-tags-input" className="post-form"
              onChange={this.update('tagString')}
            />
            <footer id={`post-footer`}>
            <div id="post-buttons" className="post-submit">
              <Link to="/dashboard">
                <button onClick={ (e) => this.close(e) } id="post-form-close" >Close</button>
              </Link>
              <button type="submit" id="post-form-post" onSubmit={ (e) => this.handlePostSubmit(e)}>
                Post now</button>

            </div>
            </footer>
          </form>
          </div> 
        </div>
    )
  }
}
export default PostForm