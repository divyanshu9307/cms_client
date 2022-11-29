import React, { Component } from "react";
import { connect } from "react-redux";
import { saveCouponAction } from "../redux/actions/coupon";
// import Card from "./Card";
import { Link } from "react-router-dom";
export class PostCoupon extends Component {
  state = {
    offerName: "",
    couponRedeemNo: 0,
    typeOfCoupon: "",
    discountAmount: 0,
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
    // console.log(`${event.target.name}and ${event.target.value}`)
  };
  handleSubmit = (event) => {
    this.props.saveCouponAction(this.state);
    // return <Card></Card>;
  };
  render() {
    return (
      <div>
        AddCoupon
        <form onSubmit={this.handleSubmit}>
          <label>
            offerName:
            <input
              onChange={this.handleChange}
              value={this.state.offerName}
              type="text"
              name="offerName"
            />
          </label>
          <br />
          <label>
            couponRedeemNo:
            <input
              onChange={this.handleChange}
              value={this.state.couponRedeemNo}
              type="number"
              name="couponRedeemNo"
            />
          </label>
          <br />
          <label>
            typeOfCoupon:
            <input
              onChange={this.handleChange}
              value={this.state.typeOfCoupon}
              type="text"
              name="typeOfCoupon"
            />
          </label>
          <br />
          <label>
            discountAmount:
            <input
              onChange={this.handleChange}
              value={this.state.discountAmount}
              type="number"
              name="discountAmount"
            />
          </label>
          <br />

          {/* <input type="submit" value="Submit" /> */}
          <button type="submit">Submit</button>
          {/* <button type='submit'><Link to='/'>Submixxxt</Link></button>  */}

          <br></br>
          <Link to="/">
     <button type="button">
     Back
     </button>
 </Link>
          {/* <button>
            <Link to="/">Back</Link>
          </button> */}
        </form>
      </div>
    );
  }
}

export default connect(null, { saveCouponAction })(PostCoupon);
