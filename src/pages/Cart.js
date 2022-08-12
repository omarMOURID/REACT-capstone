import React from "react"
import CartItem from "../components/CartItem"
import { context } from "../utils/context"


export default function Cart() {
    const { cartItems, emptyCart } = React.useContext(context)
    const [buttonText, setButtonText] = React.useState("Place Order")
    const cartItemElements = cartItems.map(item => <><CartItem key={item.id} item={item} /></>)

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "EUR" })

    function placeOrder() {
        setButtonText('Ordering...')
        setTimeout(() => {
            console.log('Order placed!')
            emptyCart()
            setButtonText('Place Order')
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check Out</h1>
            <tr />
            <div className="cart-container">
                {cartItemElements.length > 0 ? cartItemElements : "You have no items in your cart."}
            </div>
            <div className="order">
                <p>Total: {totalCostDisplay}</p>
                {cartItemElements.length > 0 && <button onClick={placeOrder}>{buttonText}</button>}

            </div>
        </main>
    )
}