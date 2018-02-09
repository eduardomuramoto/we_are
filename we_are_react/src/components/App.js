import React, {Component} from 'react';
import {HomePage} from './HomePage';
import {PersonProfileNewPage} from './PersonProfileNewPage';
import {PersonProfileUpdatePage} from './PersonProfileUpdatePage';
import {PersonProfileShowPage} from './PersonProfileShowPage';
import {CompanyProfileNewPage} from './CompanyProfileNewPage';
import {CompanyProfileUpdatePage} from './CompanyProfileUpdatePage';
import {CompanyProfileShowPage} from './CompanyProfileShowPage';
import {PostNewPage} from './PostNewPage';
import {PostShowPage} from './PostShowPage';
import {PostIndexPage} from './PostIndexPage';
import {SignInPage} from './SignInPage';
import {SignUpPage} from './SignUpPage';
import {NavBar} from './NavBar';
import {Logo} from './Logo';
import {AuthRoute} from './AuthRoute';
import {User} from '../requests/users';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import jwtDecode from 'jwt-decode';


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: null,
      loading: true
    };

    this.signIn = this.signIn.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  async signIn () {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      const payload = jwtDecode(jwt);
      const user = await User.get(payload.id);
      console.log(user);
      this.setState({user: user, loading:false})
    }else{
    this.setState({user:null, loading:false})}
  }

  signOut () {
    localStorage.removeItem('jwt');
    this.setState({
      user: null
    })
  }

  async updateUser () {
    const jwt = localStorage.getItem('jwt');
    const payload = jwtDecode(jwt);
    const user = await User.get(payload.id);
    console.log(user);
    this.setState({user: user})
  }

  componentDidMount () {
    this.signIn();
  }

  isAuth () {
    return !!this.state.user
  }

  render () {
    const {user,loading} = this.state;
    return (
      <Router >
        <div className="App">
          <Logo/>
          <NavBar user={user} loading={loading} onSignOut={this.signOut} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/sign_up" component={SignUpPage} />
            <Route path="/sign_in" render={props => {
              return <SignInPage {...props} onSignIn={this.signIn} />
            }} />

            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/person_profiles/new"
              component={PersonProfileNewPage}
              onCreateProfile={this.updateUser}
            />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/person_profiles/update"
              component={PersonProfileUpdatePage}
            />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/person_profiles/:id"
              component={PersonProfileShowPage}
            />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/company_profiles/new"
              component={CompanyProfileNewPage}
              onCreateProfile={this.updateUser}
            />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/company_profiles/update"
              component={CompanyProfileUpdatePage}
              onDeleteProfile={this.updateUser}
            />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/company_profiles/:id"
              component={CompanyProfileShowPage}
            />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/posts/new"
              component={PostNewPage}
            />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/posts/:id"
              component={PostShowPage}
              user={user}
            />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/posts"
              component={PostIndexPage}
            />


          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
