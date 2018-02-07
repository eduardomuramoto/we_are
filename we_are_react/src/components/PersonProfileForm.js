import React from 'react';
import { Input, Button } from 'reactstrap';


function PersonProfileForm (props) {
  const {
    person_profiles = {},
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
      className="PersonProfileForm"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="first_name">First Name</label>
        <Input
            type="text"
            value={person_profiles.first_name}
            placeholder="Enter your first name"
            onChange={handleChange("first_name")}
          />
      </div>

      <div>
        <label htmlFor="last_name">Last Name</label>
        <Input
            type="text"
            value={person_profiles.last_name}
            placeholder="Enter your last name"
            onChange={handleChange("last_name")}
          />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Input
            type="email"
            value={person_profiles.email}
            placeholder="Enter your email"
            onChange={handleChange("email")}
          />
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <Input
            type="text"
            value={person_profiles.address}
            placeholder="Enter your address"
            onChange={handleChange("address")}
          />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <Input
            type="text"
            value={person_profiles.city}
            placeholder="Enter your city"
            onChange={handleChange("city")}
          />
      </div>

      <div>
      <label htmlFor="state">State</label>
        <Input
            type="text"
            value={person_profiles.state}
            placeholder="Enter your state"
            onChange={handleChange("state")}
          />
      </div>

      <div>
      <label htmlFor="country">Country</label>
        <Input
            type="text"
            value={person_profiles.country}
            placeholder="Enter your country"
            onChange={handleChange("country")}
          />
      </div>

      <div>
      <label htmlFor="job_title">Job Title</label>
        <Input
            type="text"
            value={person_profiles.job_title}
            placeholder="Enter your job"
            onChange={handleChange("job_title")}
          />
      </div>

      <div>
        <label htmlFor="education">Education</label>
        <Input
            type="textarea"
            value={person_profiles.education}
            placeholder="Enter your education"
            onChange={handleChange("education")}
          />
      </div>

      <div>
        <label htmlFor="experience">Experience</label>
        <Input
            type="textarea"
            value={person_profiles.experience}
            placeholder="Enter your experience"
            onChange={handleChange("experience")}
          />
      </div>

      <div>
        <label htmlFor="skills">Skills</label>
        <Input
            type="textarea"
            value={person_profiles.skills}
            placeholder="Enter your skills"
            onChange={handleChange("skills")}
          />
      </div>


      <div>
        <br />
        <Button type="submit" bsStyle="primary" value="Submit">Create Profile</Button>
      </div>
    </form>
  );
}

export {PersonProfileForm}
