import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Nav extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='nav1'>Coupon Management System</div>
        <Link to="/add">
     <button type="button">
     create coupon
     </button>
 </Link>
        

        </div>
    )
  }
}

export default Nav