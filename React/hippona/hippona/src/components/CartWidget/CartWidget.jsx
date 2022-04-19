import './CartWidget.css'
import carrito from './carrito.png'
const CartWidget = () => {
    return (
        <div>
            <img className='icon-carrito' src={carrito} alt="carrito" />
        </div>
    )
}

export default CartWidget;