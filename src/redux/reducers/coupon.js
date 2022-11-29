import { ActionTypes } from "../actions/coupon.js";

const initialState = {
  loader: false,
  coupons: [],
  error: "",
};

export default function couponReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_COUPONS:
      return {
        ...state,
        coupons: action.payload.allCoupons,
      };
    case ActionTypes.SAVE_COUPONS:
      const coupons = state.coupons.concat(action.payload);
      return {
        ...state,
        coupons,
      };
    case ActionTypes.DELETE_COUPONS:
      console.log(
        "state in reducer ",
        state.coupons.filter((y) => y._id !== action.payload)
      );
      return {
        ...state,
        coupons: state.coupons.filter((y) => y._id !== action.payload),
      };
    case ActionTypes.GETONE_COUPONS:
      // let coupon=state.coupons.filter(y => y._id === action.payload)
      return {
        ...state,
        // coupon:(coupon.length>0)?coupon[0]:{}
        coupon: action.payload,
      };
    case ActionTypes.UPDATE_COUPONS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
