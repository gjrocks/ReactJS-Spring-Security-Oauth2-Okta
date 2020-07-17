
import React, { Component } from 'react';

import styles from './App.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import {connect} from 'react-redux';
import {register,unregister,aSyncregister} from './actions/registrationAction';
import {show,hide} from './actions/messageAction';
const mapStateToProps=(state)=>{
  console.log("state",state);
  const {count}=state.registrationReducers;
  const {message}=state.messageReducer; 
  return {
   count:count,
   message:message
 }
}

const mapDispatchToProps=(dispatch)=>{
return {

   register:()=>{
    dispatch(show());
    dispatch(aSyncregister());
   
    },
   unregister:()=>dispatch(unregister())
}

}
class App extends Component {
  constructor(props) {
    super(props);
   this.state={
     message:""
   }
  }


  componentDidMount() {

  }


 



  componentDidUpdate(prevProps, prevState) {

  }WillUnmount() {

  }

  render() {
    return (
      <div className={styles.container}>
    <Grid container spacing={5} >
      <Grid item  xs={12} >
          <TextField id="outlined-basic" label="Registration-Counter" variant="outlined" value={this.props.count} className={styles.textField}/>
          {this.props.message}
     </Grid>
     <Grid item  xs={4} lg={1} >
     <Button variant="contained" color="primary" className={styles.button} onClick={this.props.register}>Register</Button></Grid> 
     <Grid item  xs={4} lg={1} >
     <Button variant="contained" color="secondary" className={styles.button} onClick={this.props.unregister}>UnRegister</Button>
    
    
     </Grid>
     </Grid>
      </div>
    );
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
