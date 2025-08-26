import React, {useState, useEffect} from 'react';
import BackgroundLogin from '../../images/img-home.jpg';
import {Box, Grid, Typography, Avatar, Button, CssBaseline, TextField, Paper, FormHelperText } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import {PasswordField} from 'material-ui-password'
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${BackgroundLogin})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(10, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '100px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "primary"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInSide = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();
  const navigate = useNavigate()
  const authToken = localStorage.getItem("authToken")

  useEffect(() => {
    if (authToken) {
      navigate("/scheduler")
    }
  }, [authToken, navigate]);

  const loginHandler = async (e) => {
    e.preventDefault(); 

    try {
      const { data } = await axios.post(
        `https://3lilcxi3ul7xuu2jfoqegqfnum0xxewu.lambda-url.ap-south-1.on.aws/api/auth/login`,
        new URLSearchParams({ name, password }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("name", data.name);
      navigate("/scheduler")
      navigate(0)

    } catch (error) {
      console.log("Err:", error.response?.data?.error || 'Login failed')
      setError(error.response?.data?.error || 'Login failed');
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={9} className={classes.image} />
      <Grid item xs={12} sm={8} md={3} component={Paper} elevation={1} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate onSubmit={loginHandler}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />

              <PasswordField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            <FormHelperText style={{color: 'red'}}>{error}</FormHelperText>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              SIGN IN
            </Button>

            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignInSide; 