import React, { useState, useEffect } from 'react';
import { db } from "../firebase/Firebase";
import './orders.css'
import { useStateValue } from "../stateprovider/StateProvider";
import Order from '../order/Order'

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
    {orders?.map(order => (
        <Order key={order.id} order={order} />
    ))}
                </div>
        </div>
    )
}

export default Orders