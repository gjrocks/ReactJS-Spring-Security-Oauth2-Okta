import React from 'react';
import styles from './Cards.module.css';
import {
  Card,
  CardContent,
  Typography,
  Grid

} from '@material-ui/core';
import CountUp from 'react-countup';
import cn from 'classnames';
const Cards = (props)=>{
    console.log(props);
    const { data :{confirmed, recovered,deaths,lastUpdate}}=props;
    console.log(confirmed);
    if(!confirmed){
        return "Loading ...."
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={cn(styles.card,styles.infected)}>
              <CardContent>

                  <Typography color="textSecondary" gutterBottom>Infected</Typography>
                  <Typography variant="h5">
                   <CountUp 
                   start={0}
                   end={confirmed.value}
                    duration={2.5}
                    separator=","
                   />

                  </Typography>
                  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant="body2">Number of Cases of the COVID-19</Typography>
              </CardContent>

            </Grid>
             <Grid item component={Card} xs={12} md={3} className={cn(styles.card,styles.recoverd)}>
              <CardContent>

                  <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                  <Typography variant="h5">
                   <CountUp 
                   start={0}
                   end={recovered.value}
                    duration={2.5}
                    separator=","
                   />

                  </Typography>
                  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant="body2">Number of Recovered Cases of the COVID-19</Typography>
              </CardContent>

            </Grid>

            <Grid item component={Card} xs={12} md={3} className={cn(styles.card,styles.deaths)}>
              <CardContent>

                  <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                  <Typography variant="h5">
                   <CountUp 
                   start={0}
                   end={deaths.value}
                    duration={2.5}
                    separator=","
                   />

                  </Typography>
                  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant="body2">Number of Deaths of the COVID-19</Typography>
              </CardContent>

            </Grid>

            </Grid> 
            
            
     



        </div>
    );
}

export default Cards;