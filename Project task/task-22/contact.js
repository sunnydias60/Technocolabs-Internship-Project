import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    var login = (
      <form action="#" onSubmit="authorize()">
      <input type="password" placeholder="Password" />
      <input type="submit" /> 
      </form>
      );

    var contactInfo = (
      <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
      </ul>
    );
   
      return (
      <div id="authorization">
        if(this.state.authorized == true)
            <h1>Contact</h1>
        else
          <h1>Enter the Password.</h1>
        (this.state.authorized == true) ? return contactInfo : return login
        
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);