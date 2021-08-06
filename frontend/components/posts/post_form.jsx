import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.state.tagString = "";
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }
  attachTag(tag) {
    if (tag.length >= 1) {
      const tags = tag.split(' ')
      tags.forEach(tag => {
        //hit db for tag id then push tag id to tagArray
        this.state.tags.push(fetchTagId(tag))
      })
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return (
      <div className="post-form" id="post-form-div">
        <h4 className="post-form" id="post-form-username">Username
        </h4>
        
        <form className="post-form" id="post-form-form" onSubmit={this.attachTag(this.state.tagString)}>
          <input 
            type="text" 
            placeholder="Title" 
            value={this.state.title} 
            id="post-title-input" 
            className="post-form"
            onChange={this.update('title')} 
          />
          
          <textarea 
            placeholder="Go ahead, put anything" 
            value={this.state.body}
            id="post-body-input"
            className="post-form"
            onChange={this.update('body')} 
          />
          
          <input
            type="text"
            placeholder="#tags"
            value={this.state.tagString}
            id="post-title-input"
            className="post-form"
            onChange={this.update('tagString')}
          />
        </form>
      </div>
    )
  }
}
export default PostForm