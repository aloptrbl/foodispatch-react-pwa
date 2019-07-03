import React, { useState } from 'react';
import './App.css';
import BottomNavigator from './components/Navigation';
import { makeStyles } from '@material-ui/core/styles';
import Home from './pages/Home';
import Menu from './pages/Menu';
import History from './pages/History';
import Box from '@material-ui/core/Box';
import Splash from '././components/Splash';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const useStyles = makeStyles({
  bgColor: {
    backgroundColor: '#122333'
  }
});
const App = () => {
  const [isReady, setReady] = useState(true);
  function performTimeConsumingTask() {
      setTimeout(
        () => { setReady(false); },
        2000
      )
  }
  
 React.useEffect(() => {
    performTimeConsumingTask();
  }, isReady);
  const classes = useStyles();
  if (isReady)
            return <Splash/>
  return (
    //Wrap with router to have ability router
    <Router>
    <Box   bgcolor="#122333" width="100%" paddingBottom={5}  className="App">
      <Route path="/" exact component={Home} />
      <Route path="/Menu" component={Menu} />
      <Route path="/History" component={History} />
      <BottomNavigator />
    </Box>
    </Router>
  );
}

export default App;
