import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchData} from './api';

import coronaImage from './images/covid.jpg';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      data :{},
      country:''
    }
  }
  async componentDidMount(){
   const fetchedData=await fetchData();
   this.setState({data:fetchedData});
   //console.log(fetchedData);
 
  }
  handleCountryChange= async (lcountry)=>{
    console.log("Selected Country :",lcountry);
    const cdata=await fetchData(lcountry);
    console.log('data: ',cdata);
    this.setState({data:cdata, country:lcountry});
  }
  render(){
    const {data,country} =this.state;
  return (
    <div className={styles.container}>
    <img src={coronaImage} alt="Covid -19" className={styles.coronaImage}/>
    <Cards data={data}/>
    <br></br>
           <CountryPicker  handleCountryChange={this.handleCountryChange}/>
        <br></br>
           <Charts data={data} country={country}/>
    </div>
  );
  }
}

export default App;
