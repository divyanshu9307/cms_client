import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCouponAction } from "../redux/actions/coupon";
import { Link } from "react-router-dom";
import CustomizedDialogs from "./dialog";
import Edit from "./Edit";

export class Card extends Component {
  deleteCoupon = (id) => {
    this.props.deleteCouponAction(id);
    console.log("id in component", id);
  };
  render(props) {
    console.log("render");
    return (
      <div className="card1">
        <div className="ab">
          <div className="cardDetails">
            <div>Offer Name- {this.props.coupon.offerName}</div>
            <div>Coupon Redeem No- {this.props.coupon.couponRedeemNo}</div>
            <div>Coupon Type- {this.props.coupon.typeOfCoupon}</div>
            <div>Discount Amount- {this.props.coupon.discountAmount}</div>
            <br></br>
          </div>
          {/* <div>{this.props.coupon.id}</div> */}

          <div className="editAndDelete">
            <Link to={`/edit/${this.props.coupon._id}`}>
              <button className="button2" type="button">Edit</button>
            </Link>
            <div>
            {/* <CustomizedDialogs outerTitle="Edit Coupon" title="edit coupon ">
              <Edit />
            </CustomizedDialogs> */}
            </div>
            <button
              className="button2"
              onClick={() => this.deleteCoupon(this.props.coupon._id)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { deleteCouponAction })(Card);
// export default Card
