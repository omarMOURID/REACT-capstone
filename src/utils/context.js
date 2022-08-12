import React from 'react'
import axios from 'axios'


const context = React.createContext()

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = React.useState()
    const [cartItems, setCartItems] = React.useState([])


    function addImageToCart(img) {
        setCartItems(prevArray => [...prevArray, img])
    }

    function removeImageCart(id) {
        setCartItems(prevArray => prevArray.filter(image => image.id !== id))
    }

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if (photo.id === id) {
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function emptyCart() {
        setCartItems([])
    }

    React.useEffect(() => {
        axios
            .get("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => setAllPhotos(res.data))
    }, [])

    return (
        <context.Provider value={{ allPhotos, toggleFavorite, addImageToCart, cartItems, removeImageCart, emptyCart }} >
            {children}
        </context.Provider>
    )
}

export { ContextProvider, context }