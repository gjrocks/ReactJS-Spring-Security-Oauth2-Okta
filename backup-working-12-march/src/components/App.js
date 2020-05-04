import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SvgIcon from '@material-ui/core/SvgIcon';
import UserDetails from './UserDetails';
import ContactDetails from './ContactDetails';
import IdDetails from './IdDetails';
import SummaryDetails from './SummayDetails';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
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
  appbarstyle: {
    primary: {
      light: "#7986cb",
      main: "rgba(85, 160, 5, 1)",
      dark: "#303f9f",
      contrastText: "#fff"
    }
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


          <MenuItem onClick={() => {
            this.setState({ sideMenuSelected: "PersonDetails" });
          }} selected={this.state.sideMenuSelected === "PersonDetails"} classes={{
            root: classes.menuItemRoot,
            selected: classes.menuItemSelected
          }}>&nbsp;&nbsp;&nbsp;Registration</MenuItem>

          <MenuItem onClick={() => {
            this.setState({ sideMenuSelected: "Login" });
          }} selected={this.state.sideMenuSelected === "Login"} classes={
            {
              root: classes.menuItemRoot,
              selected: classes.menuItemSelected
            }
          }>&nbsp;&nbsp;&nbsp;Login</MenuItem>
    <MenuItem onClick={() => {
            this.setState({ sideMenuSelected: "Admin" });
          }} selected={this.state.sideMenuSelected === "Admin"} classes={
            {
              root: classes.menuItemRoot,
              selected: classes.menuItemSelected
            }
          }>&nbsp;&nbsp;&nbsp;Admin</MenuItem>

        </Sidebar>
        <Content>
          <Grid container spacing={1}>
            <Grid item xs={12} >
              <div className="page-navigation-text">
                {this.getText()}

              </div>
            </Grid>
          </Grid>
          {step === 1 &&
            <UserDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}

            />
          }
          {step === 2 &&
            <ContactDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}

            />
          }
          {/*this.stage.step == 2 &&
            <ContactDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}

            />*/
          }
          {
            step === 3 &&
            <IdDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}

            />
          }
          {
            step === 4 &&
            <SummaryDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}

            />
          }
        </Content>


      </Root>


    );
  }
}

export default withStyles(useStyles)(App);
