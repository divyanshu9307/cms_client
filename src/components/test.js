import React from 'react'
import { Component } from 'react'
import axios from 'axios'

class Get extends Component{
    constructor(props){
        super();
        this.state={
            coupons:[]
        }
    }
   
    componentDidMount(){
        axios.get('http://localhost:5000/coupons/getAll').then((response)=>{
            this.setState({
                coupons:response.data.allCoupons
            })
            // this.coupon=this.coupons[0]
            console.log(this.state.coupons)
        })
    }
    render(){
        return(<div>
            <h2>divyanshu</h2>
            <h1>{this.state.coupons.length>0?this.state.coupons[0].offerName:''}</h1>
        </div>)
    }
}
export default Get