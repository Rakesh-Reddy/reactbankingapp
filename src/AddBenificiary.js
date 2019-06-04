import React, { Component } from 'react';
import axios from 'axios';

class AddBenificiary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                beneficiaryName: '',
                accountNumber: '',
                beneficiaryAccountNumber: '',
                ifsccode: '',
            }
        }
    }

    handleChange = (event) => {
        const { data } = this.state;
        data[event.target.name] = event.target.value;
        this.setState({ data });
    }

    addBenificiary = (event) => {
        const rakesh = this;
        return new Promise((resolve, reject) => {
            axios.post('http://10.117.189.67:8080/banking/addpayee', this.state.data).then(function (response) {
                resolve(response)
                rakesh.props.history.push("/");
            }).catch(function (error) {
                reject(error);
            });
        })
    }

    render() {
        const { otp } = this.state;
        return (
            <div className="row" >
                <h2 style={{ color: "#ff6200" }} className=" col-md-12 pt-5 pb-4"> Add Benificiary</h2>
                <div className="col-md-12 pb-4">
                    <input style={{ height: "40px" }} className="col-md-4" type="text" name="beneficiaryName" placeholder="Enter Benificiary Name" onChange={this.handleChange} />
                </div>
                <div className="col-md-12">
                    <input style={{ height: "40px" }} className="col-md-4" type="text" name="accountNumber" placeholder="Enter Account Number" onChange={this.handleChange} />
                </div>
                <div className="col-md-12 pt-4 pb-4">
                    <input style={{ height: "40px" }} className="col-md-4" type="number" name="beneficiaryAccountNumber" placeholder="Enter Benificiary Account Number" onChange={this.handleChange} />
                </div>
                <div className="col-md-12">
                    <input style={{ height: "40px" }} className="col-md-4" type="text" name="ifsccode" placeholder="Enter IFSC Code" onChange={this.handleChange} />
                </div>
                {
                    (otp === "true") ? <div className="col-md-12"><input type="password" className="col-md-4" placeholder="enter OTP" /></div> : null
                }
                <div className="col-md-12 pt-4">
                    <button style={{ width: "250px", height: "50px", backgroundColor: "#ff6200" }} onClick={this.addBenificiary}> Add Benificiary</button>
                </div>
            </div>
        );
    }
}

export default AddBenificiary;