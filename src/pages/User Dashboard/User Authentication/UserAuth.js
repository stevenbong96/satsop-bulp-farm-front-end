import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./userAuth.css";
import API from "../../../utils/User/userAPI";
import axios from "axios";
import Header from "../Header/Header";
import Navbar from "../../../components/User Dashboard/Navbar/Navbar";
import Footer from "../../../components/User Dashboard/Footer/Footer";

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function UserAuth() {
    const classes = useStyles();
    let history = useHistory();

    const [loginFormState, setLoginFormState] = useState({
        email: "",
        password: ""
    })

    const [adminState, setAdminState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        token: "",
        id: "",
        isLoggedIn: false
    })

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            matchAdminData();
        }
    }, [])

    function matchAdminData() {
        const token = localStorage.getItem("token");
        API.getAdminInfo(token)
            .then(adminInfo => {
                if (adminInfo) {
                    setAdminState({
                        firstName: adminInfo.firstName,
                        lastName: adminInfo.lastName,
                        email: adminInfo.email,
                        token: token,
                        id: adminInfo._id,
                        isLoggedIn: true
                    })
                } else {
                    localStorage.removeItem("token");
                    setAdminState({
                        firstName: "",
                        lastName: "",
                        email: "",
                        token: "",
                        id: "",
                        isLoggedIn: false
                    })
                }
            })
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setLoginFormState({
            ...loginFormState,
            [name]: value
        })
    }

    function handleLoginForm(event) {
        event.preventDefault();
        // console.log("SUBMITTED")
        // console.log(loginFormState);
        API.getLogin(loginFormState)
            .then(res => {
                // console.log(res);
                localStorage.setItem("token", res.data.token)
                history.push("/admin/dashboard/basicinfo")
                // API.getAdminInfo(res.data.token)
                //     .then(adminRes => {
                //         // console.log(adminRes);
                //         // setAdminState({
                //         //     firstName: adminRes.firstName,
                //         //     lastName: adminRes.lastName,
                //         //     email: adminRes.email,
                //         //     token: adminRes.token,
                //         //     id: adminRes._id,
                //         //     isLoggedIn: true
                //         // })
                //     })
                //     .catch(err => {
                //         console.log(err);
                //     })
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <Header />
            <Navbar />
            <Container component="main" maxWidth="xs" className="formStyle">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Admin Sign in
                </Typography>
                    <form className={classes.form} noValidate onSubmit={handleLoginForm}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            // autoComplete="email"
                            autoFocus
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            // autoComplete="current-password"
                            onChange={handleInputChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                    </Button>
                    </form>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default UserAuth