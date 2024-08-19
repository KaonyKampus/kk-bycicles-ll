import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./cart.css"
import { Link } from "react-router-dom"

const Cart = () =>{
    const{carrito, precioTotal, borrarProducto, vaciarCarrito} = useContext(CartContext)


    if (carrito.length === 0){
        return(
        
            <div className="carrito__vacio">
                <p className="carrito__vacio__titulo">
                   🛒  El carrito está vacío 😭
                </p>
                <Link to="/" className="productos__boton"> ⬅️ ¡ Llénalo ahora ! </Link>
            </div>

        )
    }  


    return(
    <div className="carrito__lista">
        <ul className="lista_completa">
        {
            carrito.map((productoCarrito) =>(
            <li className="car__container">
                <img className="imagen__carrito__" src={`/src/assets/product_images/${productoCarrito.imagen}`} alt="" />
                <p className="titulo___producto">{productoCarrito.nombre}</p>
                <p className="texto__generico"> <strong>Cantidad:</strong>{productoCarrito.cantidad}</p>
                <p className="texto__generico"><strong>Precio unidad:</strong> {productoCarrito.precio} COP</p>
                <p className="texto__generico"> <strong>Precio parcial:</strong> {productoCarrito.cantidad * productoCarrito.precio} COP</p>
                <button className="eliminar" onClick={() => borrarProducto(productoCarrito.id)}>Eliminar</button>
            </li>
        ))
        }
        </ul>

      
        <div className="container__total__price">
            <h2 className="total__">Precio Total:{precioTotal()} COP</h2>
            <div className="botones__check">
                <button className="vaciar" onClick={vaciarCarrito}>Vaciar Carrito</button>
                <Link className="checkout"  to="/checkOut">Checkout</Link>
            </div>
        </div>


    </div>
    )
}

export default Cart 


