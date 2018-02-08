import React, {Component} from 'react';
import {CompanyProfileDetails} from './CompanyProfileDetails';
import {CompanyProfile} from '../requests/company_profiles';

class CompanyProfileShowPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      company_profile: {},
    };

  }

  async componentDidMount () {
    const {params} = this.props.match;
    const company_profile = await CompanyProfile.get(params.id);
    // console.log(company_profile)
    this.setState({company_profile, loading: false});
  }

  render () {
    const {loading, company_profile} = this.state;

    if (loading) {
      return (
        <main
          className="CompanyProfileShowPage"
          style={{padding: '0  20px'}}
        >
          <h3>Loading company profile...</h3>
        </main>
      )
    }
    return (
      <main
        className="CompanyProfileShowPage"
        style={{
          padding: '0 20px'
        }}
      >
        <CompanyProfileDetails {...company_profile} />
      </main>
    );
  }
}

export {CompanyProfileShowPage};
