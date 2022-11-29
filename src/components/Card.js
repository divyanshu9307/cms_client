import React, { Component } from 'react'
import { connect} from 'react-redux'
import {deleteCouponAction } from "../redux/actions/coupon";
import { Link } from 'react-router-dom';

export class Card extends Component {
  deleteCoupon=(id)=>{
    this.props.deleteCouponAction(id)
    console.log("id in component",id)
  }
  render(props) {
    console.log("render")
    return (
      <div className='card1'>
        <div className='ab' >
            <div>{this.props.coupon.offerName}</div>
            <div>{this.props.coupon.couponRedeemNo}</div>
            <div>{this.props.coupon.typeOfCoupon}</div>
            <div>{this.props.coupon.discountAmount}</div>
            {/* <div>{this.props.coupon.id}</div> */}
            <Link to={`/edit/${this.props.coupon._id}`}>
     <button type="button">
          Edit
     </button>
 </Link>
            <button onClick={()=>this.deleteCoupon(this.props.coupon._id)}>delete</button>
            
        </div>
      </div>
    )
  }
}
export default connect(null,{deleteCouponAction})(Card)
// export default Card