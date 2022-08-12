import React from "react"
import propTypes from "prop-types"
import { context } from "../utils/context"
import { MdDelete } from "react-icons/md"

export default function CartItem({ item }) {
    const { removeImageCart } = React.useContext(context)

    return (
        <div className="cart-item">
            <img src={item.url} alt={item.id} />
            <div>
                <p>{(5.99).toLocaleString("en-US", { style: "currency", currency: "EUR" })}</p>
                <MdDelete size={40} onClick={() => removeImageCart(item.id)} />
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: propTypes.shape({
        id: propTypes.string.isRequired,
        url: propTypes.string.isRequired,
        isFavorite: propTypes.bool,
    })
}