import React, { Component } from 'react';
import './App.css';
import addTodo from './actions/addaction';
import removeTodo from './actions/removetodo';
import {connect } from 'react-redux';
/**
 * 
 * i) The first parameter to the redux HOC connect
   ii) it maps the store to the compoent. the first parameter is state ( actually store), and the second paraters in optional
   iii) it should return plain object
        Each field in the object will become a prop for your actual component
        The values in the fields will be used to determine if your component needs to re-render 
 */
const mapStateToProps =(state,ownProps)=>{
  console.log('state',state);
return {todos:state.todos};
}

/**
 * As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store.

dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.

With React Redux, your components never access the store directly - connect does it for you. React Redux gives you two ways to let components dispatch actions:

By default, a connected component receives props.dispatch and can dispatch actions itself.
connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.
The mapDispatchToProps functions are normally referred to as mapDispatch for short, but the actual variable name used can be whatever you want.
 * 
 */
const mapDispatchToProps =(dispatch)=>{
return {
addMe : (val)=>dispatch(addTodo(val)), //this function is available in the props
removeme:(cal)=>dispatch(removeTodo(cal))

}
}
class App extends Component {
  constructor(props){
    super(props);
    this.nameRef=React.createRef();
    
  }


  render(){
   
  return (
    
    <div className="App">
      <div>ganesh</div>
      <input type="text" name="todo" ref={this.nameRef} />
      <button onClick={()=>this.props.addMe(this.nameRef.current.value)}>add Me</button>
      <hr></hr>
      <h1>Added todos</h1>
      
      <ul>
        {this.props.todos.map(item => {
         return <li key={item.id}>{item.todo}<span className="close" onClick={()=>this.props.removeme(item.id)}>&times;</span></li>;
        })}
      </ul>
      
    </div>
  );
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
