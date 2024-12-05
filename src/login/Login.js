import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/Firebase';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        try {
          // Use Firebase authentication API to sign in
          auth.signInWithEmailAndPassword(email, password);
    
          // Redirect the user to the desired page (e.g., home)
          navigate("/");
        } catch (error) {
          alert(error.message);
        }
      };
    
    const register = (e) => {
      e.preventDefault();

      try {
         auth.createUserWithEmailAndPassword(email, password);
  
        navigate("/");
      } catch (error) {
        alert(error.message);
      }
    };

  return (
    <div className="login">
    <Link to={"/"}>
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="Amazon Logo"
      />
    </Link>

    <div className="login__container">
      <h1>Sign-in</h1>

      <form>
        <h5>E-mail</h5>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h5>Password</h5>
        <input
          type="password"
          value={password}
         onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          onClick={signIn}
          className="login__signInButton"
        >
          Sign In
        </button>
      </form>

      <p>
        By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use &
        Sale. Please see our Privacy Notice, our Cookies Notice, and our
        Interest-Based Ads Notice.
      </p>

    <button className="login__registerButton"
      onClick={register} >
        Create your Amazon Account
      </button>
     
    </div>
  </div>
  )
}

export default Login