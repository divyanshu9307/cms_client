import React, { Component } from "react";
import { Link } from "react-router-dom";
import CustomizedDialogs from "./dialog";
import PostCoupon  from "./PostCoupon";
// import {Modal} from 'reactstrap';
export class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav1">Coupon Management System</div>
        <div className="nav2">
        
             <CustomizedDialogs  outerTitle="Create Coupon" title="Add Coupon">
        <PostCoupon/>

        </CustomizedDialogs>
        </div>
      </div>
    );
  }
}

export default Nav;
