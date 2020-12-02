import React from 'react';
import { Button, TextField, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import firebase from '../firebase/Firebase.utils';

const styles = makeStyles({
    wrapper: {
        marginTop: "5rem",
    }
})

const Signup = () => {
    console.log('firebase object: ', firebase)
    const formik = useFormik({
        initialValues: {
          displayName: '',
          email: '',
          password: '',
        },
        onSubmit: values => {
          // alert(JSON.stringify(values, null, 2));
          firebase.register(values.email, values.password);
        },
      });
    const signupStyles = styles();

    const handleGoogleButtonclick = () => {
        firebase.useGoogleProvider();
    }

    return (
        <Container maxWidth="sm" className={signupStyles.wrapper}>
            <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>

        <Grid item xs={12}>
        <TextField 
            name="displayName"
            label="Name - Surname" 
            variant="outlined" 
            fullWidth 
            value={formik.values.displayName}
            onChange={formik.handleChange}
            />
        </Grid>

        <Grid item xs={12}>
        <TextField 
            name="email"
            label="E-mail" 
            variant="outlined" 
            fullWidth 
            value={formik.values.email}
            onChange={formik.handleChange}
            />
        </Grid>

        <Grid item xs={12}>
        <TextField 
            name="password" 
            label="Password"
            type="password"
            variant="outlined" 
            fullWidth 
            value={formik.values.password}
            onChange={formik.handleChange}
            />
        </Grid>

        <Grid item xs={12}>
        <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            type="submit"
            >
                Submit
            </Button>
        </Grid>

        <Grid item xs={12}>
        <Button 
            variant="contained" 
            color="secondary" 
            fullWidth
            onClick={handleGoogleButtonclick}
            >
                Google Login
            </Button>
        </Grid>

            {/* 
            
            // displayName input
            
            // email input
            
            // password input
            
            // submit button
            
            // SignUp with Google
            
        */}
        </Grid>
            </form>
        </Container>
    )
}

export default Signup;