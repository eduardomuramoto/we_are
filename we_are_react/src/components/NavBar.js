import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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
  const {user, onSignOut = () => {}} = this.props;
  return (
    <div>
        <Navbar className="NavBar" color="faded" light expand="md">
          <Link to="/"><NavbarBrand className="NavLogo"><strong>#WEARE</strong></NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              {
                user ? (
                  <Nav className="ml-auto" navbar>
                  <NavItem>
                  <NavLink disabled >Hello, {user.full_name}</NavLink>
                  </NavItem>
                  <UncontrolledDropdown size="sm" style={{marginTop:'5px'}}nav inNavbar>
                    <DropdownToggle caret>
                      Create Profile
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Select Profile Type</DropdownItem>
                      <Link to="/person_profiles/new"><DropdownItem>Personal</DropdownItem></Link>
                      <DropdownItem divider />
                      <DropdownItem>Company</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <Link to="/" onClick={onSignOut}><NavLink>Sign Out</NavLink></Link>
                  </NavItem>
                  </Nav>
                ) : (
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link to="/sign_in"><NavLink>Sign In</NavLink></Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/sign_up"><NavLink>Sign Up</NavLink></Link>
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
