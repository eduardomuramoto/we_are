import React, {Component} from 'react';
import {PersonProfileDetails} from './PersonProfileDetails';
import {PersonProfile} from '../requests/person_profiles';

class PersonProfileShowPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      person_profile: {},
    };

  }

  async componentDidMount () {
    const {params} = this.props.match;
    const person_profile = await PersonProfile.get(params.id);
    // console.log(person_profile)
    this.setState({person_profile, loading: false});
  }

  render () {
    const {loading, person_profile} = this.state;

    if (loading) {
      return (
        <main
          className="PersonProfileShowPage"
          style={{padding: '0  20px'}}
        >
          <h3>Loading person profile...</h3>
        </main>
      )
    }
    return (
      <main
        className="PersonProfileShowPage"
        style={{
          padding: '0 20px'
        }}
      >
        <PersonProfileDetails {...person_profile} />
      </main>
    );
  }
}

export {PersonProfileShowPage};
