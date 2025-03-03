import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector(state => state.cart.items.length);

    return (
        <nav>
            <Link to="/products">Products</Link>
            <Link to="/cart">
                Cart ({cartItems})
            </Link>
        </nav>
    );
};

export default Header;
