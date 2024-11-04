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

  return (
    <div className='header'>
      <Link to={'/'}>
        <img className='header_logo'
        src={logo}
       
        />
        </Link>
        <div className='header_search'>
         <input className='header_searchInput' type='text' placeholder='Search Amazon' />
         <SearchIcon className='header_searchIcon' />
        </div>
        <div className='header_nav'>
            <Link to={!user && '/login'}>
            <div className='header_options' onClick={handleAuthentication}>
                <span className='header_optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                <span className='header_optionLineTwo' > {!user ? 'Sign In' : 'Sign Out'}</span>
            </div>
            </Link>
            <div className='header_options'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>
            <div className='header_options'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
            <Link to={'/checkout'}>
            <div className='header_optionBasket'>
              <ShoppingBasketIcon />
              <span className='header_optionLineTwo header_basketCount '>{basket.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header