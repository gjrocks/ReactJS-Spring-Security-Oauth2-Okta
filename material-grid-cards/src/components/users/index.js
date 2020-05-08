import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { green, lightGreen } from '@material-ui/core/colors';
import '../../App.css';

const styles = makeStyles({
  root: {
    maxWidth: 300,
    marginTop:30
  },
  gridroot: {

    flexGrow: 1,

  },
  media: {
    height: 400
  }
});

function User( props) {
  const classes = styles();
  let { name } = props.match.params;
  
 // console.log(props);
//  console.log("name", name);
  return (
    <div className={classes.gridroot}>
      <Grid container spacing={6}  justify="center">
      
      { name=== 'ganesh' &&  <Grid item >
          <Card className={classes.root} variant="elevation">
            <CardActionArea>
              <CardMedia className={classes.media} title="Ganesh Jadhav" image="/static/ganesh.jpg">

              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Ganesh
      </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  Ganesh Jadhav works as a Techincal Architect in John Deere at Pune Location.
      </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Like
     </Button>
              <Button size="small" color="primary">
                Down Vote
     </Button>

            </CardActions>
          </Card>
  </Grid> }
  { name=== 'bob' &&      <Grid item >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} title="bob" image="/static/bob.png">

              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Bob
      </Typography>  
                <Typography variant="body2" component="p" color="textSecondary">
                  Bob was king of the UK in his carrer..
      </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Like
     </Button>
              <Button size="small" color="primary">
                Down Vote
     </Button>

            </CardActions>
          </Card>
  </Grid> }
  { name=== 'kevin' &&        <Grid item >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} title="Kevin" image="/static/kevin.png">

              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Kevin
      </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  Kevin is a wise Minion ...
      </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Like
     </Button>
              <Button size="small" color="primary">
                Down Vote
     </Button>

            </CardActions>
          </Card>
  </Grid> }
  { name=== 'gru' &&     <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} title="Gru" image="/static/gru.jpg">

              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Gru
  </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  Ganesh Jadhav works as a Techincal Architect in John Deere at Pune Location.
  </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Like
 </Button>
              <Button size="small" color="primary">
                Down Vote
 </Button>

            </CardActions>
          </Card>
          </Grid> }
       
      </Grid>
    </div>
  );
}

export default User;
