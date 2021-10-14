import React from "react";

class DummyButton extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this); 
  }
  handleClick(e) {
    e.preventDefault();
    let user = this.props.user
    this.props.processForm(user)
  }
  render(){
    return (
      <button id="Tester-Sign-In" className="authButts"
      onClick={e => this.handleClick(e)}>Tester Log in</button>
    )
  }

}
export default DummyButton