import React from 'react';
import { Button, TextField, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import firebase from '../firebase/Firebase.utils';

const stylesFunc = makeStyles({
    wrapper: {
        marginTop: "5rem",
    }
})

const initialValues= {
    email: '',
    password: '',
  }

function Signin() {
    console.log('firebase object: ', firebase)

    const signinStyles = stylesFunc();

    const handleGoogleButtonclick = () => {
        firebase.useGoogleProvider();
    }

    const handleFormSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    }

    return (
        <Container maxWidth="sm" className={signinStyles.wrapper}>
            <Formik
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
            
                    <Grid item xs={12}>
                    <TextField 
                        name="email"
                        label="E-mail" 
                        variant="outlined" 
                        fullWidth
                        value={values.email}
                        onChange={handleChange}
                        />
                    </Grid>
            
                    <Grid item xs={12}>
                    <TextField 
                        name="password" 
                        label="Password"
                        type="password"
                        variant="outlined" 
                        fullWidth 
                        value={values.password}
                        onChange={handleChange}
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
            
                    </Grid>
                    </form>
            
                )}
            </Formik>
        </Container>
    )
}

export default Signin;