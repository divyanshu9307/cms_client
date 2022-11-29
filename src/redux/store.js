
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import { compose } from 'redux'
import couponReducer from './reducers/coupon'
const middleware = [thunk]




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    couponReducer,
    {},composeEnhancers
   (applyMiddleware(...middleware))
    
)
// console.log(store)
export default store;
