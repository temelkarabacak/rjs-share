import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, capitalize } from '@material-ui/core';
import axios from 'axios';
import MediaCard from '../components/MediaCard';

const stylesFunc = makeStyles( (theme) => ({
    wrapper: {
        marginTop: "10rem",
        height: "calc(100vh - 19.0625rem)",
        textAlign: "center"
    },
}))

function Main() {
    const mainStyles = stylesFunc();
    const { REACT_APP_BASE_URL, REACT_APP_API_TOKEN } = process.env;
    const [userList, setUserList] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(`${REACT_APP_BASE_URL}/user`, { 
            headers: { 
                'app-id': REACT_APP_API_TOKEN 
            } 
        });
        setUserList(response?.data?.data);
    }
    console.log('userList: ', userList);

    
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <Container className={mainStyles.wrapper}>
            <Grid container spacing={3}>

            {userList.map(user => {
                return(
                    <Grid item xs={3} key={user.id}>
                    <MediaCard 
                    id={user.id}
                    userImage={user.picture} 
                    userName={`${capitalize(user.title)} ${user.firstName} ${user.lastName}`} 
                    userEmail={user.email} />
                    </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Main
