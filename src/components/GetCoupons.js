import React, { Component } from "react";
import { getCouponAction } from "../redux/actions/coupon";
import { connect } from "react-redux";
import Card from "./Card";

class GetCoupons extends Component {
  componentDidMount() {
              //destructuring needed
              console.log("cdm")

    this.props.getCouponAction();
    console.log("get in component didr");
  }

  render() {
    console.log("get in render");

    return (
      <div className="card-container">
        {this.props?.coupons?.map((coupon, c) => {
          //destructuring needed
          return (
            <div className="card-container">
              <Card coupon={coupon}></Card>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  console.log("mstp")

  return {
    coupons: state.coupons,
    // console.log(this.props.coupons)
  };
};
export default connect(mapStateToProps, { getCouponAction })(GetCoupons);
