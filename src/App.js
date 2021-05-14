import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/navbar';
import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';
import About from './components/about';
import Contact from './components/contact';
import Rules from './components/rules';
import Faq from './components/faq';
import News from './components/news';
import NotFound from './components/notFound';
import { AuthContext } from './components/context/auth';
import PrivateRoute from './components/route/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Verify from './components/verify';
import forgotPassword from './components/forgotPassword';
import Settings from './components/settings';
import UpdateProfile from './components/updateprofile';
import ChangePwd from './components/changepassword';
import UpdateWlt from './components/updateWallet';
import Affiliate from './components/affiliate';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import History from './components/history';
import Home from './components/home';
import OurPolicies from './components/policies';
import Pages from './components/pagination';
import AdminDashboard from './components/adminDashboard';
import ClientDashboard from './components/clientDashboard';

const App = (props) => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/news' component={News} />
            <Route exact path='/rules' component={Rules} />
            <Route exact path='/faq' component={Faq} />
            <Route path='/verify' component={Verify} />
            <Route path='/pagination' component={Pages} />
            <Route path='/policies' component={OurPolicies} />;
            <PrivateRoute exact path='/settings' component={Settings} />
            <PrivateRoute exact path='/affiliate' component={Affiliate} />
            <PrivateRoute exact path='/deposit' component={Deposit} />
            <PrivateRoute exact path='/withdraw' component={Withdraw} />
            <PrivateRoute exact path='/history' component={History} />
            <PrivateRoute exact path='/update_profile' component={UpdateProfile} />
            <PrivateRoute exact path='/update_wallet' component={UpdateWlt} />
            <PrivateRoute exact path='/change_password' component={ChangePwd} />
            <Route path='/forgot_password' component={forgotPassword} />
            <PrivateRoute exact path="/admin/dashboard" component={AdminDashboard} />
            <PrivateRoute exact path="/client/dashboard" component={ClientDashboard} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
