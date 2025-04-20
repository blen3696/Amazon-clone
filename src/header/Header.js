import React from 'react'
import './header.css'
import logo from '../images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateprovider/StateProvider'
import { auth } from '../firebase/Firebase';

function Header() {
  const [{basket, user}, dispatch] = useStateValue()

  const handleAuthentication = () =>{
    if (user){
      auth.signOut();
    }
  }
  console.log(user)

  return (
    <div className='header'>
      <Link to={'/'}>
        <img className='header_logo hover_effect'
        src={logo}
       
        />
        </Link>
        <div className='header_search'>
         <input className='header_searchInput' type='text' placeholder='Search Amazon' />
         <SearchIcon className='header_searchIcon' />
        </div>
        <div className='header_nav '>
         <div className='header_options hover_effect'>
                <span className='header_optionLineOne'>Deliver To</span>
                <span className='header_optionLineTwo'>Ethiopia</span>
            </div>
            <Link to={!user && '/login'} className='header_clearLinks'>
            <div className='header_options hover_effect' onClick={handleAuthentication} >
                <span className='header_optionLineOne'>Hello, {!user ? 'Guest' : user.email.split("@")[0]}</span>
                <span className='header_optionLineTwo' > {!user ? 'Sign In' : 'Sign Out'}</span>
            </div>
            </Link>

            <Link to={'/orders'} className='header_clearLinks'>
            <div className='header_options hover_effect'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>
            </Link>
            <div className='header_options hover_effect'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
            <Link to={'/checkout'} className='header_clearLinks'>
            <div className='header_optionBasket hover_effect'>
              <ShoppingBasketIcon />
              <span className='header_optionLineTwo header_basketCount '>{basket.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header
