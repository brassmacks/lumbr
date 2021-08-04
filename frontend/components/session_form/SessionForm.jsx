import React from 'react'

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }
  // add a render errors function to circumvent break-age

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="session-form">
          <h3>{this.props.formType}</h3>
          <label>Username:
            <input type="test" onChange={this.update('username')} value={this.state.username}></input>  
          </label> 
          <label>Password:
            <input type="password" onChange={this.update('password')} value={this.state.password}></input>  
          </label> 
          <button onClick={this.handleSubmit}>Submit</button>
        </form>    
      </div>
    )
  }
}

export default SessionForm
