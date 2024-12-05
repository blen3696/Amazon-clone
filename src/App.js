import React from 'react';
import './App.css';
import Header from './header/Header';
import Fotter from './footer/Footer'
import Home from './home/Home';
import Checkout from './checkout/Checkout';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Login from './login/Login';
import { useStateValue} from './stateprovider/StateProvider';
import { auth } from './firebase/Firebase';
import { useEffect } from 'react';
import  Payment  from './payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './orders/Orders';


const promis = loadStripe('pk_test_51QNHe7C7ZyN2MUI2Q6jV7BqzIob6n3XccWxgXaZjzUPdRjBvPy4s94srBgoTlkdUoEdnOCQI2bjo8kE0mGcuYLdj00qAe4iBCc')
function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  
 useEffect(() => {
  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>>', authUser);

    if (authUser) {
      // the user is logged in 
      dispatch({
        type: 'SET_USER',
        user: authUser
      });
    } else {
      // the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null
      });
    }
  });
}, []);
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/payment" element={ <Elements stripe={promis}><Payment /></Elements>}></Route>
        <Route path="/" element={<Home />}></Route>

      </Routes>
      <Fotter />
    </div>
    </Router>
  );
}

export default App;
