import { Image, ItemDetails, ItemDetailsSpan, ItemContainer } from './cart-item.styles'

const CartItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <ItemContainer>
            <Image src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <ItemDetailsSpan>{name}</ItemDetailsSpan>
                <ItemDetailsSpan>{quantity} x ${price}</ItemDetailsSpan>
            </ItemDetails>
        </ItemContainer>
    )
}

export default CartItem