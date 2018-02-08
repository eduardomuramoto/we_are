import React from 'react';
import { Input, Button } from 'reactstrap';


function CompanyProfileForm (props) {
  const {
    company_profile = {},
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
      className="CompanyProfileForm"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">Company Name</label>
        <Input
            type="text"
            value={company_profile.name}
            placeholder="Enter company name"
            onChange={handleChange("name")}
          />
      </div>


      <div>
        <label htmlFor="email">Email</label>
        <Input
            type="email"
            value={company_profile.email}
            placeholder="Enter company email"
            onChange={handleChange("email")}
          />
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <Input
            type="text"
            value={company_profile.address}
            placeholder="Enter company address"
            onChange={handleChange("address")}
          />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <Input
            type="text"
            value={company_profile.city}
            placeholder="Enter company city"
            onChange={handleChange("city")}
          />
      </div>

      <div>
      <label htmlFor="state">State</label>
        <Input
            type="text"
            value={company_profile.state}
            placeholder="Enter company state"
            onChange={handleChange("state")}
          />
      </div>

      <div>
      <label htmlFor="country">Country</label>
        <Input
            type="text"
            value={company_profile.country}
            placeholder="Enter company country"
            onChange={handleChange("country")}
          />
      </div>

      <div>
      <label htmlFor="sector">Sector</label>
        <Input
            type="text"
            value={company_profile.sector}
            placeholder="Enter company sector"
            onChange={handleChange("sector")}
          />
      </div>

      <div>
        <label htmlFor="about">About</label>
        <Input
            type="textarea"
            value={company_profile.about}
            placeholder="Enter your about"
            onChange={handleChange("about")}
          />
      </div>


      <div>
        <br />
        <Button type="submit" bsStyle="secondary" value="Submit">Submit</Button>
      </div>
    </form>
  );
}


export {CompanyProfileForm}
