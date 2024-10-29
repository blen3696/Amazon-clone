import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import Checkout from './checkout/Checkout';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/" element={<Home />}></Route>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
