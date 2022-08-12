import React from "react"
import { Link } from "react-router-dom"
import { FaShoppingCart, FaCartArrowDown } from 'react-icons/fa';
import { context } from "../utils/context"


export default function Header() {
    const { cartItems } = React.useContext(context)

    const cart = cartItems.length > 0 ? <FaCartArrowDown /> : <FaShoppingCart />
    return (
        <header>
            <nav>
                <Link to="/">Pic Some</Link>
                <Link to="/cart">{cart}</Link>
            </nav>
        </header>
    )
}