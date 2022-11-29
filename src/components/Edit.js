import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getIdCouponAction ,updateCouponAction} from "../redux/actions/coupon";

export class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offerName: "",
      couponRedeemNo: 0,
      typeOfCoupon: "",
      discountAmount: 0,
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };
  handleEditSave=(id)=>{
  this.props.updateCouponAction(this.state,id);
  // this.props.history.push('/')
  ;
}
  async componentDidMount() {

    const data = window.location.pathname.slice(6);
    console.log(data);
    await this.props.getIdCouponAction(data);
    this.setState({
      offerName: this.props?.myCoupon?.offerName,
      couponRedeemNo: this.props?.myCoupon?.couponRedeemNo,
      typeOfCoupon: this.props?.myCoupon?.typeOfCoupon,
      discountAmount: this.props?.myCoupon?.discountAmount,
    });
  }
  render() {
    console.log("render  props in edit",this.props.myCoupon);
    console.log("render state in edit",this.state);
    console.log("render state in essssssdit",this.props?.myCoupon?._id);

    return (
      <div>
        <form onSubmit={()=>this.handleEditSave(this.props?.myCoupon?._id)}>
        
          <label>
            offerName:
            <input
              onChange={this.handleChange}
              type="text"
              name="offerName"
              value={this.state.offerName}
            />
          </label>
          <br />
          <label>
            couponRedeemNo:
            <input
              onChange={this.handleChange}
              type="number"
              name="couponRedeemNo"
              value={this.state.couponRedeemNo}
            />
          </label>
          <br />
          <label>
            typeOfCoupon:
            <input
              onChange={this.handleChange}
              type="text"
              name="typeOfCoupon"
              value={this.state.typeOfCoupon}
            />
          </label>
          <br />
          <label>
            discountAmount:
            <input
              onChange={this.handleChange}
              type="number"
              name="discountAmount"
              value={this.state.discountAmount}
            />
          </label>
          <br />

          {/* <input type="submit" value="Submit" /> */}
          {/* <button  type="submit">Save Changes</button> */}
          {/* <button type='submit'><Link to='/'>Submixxxt</Link></button>  */}
          {/* <Link to="/"> */}
            <button type="submit">Save Changes</button>
          {/* </Link> */}

          <br></br>
          <Link to="/">
            <button type="button">Discard Changes</button>
          </Link>
          {/* <button>Discard Changes</button> */}
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.coupon);

  return {
    myCoupon: state.coupon,
  };
};
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         getCouponDetail:(id)=>{
//             dispatch(getIdCouponAction(id))
//         }
//     }
// }

export default connect(mapStateToProps, { getIdCouponAction ,updateCouponAction})(Edit);
