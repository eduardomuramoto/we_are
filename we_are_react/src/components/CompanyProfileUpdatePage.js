import React, {Component} from 'react';
import {CompanyProfileForm} from './CompanyProfileForm';
import {CompanyProfile} from '../requests/company_profiles';
import {User} from '../requests/users';
import jwtDecode from 'jwt-decode';

class CompanyProfileUpdatePage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      newCompanyProfile: {

      },
      loading: true
    };

    this.updateRequestCompanyProfile = this.updateRequestCompanyProfile.bind(this);
    this.updateNewCompanyProfile = this.updateNewCompanyProfile.bind(this);
  }

  async componentDidMount () {
    const payload = jwtDecode(localStorage.getItem('jwt'))
    const userId = await User.get(payload.id);
    const user = await User.get(userId);
    const company_profile = user.company_profile;
    console.log(company_profile);
    this.setState({newCompanyProfile:{...company_profile},loading: false});
  }

  updateNewCompanyProfile (data) {
    const {newCompanyProfile} = this.state;

    this.setState({
      newCompanyProfile: {...newCompanyProfile, ...data}
    });
  }

  updateRequestCompanyProfile () {
    const {history} = this.props;
    const {newCompanyProfile} = this.state;
    CompanyProfile
      .update(newCompanyProfile.id,{company_profile:newCompanyProfile})
      .then(({id}) => {
        history.push(`/`)
      });
  }

  render () {
    const { newCompanyProfile, loading } = this.state;

  if (loading) {
    return (
      <main
        className="CompanyProfileUpdatePage"
        style={{padding: '0  20px'}}
        >
          <h3>Loading...</h3>
        </main>
      )
    }

    return (
      <main
        className="CompanyProfileUpdatePage"
        style={{padding: '0  20px'}}
      >
        <h2>Manage your company profile</h2>
        <CompanyProfileForm
          company_profile={newCompanyProfile}
          onChange={this.updateNewCompanyProfile}
          onSubmit={this.updateRequestCompanyProfile}
        />

      </main>
    );
  }
}

export {CompanyProfileUpdatePage};
