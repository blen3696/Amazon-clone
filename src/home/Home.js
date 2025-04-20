import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';  // Arrow icons from Material UI
import './home.css'; 
import Product from '../product/Product' // Assuming this is your styling file
import backgroundImage1 from '../images/10015.jpg';  // Import your images
import backgroundImage2 from '../images/10009.jpg';
import backgroundImage3 from '../images/10012.jpg';
import backgroundImage4 from '../images/10001.jpg';
import backgroundImage5 from '../images/10002.jpg';
import backgroundImage6 from '../images/10014.jpg';
import backgroundImage7 from '../images/10013.jpg';

const images = [backgroundImage1, backgroundImage2, backgroundImage3,backgroundImage4,backgroundImage5,backgroundImage6,backgroundImage7]; // Array of images

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index

  // Change image every 5 seconds automatically
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);  // Loop back to the first image
    }, 4000);  // Change every 5 seconds

    // Cleanup the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Functions to handle left and right button clicks
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);  // Go to the previous image
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);  // Go to the next image
  };

  return (
    <div className="home">
      {/* Banner Section */}
      <div className="home__banner">
       

        {/* Banner Image */}
        <img className="home__image" src={images[currentImageIndex]} alt="Banner" />

        
      </div>
             <div className='home__row '>
             <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
              />
                  <Product 
                   id="49538094"
                   title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                   price={239.0}
                   rating={4}
                   image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                  />
                   <Product
            id="3005"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
                  </div>
             <div className="home__row">
          
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product 
                  id="3"
                  title="Mens Cotton Jacket"
                  price={499}
                  rating={5}
                  image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  />
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/61PwVKrXe3L._AC_SX679_.jpg"
          />
        
        
        </div>
            <div className='home__row '>
              <Product 
                    id="4"
                    title="Mens Casual Slim Fit"
                    price={699}
                    rating={3}
                    image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                   />
                  <Product 
                   id="1"
                   title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                   price={1009}
                   rating={4}
                   image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                   />
                  <Product 
                   id="2"
                   title="Solid Gold Petite Micropave"
                   price={899}
                   rating={5}
                   image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
                  />
            </div>
            <div className='home__row '>
                  <Product 
                   id="49538094"
                   title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                   price={239.0}
                   rating={4}
                   image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                  />
                  <Product 
                  id="3"
                  title="Mens Cotton Jacket"
                  price={499}
                  rating={5}
                  image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  />
                  <Product 
                   id="4"
                   title="Mens Casual Slim Fit"
                   price={699}
                   rating={3}
                   image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                  />
            </div>
           
        </div>
    
  )
}

export default Home