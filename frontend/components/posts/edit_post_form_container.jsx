import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostForm from './post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';
import PostIndex from './post_index';
import { closeModal } from '../../actions/modal_actions';


class EditPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      post: this.props.post,
      
     };

  }
  componentDidMount() {
    console.log(this.state)
    // this.props.fetchPost(this.props.match.params.postId);
  }
  handlePostUpdate(e) {
    e.preventDefault();
    this.props.updatePost(this.state.post)
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  render() {
    let type = this.state.post.contentType;
    let username = this.props.currentUser.username;

    return (
      <div id="post-channel">
        <div id="post-form-container">
          <h3 id="post-form-author" className="post-form">{username}</h3>
          <form className="post-form" id="update-post-form" 
          onSubmit={ (e) => update(e)} >
            {/* {this.component()} */}
            <input type="text" placeholder={this.state.tagsString}
              value={this.state.tagString}
              id="post-tags-input" className="post-form"
              onChange={this.update('tagString')} />
              <Link to="/dashboard">
                <button onClick={ () => this.props.close() } 
                id="post-form-close">Close</button>
              </Link>
              <button type="submit" id="post-form-post" 
                onSubmit={ (e) => this.handlePostSubmit(e) }>
                Post now</button>
          </form>
        </div>
      </div>
    )
  }
}

const mSTP = (state, ownProps) => ({
  postId: ownProps.post,
  currentUser: state.entities.users[state.session.id],
  type: 'Update',
  post: Object.assign(state.entities.posts[ownProps.post], { tagString: ''}),
  formType: 'Update',
  
});

const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  postAction: post => dispatch(updatePost(post))
});

export default connect(mSTP,mDTP)(PostForm)
