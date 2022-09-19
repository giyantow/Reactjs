import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function CartColumns({value}){
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-2 ml-sm-6 ml-md-auto col-sm-12 text-capitalize text-center">
                        <Link to="/">
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5' type='button' onClick={()=>clearCart()}>
                                Clear Cart
                            </button>
                        </Link>
                        <h5>
                            <span className='text-title'> Subtotal :</span>
                            <strong>Rp. {cartSubtotal} </strong>
                        </h5>
                        <h5>
                            <span className='text-title'> Tax :</span>
                            <strong>Rp. {cartTax} </strong>
                        </h5>
                        <h5>
                            <span className='text-title'> Total :</span>
                            <strong>Rp. {cartTotal} </strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};