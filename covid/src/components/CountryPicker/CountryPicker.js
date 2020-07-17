import React,{useEffect,useState} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';
const CountryPicker = (props)=>{

    const [fetchedCountries,setFetchedCountries]= useState([]);
   useEffect(()=>{
     const getCountries= async ()=>{
       const lcountries=await fetchCountries();
       console.log('countries',lcountries);
       setFetchedCountries(lcountries);
     }
     getCountries();
   },[setFetchedCountries]);

    return(
        
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=>props.handleCountryChange(e.target.value)} variant="filled">
            <option value="">Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;