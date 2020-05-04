import React from 'react';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';

import Home from './components/home';
import User from './components/users';
import Header from './components/header';
import Layout from './components/layout';
function App( props) {
  
  return (

   
    
 <Router>
    <Layout>
    <Header/>
    <Switch>
     <Route path={"/"} exact component={Home}  /> 
    <Route path={"/users/:name"} component={User}/>
    
    </Switch>
  </Layout></Router>
  );
}

export default App;
