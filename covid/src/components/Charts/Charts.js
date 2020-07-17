import React,{useEffect,useState} from 'react';
import {fetchDailydata, fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';
const Charts = ({data, country})=>{
    const [dailyData,setDailyData]=useState([]);

    //you can not use async directly here, use inner function
    useEffect(()=>{
            const fetchDataFromAPI= async ()=>{
                const dailyData=await fetchDailyData();
                setDailyData(dailyData);
            }
          fetchDataFromAPI();
    },[]
    );

    const barChart=(
        data.confirmed?(
         <Bar
           data={
               {
                 labels : ['Infected','Recovered','Deaths'],
                 datasets: [
                     {
                         label : 'People',
                         backgroundColor:[
                             'rgba(0,0,255,0.5)',
                             'rgba(0,255,0,0.5)',
                             'rgba(255,0,0,0.5)'
                        ],
                        data: [data.confirmed.value,data.recovered.value,data.deaths.value]
                     }
                 ]
               }
           }
           options ={
            {
                legend : {display:false},
                title : { display :true, text:`current state in country : ${country}`} 
            }               
           }
         />

        ) : null
    );
    const lineChart=(
      dailyData.length?(<Line
      data={
          {
              labels :dailyData.map(dt=>dt.date),
              datasets:[{
                data : dailyData.map(df=>df.confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true
              },{
                data : dailyData.map(df=>df.deaths),
                label:'Infected',
                borderColor:'#3333ff',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true
              }],
          }
      }
      
      />):null

      

    );
    return(
<div className={styles.container}>
     {country?barChart:lineChart}
     
     </div>
    );
}

export default Charts;