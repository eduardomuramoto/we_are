import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

render() {
  const {user,loading, onSignOut = () => {}} = this.props;
  if (loading) {
    return (
      <main
        className="NavBar"
        style={{padding: '0  20px'}}
      >
        <h3>Loading...</h3>
      </main>
    )
  }
  return (
    <div>
        <Navbar className="NavBar" color="faded" style={{borderBottom:"2px solid",marginBottom:"70px",width:"100%",minHeight:"70px",backgroundColor:"whitesmoke"}} light expand="sm">
          <NavbarToggler onClick={this.toggle} className="ml-auto" />
          <Collapse isOpen={this.state.isOpen} navbar>
              {
                user ? (
                  <Nav className="ml-auto" navbar>
                  <NavItem>
                  <NavLink disabled style={{color:"black"}} >Hello, {user.full_name}</NavLink>
                  </NavItem>
                  { user.company_profile || user.person_profile ? (
                  <div className="UserWithProfile" style={{display:"flex"}}>
                    <UncontrolledDropdown className="Posts" size="sm" style={{marginTop:'5px'}}nav inNavbar>
                      <DropdownToggle caret style={{padding:'3px 10px'}}>
                        Posts
                      </DropdownToggle>
                      <DropdownMenu right style={{backgroundColor:"#FDFEFE", position:"absolute"}}>
                        <DropdownItem header>Find a Collab</DropdownItem>
                        <Link to="/posts/new"><DropdownItem>Create Post</DropdownItem></Link>
                        <DropdownItem divider />
                        <DropdownItem header>Let's Collab</DropdownItem>
                        <Link to="/posts"><DropdownItem>Posts</DropdownItem></Link>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="ProfileManage" size="sm" style={{marginLeft:'6%', marginRight:'10px' ,marginTop:'5px'}}nav inNavbar>
                      <DropdownToggle caret style={{padding:'3px 10px'}}>
                        <FontAwesome
                          className='fa-user'
                          name='user'
                          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                      </DropdownToggle>
                      <DropdownMenu right style={{backgroundColor:"#FDFEFE", position:"absolute"}}>
                        <DropdownItem header>Manage Profile</DropdownItem>
                        {user.company_profile?
                          <Link to="/company_profiles/update"><DropdownItem>Edit Company Profile</DropdownItem></Link>
                          :
                          <Link to="/person_profiles/update"><DropdownItem>Edit Personal Profile</DropdownItem></Link>
                        }
                        <DropdownItem divider />
                        {user.company_profile?
                          <Link to={`/company_profiles/${user.company_profile.id}`}><DropdownItem>Preview Company Profile</DropdownItem></Link>
                          :
                          <Link to={`/person_profiles/${user.person_profile.id}`}><DropdownItem>Preview Personal Profile</DropdownItem></Link>
                        }
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  ):(
                  <UncontrolledDropdown className="ProfileCreate" size="sm" style={{marginTop:'5px'}}nav inNavbar>
                    <DropdownToggle caret>
                      Create Profile
                    </DropdownToggle>
                    <DropdownMenu right style={{backgroundColor:"#FDFEFE", position:"absolute"}}>
                      <DropdownItem header>Select Profile Type</DropdownItem>
                      <Link to="/person_profiles/new"><DropdownItem>Personal</DropdownItem></Link>
                      <DropdownItem divider />
                      <Link to="/company_profiles/new"><DropdownItem>Company</DropdownItem></Link>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
                  <NavItem>
                    <Link to="/" onClick={onSignOut}><NavLink className="mr-auto" style={{color:"black"}}>Sign Out</NavLink></Link>
                  </NavItem>
                  </Nav>
                ) : (
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link to="/sign_in"><NavLink style={{color:"black"}}>Sign In</NavLink></Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/sign_up"><NavLink style={{color:"black"}}>Sign Up</NavLink></Link>
                    </NavItem>
                  </Nav>
                )
              }
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export {NavBar};
