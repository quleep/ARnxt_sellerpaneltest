import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { Pannellum } from 'pannellum-react';
import url from '../serverURL';
import '../css/userProjectViewer.css';


class Project_Gallery extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            admin: false,
            galleryImg: [],
            projectName: '',
            subscribed: null
        }
    }
    
    componentDidUpdate(){
        window.scrollTo(0, 1)
     }

    componentDidMount() {
        if (typeof sessionStorage.getItem('token') === "string") {
            const token = sessionStorage.getItem('token');
            axios.get(`${url}/user/profile/${token}`).then(resp => {
                if (resp.data.user) {
                    const { userId, projectId } = this.props;
                    axios.post(`${url}/user/project_gallery?userId=${userId}&projectId=${projectId}`)
                        .then(response => {
                            this.setState({
                                user: true,
                                galleryImg: response.data.galleryImg,
                                projectName: response.data.projectName
                            })
                        }).catch(err => console.log(err));
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
        const { user, admin, galleryImg, projectName, subscribed } = this.state;
        if (typeof sessionStorage.getItem('token') === "string") {
            if (user === null && admin === false) {
                return (
                    <div className='loader__modal' >
                        <Loader type="Circles" color="#1752DB" height={40} width={40} />
                    </div>
                )
            }
            if (user === true) {
                return (
                   
                        <div className='projGallery__cont'>

                            <h3 className='PG__heading'>{projectName} </h3>

                            
                            {galleryImg.length > 0 ? <div className="PG__projects">
                                    {galleryImg.map(img => {
                                        return (
                                            <div className="PG__project">
                                                <Pannellum
                                                    height="400px"
                                                    width='100%'
                                                    image={`https://cors-anywhere.herokuapp.com/${img}`}
                                                    // style={{ width:"100%", height:"300px"}}
                                                    pitch={10}
                                                    yaw={180}
                                                    hfov={110}
                                                    autoLoad
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                                    :
                                    <div className="PG__noProjects">
                                        <h4 className="PG__noProjectHeading">
                                            There are no images available
                                        </h4>
                                    </div>
                                }
                            
                        </div>
                    
                )
            }
            if (user === false && subscribed === null) {
                return (
                    <Redirect to="/plans" />
                )
            }
            if (user === false && subscribed === true) {
                return (
                    <Redirect to="/models" />
                )
            }
            if (admin === true) {
                return (
                    <Redirect to="/welcome_admin" />
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

export default Project_Gallery;
