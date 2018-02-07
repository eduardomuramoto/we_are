import React, {Component} from 'react';
import {PersonProfileForm} from './PersonProfileForm';
import {PersonProfile} from '../requests/person_profiles';

class PersonProfileNewPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      newPersonProfile: {

      }
    };

    this.createPersonProfile = this.createPersonProfile.bind(this);
    this.updateNewPersonProfile = this.updateNewPersonProfile.bind(this);
  }

  updateNewPersonProfile (data) {
    const {newPersonProfile} = this.state;

    this.setState({
      newPersonProfile: {...newPersonProfile, ...data}
    });
  }

  createPersonProfile () {
    const {history} = this.props;
    const {newPersonProfile} = this.state;
    PersonProfile
      .create({person_profile:newPersonProfile})
      .then(({id}) => {
        history.push(`/`)
      });
  }

  render () {
    const {newPersonProfile} = this.state;

    return (
      <main
        className="PersonProfileNewPage"
        style={{padding: '0  20px'}}
      >
        <h2>Create your personal profile</h2>
        <PersonProfileForm
          person_profile={newPersonProfile}
          onChange={this.updateNewPersonProfile}
          onSubmit={this.createPersonProfile}
        />

      </main>
    );
  }
}

export {PersonProfileNewPage};
