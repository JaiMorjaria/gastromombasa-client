import React from 'react';
import './App.css'
import Navbar from './components/pages/routing/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Scheduler from './components/pages/Scheduler';
import Appointment from './components/pages/Appointment';
import {ThemeProvider, createTheme} from '@material-ui/core'
import PrivateRoute from './components/pages/routing/PrivateRoute';
import Success from './components/pages/routing/Success'
import Failure from './components/pages/routing/Failure'

const theme = createTheme ({
  palette: {
    primary: {
      main: '#f36e61'
    },
    secondary: {
      main: '#32e293'
    },
  },
  typography: {
    button: {
      textTransform: "none"
    },
    fontFamily: [
      'Montserrat',
      'Montserrat',
      '"Helvetica Neue"',
      'Montserrat',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  
})

function App() {  

  return (
    <ThemeProvider theme = {theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/appointment' component={Appointment} />
          <PrivateRoute path ='/scheduler' component = {Scheduler}/>
          <Route path='/success' component={Success}></Route>
          <Route path='/failure' component={Failure}></Route>
        </Switch> 
      </Router>
    </ThemeProvider>
  );
}

export default App;
