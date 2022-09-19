import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context';

import { Link } from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    
                    if(!modalOpen){
                        return null;
                    }else {
                        return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto py-2 col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>Item Added to the cart</h5>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h5>{title}</h5>
                                        <h5 className='text-muted'> price : Rp. {price}</h5>
                                        <Link className='mr-4'>
                                            <ButtonContainer onClick={()=>closeModal()}>
                                                Continoue Shopping
                                            </ButtonContainer> 
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={()=>closeModal()}>
                                                Go To Cart
                                            </ButtonContainer> 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default Modal;

const ModalContainer = styled.div`
    position : fixed;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    background : rgba(0,0,0,0.3);
    display : flex;
    align-item : center;
    justify-content : center;
    #modal{
        background : var(--mainWhite);
    }
`;
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
