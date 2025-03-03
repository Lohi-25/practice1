import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductList = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Houseplants</h2>
            {products.map(product => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button 
                        onClick={() => dispatch(addToCart(product))}
                        disabled={product.inCart}
                    >
                        {product.inCart ? "Added" : "Add to Cart"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
