import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import url from '../serverURL';
import '../css/userProfile.css';
// import "../css/profile.css";
// import "../css/plans.css";

class User_Profile extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            admin: false,
            userInfo: null,
            subscribed: null
        }
    }
    
    componentDidUpdate(){
        window.scrollTo(0, 1)
     }

    componentDidMount() {


        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/a076d05399.js";
        script.async = true;
        document.body.appendChild(script);

        if (typeof sessionStorage.getItem('token') === "string") {
            const token = sessionStorage.getItem('token');
            axios.get(`${url}/user/profile/${token}`).then(resp => {
                if (resp.data.user) {
                    this.setState({
                        user: true,
                        userInfo: resp.data
                    })
                }
                else {
                    if (resp.data.admin) {
                        this.setState({
                            admin: true
                        })
                    }
                    else {
                        if (!resp.data.uploadLimit) {
                            this.setState({
                                user: false
                            })
                        }
                        else {
                            this.setState({
                                user: false,
                                subscribed: true
                            })
                        }
                    }
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }

    render() {
        const { user, admin, userInfo, subscribed } = this.state;
        if (typeof sessionStorage.getItem('token') === "string") {
            if (user === null && admin === false) {
                return (
                    <div className='loader__modal'>
                        <Loader type="Circles" color="#1752DB" height={40} width={40} />
                    </div>
                )
            }
            if (user === true) {
                return (
                    <div className='container userProfileCont'>
                        <div className='userProfile__card'>

                            <h3 className='userProfile__heading' >PROFILE</h3>
                            {
                            userInfo ?
                            <div className='userProfile__info'>
                                <h1 className='userProfile__name'>
                                    <i className='userProfile__nameInc' class="fas fa-user"></i>
                                    <span className='userProfile__nameText'>{userInfo.name}</span>
                                </h1>

                                <p className='userProfile__email'>
                                    <i className='userProfile__email' class="fas fa-envelope-open-text"></i>
                                    <span className='userProfile__emailText'>{userInfo.email}</span>
                                </p>
                    
                                <p className='userProfile__phone'>
                                    <i className='userProfile__phoneIcn' class="fas fa-phone"></i>
                                    <span className='userProfile__phoneText'>{userInfo.phone}</span>
                                </p>
                            </div>
                            :
                             <div className='userProfile__info'>
                                <h3 className='userProfile__noInfo'>No info available</h3>
                            </div>
                            }
                    </div>
                </div>
                )
            }
            if (admin === true) {
                return (
                    <Redirect to="/welcome_admin" />
                )
            }
            if (user === false && subscribed === true) {
                return (
                    <Redirect to="/models" />
                )
            }
            if (user === false && subscribed === null) {
                return (
                    <Redirect to="/plans" />
                )
            }
        }
        else {
            return (
                <Redirect to="/" />
            )
        }
    }
}

export default User_Profile;
