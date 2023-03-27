import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import url from '../serverURL';
import '../css/merchDetails.css';

class Merchant_Details extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            admin: false,
            merchantInfo: null,
            subscribed: null,
            planDetails: null,
            planDetect: true
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
                if (resp.data.user) {
                    this.setState({
                        user: true
                    })
                }
                else {
                    if (resp.data.admin) {
                        const { merchantId } = this.props;
                        try {
                            const response = await axios.get(`${url}/admin/merchant_details/${merchantId}`);
                            if (!response.data.merchantInfo.uploadLimit) {
                                this.setState({
                                    admin: true,
                                    merchantInfo: response.data.merchantInfo,
                                })
                            }
                            else {
                                try {
                                    const id = response.data.merchantInfo.sub_id;
                                    const newResp = await axios.get(`${url}/razorpay/plan/${id}`);
                                    if (newResp.data.planDetails) {
                                        this.setState({
                                            admin: true,
                                            merchantInfo: response.data.merchantInfo,
                                            planDetails: newResp.data.planDetails
                                        })
                                    }
                                    else {
                                        this.setState({
                                            admin: true,
                                            merchantInfo: response.data.merchantInfo,
                                            planDetect: false
                                        })
                                    }
                                }
                                catch (err) {
                                    console.log(err)
                                }
                            }
                        }
                        catch (err) {
                            console.log(err);
                        }
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
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    render() {

        const { user, admin, merchantInfo, subscribed, planDetails, planDetect } = this.state;
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
                    <Redirect to="/welcome_user" />
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
            if (admin === true) {
                return (
                    <div className='container amerchCont'>
                        
                        {
                            merchantInfo ?
                                <div className='amerch__card'>

                                    <h3 className='amerch__heading'>PROFILE DETAILS</h3>
                                   
                                    <p className='amerch__detail'><strong >Name : </strong>{merchantInfo.name}</p>

                                    <p className='amerch__detail'><strong>Email : </strong>{merchantInfo.email}</p>

                                    <p className='amerch__detail'><strong>Company Name : </strong>{merchantInfo.company}</p>

                                    {planDetails ?
                                        <div>
                                            <p className='amerch__detail'>
                                                <strong>Plan selected : </strong>
                                                {planDetails.name}
                                            </p>

                                            <p className='amerch__detail'>
                                                <strong>Subscription Amount : </strong>
                                                {`${planDetails.amount / 100} ${planDetails.currency}/month`}
                                            </p>

                                            <p className='amerch__detail'>
                                                <strong> Model limit : </strong>
                                                {merchantInfo.uploadLimit}
                                            </p>

                                        </div>
                                        :
                                        (planDetect ?
                                            <p className='amerch__detail'>
                                                <strong>Plan selected:</strong> No plan choosen</p>
                                                :
                                            <p className='amerch__detail'><strong>Plan selected:</strong>Plan cannot be detected
                                                </p>
                                        )
                                        
                                    }

                                    <p className='amerch__detail'><strong>Phone : </strong>{merchantInfo.phone}</p>
                                   
                                </div>
                                :
                                <h4 className='amerch__noInfo'> No info available</h4>
                        }
                    </div>
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

export default Merchant_Details;
