import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Collapse, useMediaQuery, useTheme } from '@material-ui/core';
import Background from '../../images/img-home.jpg'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${Background})`,
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.2)',
    backgroundRepeat: 'no-repeat',
    },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',

  },
  title: {
    color: '#fff',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));



export default function Home() {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('xs'))

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={0}
      >
        <div className={classes.container}>
          <h1 style={{color: '#fff', fontSize: isMatch ? '2rem': '3rem',}}>
            World class gastroenterology services in the heart of Mombasa.
             
          </h1>
          <div style={{display: 'flex', flexDirection: '', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{display: 'flex', width: '415px', paddingTop: '15px', gap: '5px', justifyContent: isMatch ? 'center': 'space-between', alignItems: 'center', flexDirection: isMatch ? 'column': 'row'}}>
              <Button component={Link} to="/about"
                size='large' 
                variant='outlined'
                style={{  
                width: '150px',
                height: '50px', 
                fontSize: '1rem', 
                whiteSpace: 'nowrap', 
                borderRadius: '20px', 
                color: hover ? "black" : "white",
                borderColor: hover ? "#f3ff00" : "#85d3d9",
                backgroundColor: hover ? "#f3ff00" : "#85d3d9",
                }}
               onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)} 
              >
            
              LEARN MORE 
              </Button>
         
              <Button size='large' component={Link} to="/appointment"
              variant='contained'
              style={{ 
              width: '250px', 
              height: '50px',
              fontSize: '1rem', 
              whiteSpace: 'nowrap', 
              borderRadius: '20px',
              color: hover1 ? "white" : "black",
              borderColor: hover1 ? "#f36e61" : "#32e293",
              backgroundColor: hover1 ? "#f36e61" : "#32e293",
              }}
              onMouseEnter={() => setHover1(true)}
              onMouseLeave={() => setHover1(false)} 
              >
              RESERVE AN APPOINTMENT             
              </Button>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}