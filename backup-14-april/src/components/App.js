import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SvgIcon from '@material-ui/core/SvgIcon';

import Link from '@material-ui/core/Link';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Registration from './Registration';
import Home from './Home';
import Admin from './Admin';

import { withRouter } from 'react-router-dom'   
import './App.css';

import {
  Root,
  Header,
  Content,
  Sidebar,
  CollapseBtn,
  CollapseIcon,
  standardLayoutPreset,
} from '@mui-treasury/layout';
import Login from './Login';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paperStyle: {

    //height: 500,
    // width: 600,
    marginTop: 30,
    marginLeft: 30,
    textAlign: 'center',
    display: 'inline-block',
  },
  textFieldStyle: {

    textAlign: 'center'


  },
  menuItemSelected: {
    "&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover": {
      backgroundColor: "#575555",
      color: "white"
    }
  },

  menuItemRoot: {
   
      backgroundColor: "#bdbdbd",
      marginTop:1
      
     
    
  },
   navBar: { 'top': AppBar.height }

});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      NationalId: "",
      empId: "",
      passport: "",
      countryCode: "",
      selection: 1,
      sideMenuSelected: ""
    }
    this.handleSelection = this.handleSelection.bind(this);
    this.getText = this.getText.bind(this);
    this.links = [<Link href="#" onClick={(e) => {
      e.preventDefault();
      this.setState({ step: 1 });
    }} color="inherit" key={1}>
      Personal
  </Link>,
    <Link href="#" onClick={(e) => {
      e.preventDefault();
      this.setState({ step: 2 });
    }} color="inherit" key={2}>
      Contact
</Link>,
    <Link href="#" onClick={(e) => {
      e.preventDefault();
      this.setState({ step: 3 });
    }} color="inherit" key={3}>
      Id Details
  </Link>

    ];
    this.preventDefault = this.preventDefault.bind(this);
  }
  preventDefault(e) {
    e.preventDefault();
    console.log('event', e.target.value);
  }
  getText() {

    var t = [];
    for (var i = 0; i < this.state.step - 1; i++) {
      t.push(this.links[i]);
      t.push(" | ");


    }
    return t;
  }
  handleSelection(event, index, value) {
    this.setState({ selection: value });
  }
  //next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }


  //prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  handleChange = (input) => (e) => {

    this.setState({ [input]: e.target.value });
  }
  continue = () => {
    this.props.nextStep();
  }
  render() {
    const { classes } = this.props;
    const { match, location, history } = this.props;
    const layout2 = { ...standardLayoutPreset };


    const { step } = this.state;
    const { firstName,
      lastName,
      email,
      mobileNumber,
      nationalId,
      empId,
      passport,
      countryCode } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      mobileNumber,
      nationalId,
      empId,
      passport,
      countryCode
    };


    return (

     
      <Root config={layout2}>
        <Header>
          <AppBar position="static" title="My App">
            <Toolbar >
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>

             


              <div className="mybtn">   <Button color="inherit" >Login</Button></div>

              <Button color="inherit">Login2</Button>
              <Button color="inherit">Login3</Button>
              <Button color="inherit">Login5</Button>


            </Toolbar>

          </AppBar>

        </Header>
        <Sidebar>

          <CollapseBtn>
            <CollapseIcon />
          </CollapseBtn>
      
          <MenuItem  onClick={(e) => {
            e.preventDefault();
           history.push('/');
            this.setState({ sideMenuSelected: "Home" });
          }} selected={this.state.sideMenuSelected === "Home"} classes={{
            root: classes.menuItemRoot,
            selected: classes.menuItemSelected
          }} >&nbsp;&nbsp;&nbsp;Home</MenuItem>
 
          <MenuItem  onClick={(e) => {
            e.preventDefault();
           history.push('/registration');
            this.setState({ sideMenuSelected: "PersonDetails" });
          }} selected={this.state.sideMenuSelected === "PersonDetails"} classes={{
            root: classes.menuItemRoot,
            selected: classes.menuItemSelected
          }} >&nbsp;&nbsp;&nbsp;Registration</MenuItem>
 
          <MenuItem onClick={(e) => {
e.preventDefault();
history.push('/login');

this.setState({ sideMenuSelected: "Login" });
          }} selected={this.state.sideMenuSelected === "Login"} classes={
            {
              root: classes.menuItemRoot,
              selected: classes.menuItemSelected
            }
          }>&nbsp;&nbsp;&nbsp;Login</MenuItem>
    <MenuItem onClick={(e) => {
            e.preventDefault();
            history.push('/admin');
 
            this.setState({ sideMenuSelected: "Admin" });


          }} selected={this.state.sideMenuSelected === "Admin"} classes={
            {
              root: classes.menuItemRoot,
              selected: classes.menuItemSelected
            }
          }>&nbsp;&nbsp;&nbsp;Admin</MenuItem>

        </Sidebar>
        <Content>
      

     
      <Switch>
       <Route path={"/registration"} exact component={Registration}  /> 
       <Route path={"/"} exact component={Home}  /> 
       <Route path={"/admin"} exact component={Admin}  /> 
       <Route path={"/login"} exact component={Login}  /> 
       
      </Switch>
   
        </Content>


      </Root>
     

    );
  }
}
App=withStyles(useStyles)(App);
App=withRouter(App);
export default App;


