import React, {Component} from 'react';
import {Token} from '../requests/tokens';
import { FormControl, Button } from 'react-bootstrap';

class SignInPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.createToken = this.createToken.bind(this);
  }



  handleChange (name) {
    return event => {
      const {currentTarget} = event;
      this.setState({[name]: currentTarget.value});
    };
  }

  createToken (event) {
    event.preventDefault();
    const {onSignIn = () => {}} = this.props;
    const {email, password} = this.state;
    // form.reset;
    Token
      .create({email, password})
      .then(data => {
        if (!data.error) {
          const {jwt} = data;
          localStorage.setItem('jwt', jwt);
          this.props.history.push("/");
          onSignIn();
        }
      });
  }

  render () {
    const {email, password} = this.state;
    return (
      <main
        className="SignInPage"
        style={{
          padding: '0 30%'
        }}
      >
        <h2>Sign In</h2>
        <form onSubmit={this.createToken}>
          <div>
            <label htmlFor="email">Email</label>
            <FormControl
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={this.handleChange("email")}
              />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <FormControl
                type="password"
                id='password'
                name='password'
                value={password}
                placeholder="Enter your password"
                onChange={this.handleChange("password")}
              />
          </div>

          <div>
            <br />
            <Button type="submit" bsStyle="secondary" value="Sign In">Sign In</Button>
          </div>
        </form>
      </main>
    )
  }
}

export {SignInPage};
