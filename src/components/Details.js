import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-center">
                                    <img src={img} className="img-fluid" alt="Product" />
                                </div>
                                <div className="col-10 mx-auto text-center text-slanted text-capitalize text-blue my-5">
                                    <h1>Model : {title}</h1>
                                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>Made By : <span className='text-uppercase'>
                                        {company}
                                    </span>
                                    </h4>
                                    <h4 className='text-blue'><strong>Price : <span>Rp.</span>{price}</strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Some Info About Product : 
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>Back To Product
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                        cart
                                        disabled = {inCart?true:false}
                                        onClick = {() =>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                        >
                                            {inCart?'In Cart':'Add To Cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    color: var(--mainBlue);
    border : 1px solid var(--mainBlue);
    border-radius : 10px;
    margin-right : 10px;
    &:hover {
        background: var(--lightBlue);
        color : var(--mainBlue);
    }
`;
