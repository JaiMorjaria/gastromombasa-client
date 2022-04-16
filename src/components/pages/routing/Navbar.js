import React, { useState} from 'react';
import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Tab,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Avatar
} from '@material-ui/core';
import DrawerComponent from './DrawerComponent';
import { NavLink, useHistory, Link} from 'react-router-dom';
import logo from '../../../images/GDC_LOGO.jpg'


const useStyles = makeStyles(theme => ({
  logo: {
    fontSize: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  },
  acount: {
  },
  tabsContainer: {
    marginLeft: 'auto',
  },
  iconLogo: {
    color: 'primary',
    fontSize: '2rem',
    textDecoration: 'none',
  },
  icons: {
    fontSize: '1rem',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    fontFamily: 'Montserrat'
  },
}));

const Navbar = () => {
  //Hooks

  const classes = useStyles();

  const theme = useTheme();
  
  const isMatch = useMediaQuery(theme.breakpoints.down('xs'));

  const history = useHistory(); 

  const [user, setUser] = useState()


  const fetchData = async () => {
    const item = await JSON.parse(localStorage.getItem('name'))
    if(item) {
      setUser(item)
    }

  }

  fetchData()


  const logout = () => {  
    setUser(null);
    localStorage.clear()
    history.push("/login")
  };

  return (
    <>
      <AppBar elevation={6} style={{backgroundColor: '#fff', color: '#000'}}>
        <Toolbar>
          {isMatch ? (
            <>
              <DrawerComponent className = {classes.drawer} />
            </>
          ) : (
            <>
            {user? (
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              width: '400vh'
              }}>
              <div className={classes.profile}>
                <Avatar className={classes.red} alt={user}>{user.charAt(0)}</Avatar>
                <Typography>{user}</Typography>
                <Button variant="contained"  className={classes.logout} color="primary" onClick={logout}>Logout</Button>
              </div>
            </div>
            ) : (
              <> 
            <NavLink to={'/'} activeStyle={{textDecoration: 'none', color: 'primary'}}>
              <Typography>
                  <img src={logo} style={{width: 50, height: 60, paddingTop: "5px"}} alt="Logo"></img>
              </Typography>
            </NavLink>
             <Tabs 
              className={classes.tabsContainer}
              >
                <div>{user}</div>
              <Tab
                component = {Link} to='/about'
                disableRipple
                textDecoration='none'
                label='About'
              />
   
             
              <Tab
                disableRipple
                component = {Link} to='/login'
                label='Sign in'
              />
 
            </Tabs>
          
 
              <Button
  
              variant='contained'
              style={{ backgroundColor:'#f36e61', color:"#fff", marginLeft: '45px'}}
              component={Link} to='/appointment'
              >
              Reserve an Appointment
              </Button>
            

              </>
            )}
            </>
          )}
        </Toolbar>
      </AppBar>

    </>
  );
};

export default Navbar;