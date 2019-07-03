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

function Menu() {
  const classes = useStyles();
  return (
    <Grid container  direction="column" alignItems="center">
    <Grid container className={classes.titles}  alignSelf="flex-start">
    <Typography component="div">
   <Box fontWeight={300} fontSize={'2.6vmin'} paddingLeft={3} paddingTop={3}>DISCOVER</Box>
   <Box paddingLeft={3} fontSize={'5vmin'} className={classes.titlessecond} color="white">Promotion</Box>
   </Typography>
   </Grid>
  </Grid>
  );
}

export default Menu;
