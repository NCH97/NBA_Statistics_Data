import React, {useState} from "react";
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
    root: {
      height: "100vh"
    },
    paper: {
      margin: useTheme().spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: useTheme().spacing(1)
    },
    submit: {
      margin: useTheme().spacing(3, 0, 2)
    }
}));

const Updatedata = () => {

    const classes = useStyles();

    const [error,setError] = useState("")

    const handleSubmit = async (e) => {
  
      e.preventDefault();
      console.log('submit');
      /*try {
        const urlsdel = [ "http://localhost:8080/api/v1/playerseasonstats/deleteplayerstats",
                          "http://localhost:8080/api/v1/standings/deletestanding",
                          "http://localhost:8080/api/v1/teamseasonstats/deleteteamstats"
                        ]

        for ( let url of urlsdel) {
            axios.delete(url)
        }
        
        
      } catch (error) {
          if (error.response && 
            error.response.status >= 400 &&
            error.response.status <= 500){
            setError(error.response.data.message);
            }
      }*/

      try {
        const urlspost = [ "http://localhost:8080/api/v1/playerseasonstats/newplayerstats",
                          "http://localhost:8080/api/v1/standings/newstanding",
                          "http://localhost:8080/api/v1/teamseasonstats/newteamstats"
                        ]

        for ( let url of urlspost) {
          axios.get(url)
      }
        
        
      } catch (error) {
          if (error.response && 
            error.response.status >= 400 &&
            error.response.status <= 500){
            setError(error.response.data.message);
            }
      }
    }

    return (
      <form className={classes.form} onSubmit={handleSubmit}>
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        
        className={classes.submit}
      >
        Update Data
      </Button>
      </form>
    )

}

export default Updatedata;