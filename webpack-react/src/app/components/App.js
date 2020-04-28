import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Account from './account';
import Header from './header';
import Balance from './balance';
import Cards from './cards';
import Home from './home';
import '../App.css';
import AuthService from '../services/AuthService';
class App extends Component {
 
constructor(props){
  super(props);
  this.state={
    isloggedIn:false
  }
  this.login=this.login.bind(this);
  this.logout=this.logout.bind(this);
}

login(){
  console.log("Logged in");
this.setState({isloggedIn:true});
AuthService.login();
}
logout(){
  console.log("Logged out");
  this.setState({isloggedIn:false});
  AuthService.logout();
  }
  
render(){
  return (
   
    <Router >

      <Header loginHandler={this.login} logoutHandler={this.logout} isLoggedIn={this.state.isloggedIn}/>
      <Switch>
       <Route path={"/"} exact component={Home}  /> 
      <Route path={"/account"} component={Account}/>
      <Route path={"/balance"} component={Balance}/>
      <Route path={"/cards"} component={Cards}/>
      </Switch>
    </Router>
    
  );
}
}

export default App;
