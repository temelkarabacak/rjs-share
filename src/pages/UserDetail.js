import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../helper/FetchData';
import { format, formatDate } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, capitalize } from '@material-ui/core';

const stylesFunc = makeStyles( (theme) => ({
    wrapper: {
        display: 'flex',
        minHeight: '100vh',
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: "85%",
        marginTop: "5rem",
        marginBottom: "2rem",
    },
    circular: {
        margin: 'auto',
    },
    root: {
        maxWidth: 400,
        margin: 'auto',
        boxShadow: 'none',
        borderRadius: 8,
        marginTop: 24,
    },
    content: {
        padding: 24,
    },
    cta: {
        marginTop: 24,
        textTransform: 'initial',
    },
}));

function UserDetail() {
    const userStyles = stylesFunc();
    const { id } = useParams();
    const [userDetail, setUserDetail] = useState([]);
    useEffect(() => {
                fetchData(`/user/${id}`)
                    .then((res) => setUserDetail(res))
                    .catch()
                    .finally();
            }, []);
    return (
        <Container className={userStyles.wrapper}>
            {JSON.stringify(userDetail)}
        </Container>
    )
}

export default UserDetail;