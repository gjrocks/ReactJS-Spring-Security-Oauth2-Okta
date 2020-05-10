import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetails from './components/UserDetails';

class  App extends React.Component {
  constructor(props){
    super(props);
  }

  handleSave=(values) =>{
    console.log("Form Values:", values);
  }
  render(){
  return (
    <div className="App">
      <h1>Welcome </h1>
     <UserDetails onSubmit={this.handleSave}/>
    </div>
  );
  }
}

export default App;
