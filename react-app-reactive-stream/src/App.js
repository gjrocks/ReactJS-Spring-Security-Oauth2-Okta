
import React, { Component } from 'react';
import {getAPIData} from './api';
class App extends Component {

  constructor(props){
  super(props);
  this.state={
    message:"",
    id:""
  }
  this.getError=this.getError.bind(this);
  this.idChange=this.idChange.bind(this);
  }
  //async componentDidMount(){

  //}
  async getError(){
    console.log("i am clicked",this.state.id);
    const data=await getAPIData(this.state.id);
    console.log(data.data.message);
    this.setState({message:data.data.message});
  }
  idChange(event){
    this.setState({id:event.target.value});
  }
  render() {
    //console.log('redered');
    return (
      <div>
       <input type="text" placeholder="error id" name="errornum" id="errornum" onChange={this.idChange}/>
       <input type="button" value="Error" onClick={this.getError} id="mybtn"/>
        <hr>
        </hr>
    <div id="message">{this.state.message}</div>
      </div>
      
    );
  }
}

export default App;
