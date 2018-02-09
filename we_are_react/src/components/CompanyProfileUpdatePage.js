import React, {Component} from 'react';
import {CompanyProfileForm} from './CompanyProfileForm';
import {CompanyProfile} from '../requests/company_profiles';
import {User} from '../requests/users';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import jwtDecode from 'jwt-decode';

class CompanyProfileUpdatePage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      newCompanyProfile: {

      },
      loading: true,
      modal: false
    };

    this.updateRequestCompanyProfile = this.updateRequestCompanyProfile.bind(this);
    this.updateNewCompanyProfile = this.updateNewCompanyProfile.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  async componentDidMount () {
    const payload = jwtDecode(localStorage.getItem('jwt'))
    const userId = await User.get(payload.id);
    const user = await User.get(userId);
    const company_profile = user.company_profile;
    console.log(company_profile);
    this.setState({newCompanyProfile:{...company_profile},loading: false});
    console.log(this.props);

  }

  toggle() {
   this.setState({
     modal: !this.state.modal
   });
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
        history.push(`/company_profiles/${id}`)
      });
  }

  deleteProfile () {

    console.log(this.props.onDeleteProfile);
    const {history} = this.props;
    const {onDeleteProfile = () => {}} = this.props;
    const {newCompanyProfile} = this.state;
    CompanyProfile
      .destroy(newCompanyProfile.id)
      .then(({id}) => {
        history.push(`/`);
        onDeleteProfile();
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

export {CompanyProfileUpdatePage};
