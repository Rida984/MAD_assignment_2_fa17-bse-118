import React from 'react'
import './Header.css'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = ({items=0}) => {
    return (
        <div className="header">
            <ShoppingCartIcon fontSize="large" />
            <div className="header__items"><p>{items}</p> <p>items</p></div>
        </div>
    )
}

export default Header
