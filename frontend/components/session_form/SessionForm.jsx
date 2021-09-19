import React from 'react'
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      email: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.props.clearErrors()
  }

  update(field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }
  assignLabel(formType) {
    return formType === "Log in" ? "login-butt" : "signup-butt"
  }
  renderErrors() {
    if (this.props.errors.length > 0) {
    return (
      <ul className='form-errors-list' id="session-inputs">
        {
        this.props.errors.map((error, i) => {
          let message;
          console.log(error[0])
          switch (error[0]) {
            case 'Email can\'t be blank':
              message = 'You forgot to enter your email!'
              break;
            case 'Username can\'t be blank':
              message = 'You forgot to enter your blog name!'
              break;
            case 'Password is too short (minimum is 6 characters)':
              message = 'The password must be at least 8 characters.'
              break;
            default:
              message = 'Your email, blog name, or password were incorrect.'
              break;
          }
          return (
          <li key={`error-${i}`}>
            {message}
          </li>
        )})}
      </ul>
    );}
  }

  render() {
    return (
      <div id="form-back" className="session">

      <div id="session-form">
        <form onSubmit={this.handleSubmit} className="session-form">
                <div id="lumbr-title">
        <a id="lumbr-txt-logo">l</a>
        <a id="lumbr-txt-title">umbr</a>
        </div>

          <h5 className="form-errors">{this.renderErrors()}</h5>
          <ul id="session-inputs">
            <li>

              <input id="email" type='text'
                onChange={this.update('email')}
                value={this.state.email}
                placeholder="Email">
              </input>

            </li>
            <li>
              
              <input id="password"
                  className={this.assignLabel(this.props.formType)}
                  type="password" 
                  onChange={this.update('password')  }   
                  value={this.state.password}
                  placeholder="Password">
                </input>  
              
            </li>

            { this.props.formType === 'Sign up' ? 
      
      <li>
              
                <input id="blogname" className='signup-butt'
                  type="text" 
                  onChange={this.update('username')} 
                  value={this.state.username}
                  placeholder="Blog name">
                </input>  
              
            </li>
                    : null
                  }
          </ul>
          
          <button id={this.assignLabel(this.props.formType)} 
            className="authButts" type="submit">{this.props.formType}
          </button>
          

        </form>    
      </div>
    </div>
    )
  }
}

export default SessionForm
