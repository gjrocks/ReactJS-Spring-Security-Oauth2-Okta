import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { TextField } from '@material-ui/core';
import './App.css';
import Paper from '@material-ui/core/Paper';
import styles from '../myStyle.module.css';
import Button from '@material-ui/core/Button';
import AuthService from '../services/auth/AuthService';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

//import MuiAlert from '@material-ui/lab/Alert';
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


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
      userName: "",
      password: "",
      message: "",
      open : false
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
    this.gologin=this.goLogin.bind(this);
    this.login=this.login.bind(this);

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
  goLogin(){
    this.setState({open : true});
    this.login();
  }
  async login () {
   
await AuthService.authenticate(this.state.userName,this.state.password);
    console.log("username ",this.state.userName);
    
    setTimeout(()=>{
      if(AuthService.isUserLoggedIn){
        this.setState({open : false});
      }
      else{
       this.setState({message:"Please provide the correct username and password"});
      }  
    },1000);
   
  }

  
  handleClose = () => {
    this.setState({ open: false });

  };

  render() {
    const { classes } = this.props;
  const { userName,
      password, message
      } = this.state;
    const values = {
      userName,
      password,
     message
    };
console.log("open ", this.state.open);

    return (


     
      <div>

      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Paper elevation={3} className={classes.paperStyle} label="Login ">

            <div className={styles.content}>
              <div className={styles.headLabel}>
                <label className={styles.textFieldStyle2}>Login Details</label>
              </div>


              <div className={styles.ele}><label className={styles.label}>User Name:</label>
                <TextField id="userName"  variant="outlined" label="User Name"
                  size="medium" defaultValue={values.userName} onChange={this.handleChange('userName')} /></div>
              <div className={styles.ele}>
                <label className={styles.label}>Password:</label>
                <TextField id="password" type="password" variant="outlined" label="Password" size="medium" defaultValue={values.password}
                 onChange={this.handleChange('password')} /></div>
              
            <div className={styles.btn}>
              <Button variant="contained" title="Continue" color="primary" onClick={this.gologin}>Login</Button></div>

</div>


          </Paper>


        </Grid>
      </Grid>


      <div>

<Dialog
  open={this.state.open}
  onClose={this.handleClose}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
>
  <DialogTitle id="alert-dialog-title">{"Logining..."}</DialogTitle>
  <DialogContent align="center">
   
      <Loader
        type="Puff"
        color="#575555"
        height={100}
        width={100}
        timeout={0} //3 secs 

      />
    
  </DialogContent>
  <DialogActions>

  </DialogActions>
</Dialog>
</div>

    </div>
        
       
     


    );
  }
}

export default withStyles(useStyles)(Login);
