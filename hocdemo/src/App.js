import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grocery from './components/Grocery';
import Toys from './components/Toys';

function App() {
  return (
    <div className="App">
     <Grocery/>
     <hr></hr>
     <Toys/>
    </div>
  );
}

export default App;
