import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@material-ui/core/Typography";
//import { makeStyles } from "@material-ui/core/styles";
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import Container from "@material-ui/core/Container";
import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {" team."}
    </Typography>
  );
}



const useStyles = makeStyles(() => ({
  "@global": {
    body: {
      backgroundColor: useTheme().palette.common.white
    }
  },
  paper: {
    marginTop: useTheme().spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: useTheme().spacing(1),
    backgroundColor: useTheme().palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: useTheme().spacing(3)
  },
  submit: {
    margin: useTheme().spacing(3, 0, 2)
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
  })
  const [error,setError] = useState("")
  const navigate = useNavigate()

  const handleChange = ({currentTarget: input}) => {
    setData({...data,[input.name]: input.value});
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const url = "http://localhost:8080/api/v1/users";
    const {data:res} = await axios.post(url, data);
    navigate("/signin")
    console.log(res.message);
  } catch (error) {
      if (error.response && 
        error.response.status >= 400 &&
        error.response.status <= 500){
        setError(error.response.data.message);
        console.log(error.response.data.message);
        }
  }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                onChange={handleChange}
                value={data.firstName}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleChange}
                value={data.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={data.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={data.password}

              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
  );
}
