import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./product.css";

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className='product-name'>{name}</h3> 
                <br/>
                <p><small>by: {seller}</small></p>  
                <p>${price}</p>
                <br/>
                <p>only {stock} left in stock - order soon</p>
                <button                             className="main-button"
                onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add To Curt</button>
            </div>   
        </div>
    );
};

export default Product;