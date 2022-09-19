import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { ButtonContainer } from './button';
import styled from 'styled-components';


class navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <div className="container-fluid">

                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className='nav-link'>
                            Product
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer className='btn btn-outline-light' type="submit">
                        <span className='mr-2'>
                        <FontAwesomeIcon icon={faCartPlus} />
                        </span>
                             My Cart
                    </ButtonContainer>
                </Link>
                </div>
            </NavWrapper>
        );
    }
}
    
export default navbar;

const NavWrapper = styled.nav`
    background : var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-sizeL: 1.3rem;
        text-transformm: capitalize;
    }
`;