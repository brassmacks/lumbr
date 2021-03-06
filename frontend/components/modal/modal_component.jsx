import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BlogEdit from '../blog/blog_edit_container'
import CreatePostContainer from '../posts/create_post_form_container'
import { fetchBlog } from '../../actions/blog_actions';
import BlogShow from '../blog/blog_show_container';
import DeletePst from '../buttons/delete_post';
import EditPostForm from '../posts/edit_post_form_container';
import { fetchPosts, fetchBlogsPosts } from '../../actions/post_actions';
import { render } from 'react-dom';
import { NewPostNav } from '../posts/new_post_nav';

class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      allBlogs: this.props.blogs,
      modal: this.props.modal,
      author: this.props.author,
      blog: this.props.blog,
      currentUser: this.props.currentUser,
      isFetched: this.props.isFetched,
      background: 'hidden'
    }
    this.component; 

    // this.fetch()
    this.assignType = this.assignType.bind(this);
    this.close = this.close.bind(this)
    this.defineComponent();
  } 
  freeze = () => { document.body.style.overflow = "hidden" }
  melt = () => { document.body.style.overflow = "auto" }

  fetch = () => {
    if (!this.state.isFetched) {
      this.props.fetchPosts().then(() => {
        this.setState({isFetched: true})
      }
      )
    }
  }

  setBackground(){
    let background = this.props.modal.type ? "modal-background" : "hidden"
    if (background != this.state.background) {
      this.setState({background: background});
    }
  }

  componentDidMount() {

    this.defineComponent()
  }

  
  componentDidUpdate() {
    if (this.state.modal != this.props.modal) {
      this.setState({modal: this.props.modal })
    }
    this.defineComponent()
    this.setBackground()
  }
  componentWillUnmount() {
    this.melt()
    // this.props.melt()
    this.defineComponent()
  }
  

  close = () => {
    this.melt()
    this.props.closeModal()
    // this.defineComponent()
    this.setBackground()
    // this.setState({modal: { type: null }})
    }

  assignType = (postType, formType = postType) => (

    this.component = <CreatePostContainer
      type={postType} 
      formType={formType}
      closeForm={this.close}/> 
    )

  defineComponent() {  
    this.freeze()
  switch (this.props.modal.type) {

    case 'edit blog':
      this.component = <BlogEdit blog={this.props.blog}
                        author={this.props.author} />;
      break;
    case 'show blog':    
      this.component = <BlogShow blog={this.props.blog} 
                      author={this.props.author} fetchPost={this.props.fetchPost} 
                      fetchBlogsPosts={this.props.fetchBlogsPosts} />;
      break;
    case 'new Post choose':
      this.component = <div id="post-channel" ><NewPostNav /></div>
      break;
    case 'new Text post':
      this.assignType('Text')
      break;
    case 'new Photo post':
      this.assignType('Media', 'Photo')
      break;
    case 'new Video post':
      this.assignType('Media', 'Video')
      break;
    case 'new Quote post':
      this.assignType('Text', 'Quote')
      break;
    case 'new Link post':
      this.assignType('Link')
      break;
    case 'post show':
      //  ACTION_ITEM 2.1 FILL IN THIS CASE
      break;
    case 'share post':
      this.component=<h1>share</h1>
      break;
    case 'edit repost':
      this.component=<EditPostForm
        post={this.props.post_id} 
        fullPost={this.props.post}
        closeForm={this.close}/>
      break;

    case 'edit post':
      this.freeze()
      this.component=<EditPostForm 
        post={this.props.post_id} 
        fullPost={this.props.post}
        closeForm={this.close} />
      break;
      
    case 'delete post':

      this.component= <DeletePst close={this.close} post={this.props.modal.blog} />
      break
    case 'CLOSE_MODAL':
      this.melt()
      return null
      break;
    
    default:
      this.melt()
      return null;
      // ACTION_ITEM 4
      // return loading modal
    }
  }
  render() { 

  
  if (!this.state.modal.type) {
    this.melt()
    return null;
  }

  return (
    <div className={this.state.background} 
    onClick={ () => this.close()}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>

        {this.component}
      </div>
    </div>
  );
  }
}


export default Modal
