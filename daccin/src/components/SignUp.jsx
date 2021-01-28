import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const[name,setName] = React.useState(null);
  const[lastname,setLastname] = React.useState(null);
  const [email,setEmail]= React.useState(null);
  const[password,setPassword]= React.useState(null);
  const[number,setNumber]= React.useState(null);
  const[birthdate,setBirthdate]= React.useState(null);

  const[errorEmail,setErrorEmail]= React.useState(false);
  const[errorPassword,setErrorPassword]= React.useState(false);
  const[errorName,setErrorName]= React.useState(false);
  const[errorLName,setErrorLName]= React.useState(false);
  const[errorNumber,setErrorNumber]= React.useState(false);
  const[erroBirthdate,setErrorBirthdate]= React.useState(false);



  



  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log=({birthdate:birthdate})
    if(!email){
      setErrorEmail(true)  
    }
    else{
      setErrorEmail(false)
    }
    if(!password){
      setErrorPassword(true)
    }
    else{
      setErrorPassword(false)
    }
    if(!name){
      setErrorName(true)
    }
    else{
      setErrorName(false)
    }
    if(!lastname){
      setErrorLName(true)
    }
    else{
      setErrorLName(false)
    }
    if(!birthdate ){
      setErrorBirthdate(true)
    }
    else{
      setErrorBirthdate(false)
    }
    if(!number){
      setErrorNumber(true)
    }
    else{
      setErrorNumber(false)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onsubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                helperText={errorName? "llenar campo":""}
                error={errorName}
                onchange={e=>setName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                helperText={errorLName? "llenar campo":""}
                error={errorLName}
                onchange={e=>setLastname(e.target.value)}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                helperText={errorEmail? "llenar campo":""}
                error={errorEmail}
                onhange={e=>setEmail(e.target.value)}
                

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
                helperText={errorPassword? "llenar campo":""}
                error={errorPassword}
                onChange={e =>setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Phone number"
                name="text"
                helperText={errorNumber?"llenar campo":""}
                error={errorNumber}
                onChange={e=>setNumber(e.target.value)}
                autoComplete="number"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="birthdate"
                variant="outlined"
                required
                fullWidth
                label="Birthdate"
                type="date"
                defaultValue="0000-00-00"
                helperText={setErrorBirthdate? "llenar campo":""}
                error={setErrorBirthdate}
                
                className={classes.textField}
                onChange={ e=>setBirthdate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            
          </Grid>
          <Button
           
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            
          >
            Sign Up
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
} 
