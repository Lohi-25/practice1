import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice';

const CartPage = () => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.map(item => (
                <div key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
                    <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
                </div>
            ))}
            <h3>Total: ${totalPrice}</h3>
            <button onClick={() => alert("Coming Soon")}>Checkout</button>
            <Link to="/products"><button>Continue Shopping</button></Link>
        </div>
    );
};

export default CartPage;
