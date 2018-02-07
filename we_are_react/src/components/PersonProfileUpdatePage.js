import React, {Component} from 'react';
import {PersonProfileForm} from './PersonProfileForm';
import {PersonProfile} from '../requests/person_profiles';
import {User} from '../requests/users';
import jwtDecode from 'jwt-decode';

class PersonProfileUpdatePage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      newPersonProfile: {

      },
      loading: true
    };

    this.updateRequestPersonProfile = this.updateRequestPersonProfile.bind(this);
    this.updateNewPersonProfile = this.updateNewPersonProfile.bind(this);
  }

  async componentDidMount () {
    const payload = jwtDecode(localStorage.getItem('jwt'))
    const userId = await User.get(payload.id);
    const user = await User.get(userId);
    const person_profile = user.person_profile;
    console.log(person_profile);
    this.setState({newPersonProfile:{...person_profile},loading: false});
  }

  updateNewPersonProfile (data) {
    const {newPersonProfile} = this.state;

    this.setState({
      newPersonProfile: {...newPersonProfile, ...data}
    });
  }

  updateRequestPersonProfile () {
    const {history} = this.props;
    const {newPersonProfile} = this.state;
    PersonProfile
      .update(newPersonProfile.id,{person_profile:newPersonProfile})
      .then(({id}) => {
        history.push(`/`)
      });
  }

  render () {
    const { newPersonProfile, loading } = this.state;

  if (loading) {
    return (
      <main
        className="PersonProfileUpdatePage"
        style={{padding: '0  20px'}}
        >
          <h3>Loading...</h3>
        </main>
      )
    }

    return (
      <main
        className="PersonProfileUpdatePage"
        style={{padding: '0  20px'}}
      >
        <h2>Manage your person profile</h2>
        <PersonProfileForm
          person_profile={newPersonProfile}
          onChange={this.updateNewPersonProfile}
          onSubmit={this.updateRequestPersonProfile}
        />

      </main>
    );
  }
}

export {PersonProfileUpdatePage};
