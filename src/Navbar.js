import React from 'react'
import "./Navbar.css"

// import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';



  function Navbar({cart}) {
    
    // const navigate = useNavigate();
    // const[product,setProduct]=useState([]);
  return (
    <div className='header'>
        <NavLink to="/">
        <img className='header_logo' src="download.png" alt="snapdeal-logo"/>
        <span className='snapdeal'>Snapdeal</span>
        </NavLink>
        <div className='header_search'>
          <input className='header_searchbox' type="text" placeholder="Search products &brands"/>
          <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
          <div className='header_option'>

            <NavLink to='/login' className='header_optionone'>Hello,Login</NavLink>
            <span className='header_optiontwo'>Account & List</span>
          </div>
          <div className='header_option'>
            <NavLink to='/product' className='header_optionone'>Product</NavLink>
            <span className='header_optiontwo'>& Orders</span>
          </div>
          <div className='header_option'>
            <span className='header_optionone'>Your</span>
            <NavLink to='/PaymentPage' className='header_optiontwo'>PaymentPage</NavLink>
          </div>
          <div className='header_optionBasket'>
            <NavLink className='LinkLagaya' to="/cart">
            <ShoppingBasketIcon className='iconlagaya'/>
            <span>0</span>
            </NavLink>
            <span>{cart?.total_items}</span>
            

</div>

         </div> 

    </div>
  )
}

export default Navbar;