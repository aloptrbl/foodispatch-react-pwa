import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/core/Icon';
import { FiHome,FiShoppingBag } from "react-icons/fi";
const useStyles = makeStyles({
    root: {
      width: '100%',
    position: 'fixed',
    bottom: 0,
    color: 'white',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    roots: {
      color: '#bdc3c7',
      "&$selected": {
        color: "3498db"
      }
    },
    selected: {}
  });

function BottomNavigator() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    return (
        <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels={false}
      className={classes.root}
    >
      <BottomNavigationAction showLabel={false} component={Link}
        to="/"  classes={{
            root: classes.roots,
            selected: classes.selected
          }}  icon={<FiHome size={32} />} />
      <BottomNavigationAction component={Link}
        to="/Menu" showLabel={false} classes={{
            root: classes.roots,
            selected: classes.selected
          }}  icon={<RestoreIcon style={{fontSize:32}}>fastfood</RestoreIcon>} />
          <BottomNavigationAction component={Link}
        to="/History" showLabel={false} classes={{
            root: classes.roots,
            selected: classes.selected
          }}  icon={<FiShoppingBag size={32} />} />
    </BottomNavigation>
    
    
    );
}

export default BottomNavigator;