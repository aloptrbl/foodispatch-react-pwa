import React from 'react';
import './styles.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 20
  },
  titles: {
  paddingLeft: 15,
  color: '#b3b3b3e3',
  },
  pos: {
  fontSize: 12,
  fontWeight: 700
  }
});

function Home() {
  const classes = useStyles();
  return (
      <Grid container  direction="column" alignItems="center">
        <Grid container className={classes.titles}  alignSelf="flex-start">
        <Typography component="div">
       <Box fontWeight={300} fontSize={'2.6vmin'} paddingLeft={3} paddingTop={3}>DISCOVER</Box>
       <Box paddingLeft={3} fontSize={'5vmin'} className={classes.titlessecond} color="white">Today Menu</Box>
       </Typography>
       </Grid>
       <Grid item>
       <Card  className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Nasi Goreng Ayam
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          RM5.00
        </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Delicious Nasi Goreng Ayam complete with special Sambal Padu from Utara. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item>
       <Card  className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images.pexels.com/photos/1352264/pexels-photo-1352264.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Chicken Chop
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          RM10.00
        </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We also deliver Western type food! Enjoy Chicken Chop made with kasih sayang.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item>
       <Card  className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Double Extra Cheese Burger + French Fries
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          RM8.00
        </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            You missed burger not your girlfriend/boyfriend. Get it now!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
      </Grid>
  );
}

export default Home;
