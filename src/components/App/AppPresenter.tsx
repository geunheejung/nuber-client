import React from 'react';
import PropTypes from 'prop-types';
import {  
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AddPlace from '../../Routes/AddPlace';
import EditAccount from '../../Routes/EditAccount';
import Home from '../../Routes/Home';
import SocialLogin from '../../Routes/SocialLogin';
import Login from '../../Routes/Login';
import PhoneLogin from '../../Routes/PhoneLogin';
import Places from '../../Routes/Places';
import Ride from '../../Routes/Ride';
import Settings from '../../Routes/Settings';
import VerifyPhone from '../../Routes/VerifyPhone';
import FindAddress from '../../Routes/FindAddress';

interface IProps {
  isLoggedIn: boolean;
}

const LoggedInRoutes: React.SFC = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Login} />
      <Route path="/phone-login" component={PhoneLogin} />
      <Route path="/verify-phone" component={VerifyPhone} />
      <Route path="/social-login" component={SocialLogin} />    
    </Switch>
  )
}

const LoggedOutRoutes: React.SFC = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route  path="/ride" component={Ride} />
      <Route path="/edit-account" component={EditAccount} />
      <Route path="/settings" component={Settings} />
      <Route path="/places" component={Places} />
      <Route path="/add-places" component={AddPlace} />
      <Route path="/find-address" component={FindAddress} />
      <Redirect from='*' to='/' />
    </Switch>
  )
}

const AppPresenter: React.SFC<IProps> = ({ 
  isLoggedIn
}) => {
  return (
    <Router>
      {
        isLoggedIn 
          ? <LoggedInRoutes />
          : <LoggedOutRoutes />
      }
    </Router>
  )
}

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

export default AppPresenter;