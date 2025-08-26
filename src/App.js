import React from 'react';
import './App.css'
import Navbar from './components/pages/routing/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Scheduler from './components/pages/Scheduler';
import Appointment from './components/pages/Appointment';
import {ThemeProvider, createTheme} from '@material-ui/core'
import PrivateRoute from './components/pages/routing/PrivateRoute';
import Success from './components/pages/routing/Success'
import Failure from './components/pages/routing/Failure'
import CreatePost from './components/pages/CreatePost'
import SinglePost from './components/pages/SinglePost'
import Blog from './components/pages/Blog';

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
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/scheduler' element={
            <PrivateRoute>
              <Scheduler />
            </PrivateRoute>
          } />
          <Route path='/blog/create-post' element={
            <PrivateRoute>
              <CreatePost />
            </PrivateRoute>
          } />
          <Route path='/success' element={<Success />} />
          <Route path='/failure' element={<Failure />} />
          <Route path='/blog/posts' element={<Blog />} />
          <Route path='/blog/posts/:postId' element={<SinglePost />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
