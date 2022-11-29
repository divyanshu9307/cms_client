import axios from 'axios';
export const ActionTypes = {
  GET_COUPONS: "GET_COUPONS",
  GETONE_COUPONS: "GETONE_COUPONS",
  SAVE_COUPONS: "SAVE_COUPONS",
  DELETE_COUPONS: "DELETE_COUPONS",
  UPDATE_COUPONS: "UPDATE_COUPONS",
};

export const getCouponAction =()=>{
        return async (dispatch)=>{
            try{
                const res=await axios.get('http://localhost:5000/coupons/getAll');
                  // console.log(res.data)
                dispatch({
                    type:ActionTypes.GET_COUPONS,
                    payload:res.data
                })
            }
            catch(error){
                console.log(error)
            }
        }
}
export const getIdCouponAction =(id)=>{
  return async (dispatch)=>{
      try{
       const res= await axios.get(`http://localhost:5000/coupons/getId/${id}`);
            console.log(res.data.detailsOfTheCoupon)
          dispatch({
              type:ActionTypes.GETONE_COUPONS,
              payload:res.data.detailsOfTheCoupon
          })
      }
      catch(error){
          console.log(error)
      }
  }
}
export const saveCouponAction =(couponObj)=>{
  return async (dispatch)=>{
      try{
          const res=await axios.post('http://localhost:5000/coupons/post',couponObj,{});
            // console.log(res.data)
          dispatch({
              type:ActionTypes.SAVE_COUPONS,
              payload:res.data
          })
      }
      catch(error){
          console.log(error)
      }
  }
}
export const deleteCouponAction=(id)=>{
  return async (dispatch)=>{
    try{
      await axios.delete(`http://localhost:5000/coupons/delete/${id}`);
      console.log("id in action",id)
      dispatch({

        type:ActionTypes.DELETE_COUPONS,
        payload:id
      })
      
    }
    catch(error){
      console.log(error)
    }
  }
}
export const updateCouponAction=(couponObj,id)=>{
  return async (dispatch)=>{
    try{
      const res=await axios.put(`http://localhost:5000/coupons/put/${id}`,couponObj);
      
      dispatch({

        type:ActionTypes.UPDATE_COUPONS,
        payload:res.data
      })
      
    }
    catch(error){
      console.log(error)
    }
  }
}