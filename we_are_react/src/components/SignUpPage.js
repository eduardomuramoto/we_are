import React, {Component} from 'react';
import {UserForm} from './UserForm';
import {User} from '../requests/users';

class SignUpPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      newUser: {
        first_name: "",
        last_name: "",
        email: "",
        password:"",
        password_confirmation:""
      }
    };

    this.createUser = this.createUser.bind(this);
    this.updateNewUser = this.updateNewUser.bind(this);
  }

  updateNewUser (data) {
    const {newUser} = this.state;

    this.setState({
      newUser: {...newUser, ...data}
    });
  }

  createUser () {
    const {history} = this.props;
    const {newUser} = this.state;
    User
      .create({user:newUser})
      .then(({id}) => {
        history.push(`/sign_in`)
      });
  }

  render () {
    const {newUser} = this.state;

    return (
      <main
        className="UserNewPage"
        style={{padding: '0 30%'}}
      >
        <h2>New User</h2>
        <UserForm
          product={newUser}
          onChange={this.updateNewUser}
          onSubmit={this.createUser}
        />

      </main>
    );
  }
}

export {SignUpPage};
