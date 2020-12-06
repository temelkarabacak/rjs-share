import React from 'react';
import { Button, TextField, Grid, Container, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import firebase from '../firebase/Firebase.utils';
import * as Yup from 'yup';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const stylesFunc = makeStyles( (theme) => ({
    wrapper: {
        marginTop: "10rem",
        height: "calc(100vh - 19.0625rem)",
        textAlign: "center"
    },
    avatar: {
        margin: "1rem auto",
        backgroundColor: theme.palette.secondary.main,
    }
}))

const initialValues= {
    email: '',
    password: '',
  }

const SignInValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})

function Signin() {
    console.log('firebase object: ', firebase)

    const signinStyles = stylesFunc();

    const handleGoogleButtonclick = () => {
        firebase.useGoogleProvider();
    }

    const handleFormSubmit = (values) => {
        // alert(JSON.stringify(values, null, 2));
        firebase.signIn(values.email, values.password)
    }

    return (
        <Container maxWidth="sm" className={signinStyles.wrapper}>
            <Avatar className={signinStyles.avatar}><LockOutlinedIcon/></Avatar>
            <Typography variant="h4">
                Sign In
            </Typography>
            <Formik
            validationSchema={SignInValidationSchema}
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            >
                {({ handleSubmit, handleChange, values, errors }) => (
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
                        error={errors.email}
                        helperText={errors.email}
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
                        error={errors.password}
                        helperText={errors.password}
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