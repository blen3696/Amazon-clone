import React from 'react';
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import Checkout from './checkout/Checkout';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Login from './login/Login';
import { useStateValue} from './stateprovider/StateProvider';
import { auth } from './firebase/Firebase';
import { useEffect } from 'react';

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
        <Route path="/" element={<Home />}></Route>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
