import Item from "../Item/Item"
import ItemCount from "../Item_count/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext.jsx"
import "./itemDetail.css"
import { Link } from "react-router-dom"




export default function  ItemDetail ({producto}){
    const {agregarProducto} = useContext(CartContext)
    const [mostrarItemCount, setMostrarItemCount] = useState(true);




    const agregarAlCarrito = (contador)=>{
        
        const productoCarrito ={...producto, cantidad: contador}
        
        agregarProducto(productoCarrito)

        setMostrarItemCount(false)
    }

    return( 
        <div className='product__detail__box'>
                <h1 className='title__item__detail'>{producto.nombre}</h1>

                <div className='box__item__description'>
                    <img className="image__detail"   src={`/src/assets/product_images/${producto.imagen}`} alt="" />
                    <p className="parrafo__detail">{producto.descripcion}</p>
                </div>


                {
                    mostrarItemCount ? (<ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>):(<Link to="/cart" className="carrito__back">➡️ Ir al carrito</Link>)
                }
                


        </div>
       
    )
}