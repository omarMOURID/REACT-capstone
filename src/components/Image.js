import React from "react"
import propTypes from "prop-types"
import { context } from "../utils/context"
import { FaHeart, FaRegHeart, FaPlus, FaShoppingCart } from 'react-icons/fa'
import useHover from "../hooks/useHover"


function Image({ className, img }) {
    const [hovered, ref] = useHover()
    const { toggleFavorite, addImageToCart, cartItems, removeImageCart } = React.useContext(context)


    const heartIcon = hovered && (img.isFavorite ?
        <FaHeart className="favorite" size={50} onClick={() => toggleFavorite(img.id)} /> :
        <FaRegHeart className="favorite" size={50} onClick={() => toggleFavorite(img.id)} />
    )

    const cartIcon = hovered && (cartItems.find(item => item.id === img.id) ?
        <FaShoppingCart className="cart" size={50} onClick={() => removeImageCart(img.id)} /> :
        <FaPlus className="cart" size={50} onClick={() => addImageToCart(img)} />
    )

    return (
        <div className={`${className} image-container`} ref={ref}>
            <img src={img.url} className={`image-grid ${hovered && 'image-hovered'}`} alt={img.id} />
            {heartIcon}
            {cartIcon}
        </div >
    )
}

Image.propTypes = {
    className: propTypes.string,
    img: propTypes.shape({
        id: propTypes.string.isRequired,
        url: propTypes.string.isRequired,
        isFavorite: propTypes.bool.isRequired,
    }),
}

export default Image