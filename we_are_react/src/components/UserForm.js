import React from 'react';
import { FormControl, Button } from 'react-bootstrap';


function UserForm (props) {
  const {
    user = {},
    onSubmit = () => {},
    onChange = () => {}
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  const handleChange = name => event => {
    onChange({[name]: event.currentTarget.value});
  };

  return (
    <form
      className="UserForm"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="first_name">First Name</label>
        <FormControl
            type="text"
            value={user.first_name}
            placeholder="Enter your first name"
            onChange={handleChange("first_name")}
          />
      </div>

      <div>
        <label htmlFor="last_name">Last Name</label>
        <FormControl
            type="text"
            value={user.last_name}
            placeholder="Enter your last name"
            onChange={handleChange("last_name")}
          />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <FormControl
            type="email"
            value={user.email}
            placeholder="Enter your email"
            onChange={handleChange("email")}
          />
      </div>


      <div>
        <label htmlFor="password">Password</label>
        <FormControl
            type="password"
            value={user.password}
            placeholder="Enter your password"
            onChange={handleChange("password")}
          />
      </div>

      <div>
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <FormControl
            type="password"
            value={user.password_confirmation}
            placeholder="Enter your password confirmation"
            onChange={handleChange("password_confirmation")}
          />
      </div>

      <div>
        <br />
        <Button type="submit" bsStyle="secondary" value="Submit">Sign Up</Button>
      </div>
    </form>
  );
}

export {UserForm}
