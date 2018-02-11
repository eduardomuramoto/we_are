import React, {Component} from 'react';
import {PersonProfileForm} from './PersonProfileForm';
import {PersonProfile} from '../requests/person_profiles';
import {User} from '../requests/users';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import jwtDecode from 'jwt-decode';

class PersonProfileUpdatePage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      newPersonProfile: {
      },
      loading: true,
      modal: false
    };

    this.updateRequestPersonProfile = this.updateRequestPersonProfile.bind(this);
    this.updateNewPersonProfile = this.updateNewPersonProfile.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
    this.toggle = this.toggle.bind(this);

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
        history.push(`/`);
      });
  }

  deleteProfile () {
    const {history} = this.props;
    const {onDeleteProfile = () => {}} = this.props;
    const {newPersonProfile} = this.state;
    PersonProfile
      .destroy(newPersonProfile.id)
      .then(({id}) => {
        history.push(`/`);
        onDeleteProfile();
      });
  }

  toggle() {
   this.setState({
     modal: !this.state.modal
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
        style={{padding: '0 15%'}}
      >
        <h2>Manage your person profile</h2>
        <PersonProfileForm
          person_profile={newPersonProfile}
          onChange={this.updateNewPersonProfile}
          onSubmit={this.updateRequestPersonProfile}
        />
        <div style={{marginTop: '10px'}}>
          <Button color="danger" onClick={this.toggle}>Delete Profile</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Delete Profile</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.toggle} onClick={this.deleteProfile} >Delete</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>

      </main>
    );
  }
}

export {PersonProfileUpdatePage};
