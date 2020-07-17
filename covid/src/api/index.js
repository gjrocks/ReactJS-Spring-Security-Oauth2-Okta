import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let theUrl=url;
    if(country){
        theUrl=`${url}/countries/${country}`;
    }
    console.log("theurl" ,theUrl);
    try {
        const {data} = await axios.get(theUrl);
       // console.log('returned data', response);
       const modifiedData={
           confirmed: data.confirmed,
           recovered:data.recovered,
           deaths:data.deaths,
           lastUpdate:data.lastUpdate

       }
        return modifiedData;
    } catch (error) {
    console.log('fetchdata error',error);
    }
}

export const fetchDailyData= async ()=>{

    try{
   const {data} =await axios.get(`${url}/daily`);
 

   const modifiedData= data.map((dt)=>({
      confirmed:dt.confirmed.total,
      deaths:dt.deaths.total,
      date:dt.reportDate
   }));

 //  console.log('modifiedData ',modifiedData);
return modifiedData;
    }catch(error){
        console.log('fetchDailyData',error);
    }
}

export const fetchCountries= async()=>{
  try{

    const response=await axios.get(`${url}/countries`);
    return response.data.countries.map(cntry=>cntry.name);
  }catch(error){
      console.log('error',error);
  }
}