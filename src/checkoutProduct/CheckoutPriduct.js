import React from 'react'
import './checkoutProduct.css'
import { useStateValue } from '../stateprovider/StateProvider'

const CheckoutPriduct = ({id,image,title,price,rating,hideButton}) => {
    const [{basket}, dispatch] = useStateValue()

    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id : id
        })
    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image}/>
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
             {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
           </div>
           {/* Conditionally render the button if hideButton is not true */}
           {!hideButton && (
                    <button onClick={removeFromBasket} className='checkoutProduct__removeButton'>
                        Remove from Basket
                    </button>
                )}
        </div>
    </div>

  );
}

export default CheckoutPriduct