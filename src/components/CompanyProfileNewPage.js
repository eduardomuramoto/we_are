import React, {Component} from 'react';
import {CompanyProfileForm} from './CompanyProfileForm';
import {CompanyProfile} from '../requests/company_profiles';

class CompanyProfileNewPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      newCompanyProfile: {

      }
    };

    this.createCompanyProfile = this.createCompanyProfile.bind(this);
    this.updateNewCompanyProfile = this.updateNewCompanyProfile.bind(this);
  }

  updateNewCompanyProfile (data) {
    const {newCompanyProfile} = this.state;

    this.setState({
      newCompanyProfile: {...newCompanyProfile, ...data}
    });
  }

  createCompanyProfile () {
    const {history} = this.props;
    const {onCreateProfile = () => {}} = this.props;
    const {newCompanyProfile} = this.state;
    CompanyProfile
      .create({company_profile:newCompanyProfile})
      .then(({id}) => {
        history.push(`/`);
        onCreateProfile();
      });
  }

  render () {
    const {newCompanyProfile} = this.state;

    return (
      <main
        className="CompanyProfileNewPage"
        style={{padding: '0 15%'}}
      >
        <h2>Create your company profile</h2>
        <CompanyProfileForm
          company_profile={newCompanyProfile}
          onChange={this.updateNewCompanyProfile}
          onSubmit={this.createCompanyProfile}
        />

      </main>
    );
  }
}

export {CompanyProfileNewPage};
