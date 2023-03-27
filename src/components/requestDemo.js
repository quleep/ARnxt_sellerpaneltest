import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/requestDemo.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import url from '../serverURL';

class Request_Demo extends Component {
    

    constructor() {
        super();
        this.state = {
            user: null,
            admin: false,
        }
    }

componentDidUpdate(){
    window.scrollTo(0, 1)
 }
    async componentDidMount() {
        if (typeof sessionStorage.getItem('token') === "string") {
            const token = sessionStorage.getItem('token');
            try {
                const resp = await axios.get(`${url}/merchant/profile/${token}`);
                if (resp) {
                    if (resp.data.user) {
                        this.setState({
                            user: true
                        })
                    }
                    else {
                        if (resp.data.admin) {
                            this.setState({
                                admin: true
                            })
                        }
                        else {
                            try {
                                
                                const response = 'api__response'
                                if (response) {
                                    this.setState({
                                        user: false,
                                    })
                                }
                            }
                            catch (err) {
                                console.log(err)
                            }
                        }
                    }
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }


    //----SubmitData() starts 
    submitData(e)
    {
        e.preventDefault();
        // add the verification and submit code here


        // Alert animation code
        let requestAlert = document.getElementById('requestAlert');
        requestAlert.classList.add('request__alert__comein');

        setTimeout(() => requestAlert.classList.remove('request__alert__comein'),2500);
    }





    render() {

        const { user, admin, transacDetails } = this.state;

        if (typeof sessionStorage.getItem('token') === "string" && user === true) {
            return (
                <Redirect to="/welcome_user" />
            )
        }
        
        if (typeof sessionStorage.getItem('token') === "string" && user === false) {
            return (
                <div className='container requestDemoCont'>

                        

                        <div className='requestDemoFormDiv'>
                            <h3 className='requestDemo__heading'>Request Demo</h3>
                            <form className='requestDemo__form' onSubmit={this.submitData}>
                                <input className='requestDemo__name' type="text" placeholder="Name"/>
                                <input className='requestDemo__email' type="email" placeholder="Email"/>
                                <input className='requestDemo__subject' type="text" placeholder="Subject"/>
                                <textarea className='requestDemo__message' name="" id="" cols="30" rows="10" placeholder="Message">
                                </textarea>
                                <button className='requestDemo__submitBtn' type="submit">Submit</button>
                            </form>

                            <div className='contact__waterMark'>
                                <h1 className='waterMark__heading'>Contact Info.</h1>
                                <p className='waterMark__para'><strong>Email: </strong>contact.email@gmail.com</p>
                                <p className='waterMark__para'><strong>Phone: </strong>9910658888</p>
                                <p className='waterMark__para'><strong>Address: </strong>Z-12, C-4E, janakpuri, New Delhi</p>
                            </div>
                        </div>

                    </div>
            )
        }
        if (typeof sessionStorage.getItem('token') === "string" && admin === true) {
            return (
                <Redirect to="/welcome_admin" />
            )
        }
        if (typeof sessionStorage.getItem('token') === "string" && user === null && admin === false) {
            return (
                <div className='loader__modal' >
                    <Loader type="Circles" color="#1752DB" height={40} width={40} />
                </div>
            )
        }
        if (typeof sessionStorage.getItem('token') != "string") {
            return (
                <Redirect to="/" />
            )
        }
    }

}

export default Request_Demo;
