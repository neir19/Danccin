import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Modal,Backdrop,Fade,TextField,Button,FormControl} from '@material-ui/core/'
import {Link} from 'react-router-dom';
import '../styles/Login.css'
import SignUp from '../components/SignUp'
import GoogleLogin from 'react-google-login';

const usesStyles =makeStyles((theme)=> ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    }
  }
}));

function Login (){
  const [email,setEmail]=React.useState(null);
  const [password,setPassword]=React.useState(null);
  const [errorEmail,setErrorEmail]=React.useState(false);
  const [errorPassword,setErrorPassword]=React.useState(false);
  const [open, setOpen]=React.useState(false);

  const classes=usesStyles();

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    
  }

  const handleOpen = () =>{
    setOpen(true);
  }
  const handleClose=() =>{
    setOpen(false);
  }
  const handleSumit=(e)=>{
    e.preventDefault();
    
    
    if(!email){
      setErrorEmail(true);
    }
    else{
      setErrorEmail(false);
    }
    if(!password){
      setErrorPassword(true);
    }
    else{
      setErrorPassword(false);
    }
    
  }
  return(
    <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col">
              <div className="cuadro">

                <div>
                  <FormControl className={classes.root} onSubmit={handleSumit}>
                    <TextField
                      variant="outlined" 
                      required={true}
                      type="email"
                      helperText={errorEmail? "llenar campo":""}
                      error={errorEmail}
                      fullWidth
                      id="email"
                      label="Email Address"
                      onChange={(e)=>{
                        setEmail(e.target.value)}}
                    />
                    <TextField                    
                      variant="outlined"
                      required={true}
                      type="password" 
                      helperText={errorPassword? "llenar campo":""}
                      error={errorPassword}
                      fullWidth
                      label="Password"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value)}}
                      autoComplete="current-password"
                    />
                    <Button
                      onClick={handleSumit}
                      variant="contained"
                      color="primary">Login</Button>
                    <Link
                      onClick={handleOpen}> SIGN UP</Link>
                    <GoogleLogin
                      clientId="179336870679-id1md658b470m84gr27fnfjf9urn8cm2.apps.googleusercontent.com"
                      buttonText="Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    />,
                    
                  </FormControl>
                  <div>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      className={classes.modal}
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={open}>
                        <div className={classes.paper}>
                        
                          <SignUp/>
            
                        </div>
                      </Fade>
                    </Modal>
                    </div>
                    
                </div>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Login;