import React, { Component } from 'react';
import BenificiaryList from './BenificiaryList';
import axios from 'axios';

class Benificiary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allBenificiarie: [],
    }
  }

  componentDidMount() {
    this.BenificiarieData().then(response => {
      this.setState({ allBenificiarie: response.data });
    })
  }

  BenificiarieData = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://10.117.189.67:8080/banking/getbens').then(function(response) {
        resolve(response);
      }).catch(function(error) {
        reject(error);
      })
    });
  }

  removeBenificiary = (item) => {
    const successful = this;
    return new Promise((resolve, reject) => {
      axios.delete(`http://localhost:3000/bankingapi/${item.accountNumber}`).then(function(reponse) {
        successful.setState(previousState => {
          return {
            allBenificiarie: previousState.allBenificiarie.filter(benificiarydel => benificiarydel.accountNumber !== item.accountNumber)
          };
        });
      }).catch(function(error) {
        reject(error);
      })
    })
  }

  render() {
    return (
      <div>
        <BenificiaryList Benificiarylist={this.state.allBenificiarie} removeClick={this.removeBenificiary} history={this.props.history} />
      </div>
    );
  }
}

export default Benificiary;