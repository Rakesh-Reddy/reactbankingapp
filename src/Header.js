import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import INGLOGO from './INGLOGO.png';
class Header extends Component {

    render() {
        return (
            <div className="row col-md-12" style={{backgroundColor:"#ff6200" , height:"85px"}}>
                <div className="col-md-4 pt-4 pb-5">
                    <h2 className="text-white">ING Banking Application</h2>
                    </div>
                    <div className="col-md-1 pt-3 pb-5">
                        <img className="fluid" width="100px" height="60px" src={INGLOGO} alt="" />
                    </div>
                    <div className="col-5"></div>
                    <div className="col-md-2 pt-4 pb-5">
                       <button className="btn" style={{width:"150px" , height:"40px" , backgroundColor:"#ff6200"}}> <Link to="/" className="text-white">Home</Link></button>
                    </div>
            </div>
        );
    }
}

export default Header;
