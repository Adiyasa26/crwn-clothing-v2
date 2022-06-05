import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import { CheckoutItemContainer, ImageContainer, CheckoutItemSpan, QuantitySpan, RemoveButton } from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
    const {name, imageUrl, price, quantity} = cartItem
    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext)

    const clearItemHandler = () => clearItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemToCart(cartItem)

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <CheckoutItemSpan>{name}</CheckoutItemSpan>
            <QuantitySpan>
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </QuantitySpan>
            <CheckoutItemSpan>{price}</CheckoutItemSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem