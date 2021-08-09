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
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)

  }
  
  renderErrors() {
    if (this.props.errors.length > 0) {
    return (
      <ul className='form-errors-list'>
        
        {
        this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );}
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="session-form">
          <h3>{this.props.formType}</h3>
          <h5 className="form-errors">{this.renderErrors()}</h5>
          <ul>
            <li>
              <label>Username:
                <input type="text" 
                  onChange={this.update('username')} 
                  value={this.state.username}>
                </input>  
              </label> 
            </li>
          { this.props.formType === 'signup' ? 
            <li>
              <label>Email 
                <input type='text'
                  onChange={this.update('email')}
                  value= {this.state.email}>
                </input>
              </label>
            </li>
                  : null
          }
            <li>
              <label>Password:
                <input type="password" 
                  onChange={this.update('password')  }   
                  value={this.state.password}>
                </input>  
              </label> 
            </li>
          </ul>
          
          <button type="submit">Submit</button>
          

        </form>    
      </div>
    )
  }
}

export default SessionForm
