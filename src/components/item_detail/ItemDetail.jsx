import Item from "../Item/Item"
import ItemCount from "../Item_count/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext.jsx"
import "./itemDetail.css"




export default function  ItemDetail ({producto}){
    const {agregarProducto} = useContext(CartContext)

    const agregarAlCarrito = (contador)=>{
        
        const productoCarrito ={...producto, cantidad: contador}
        
        agregarProducto(productoCarrito)
    }



    console.log("prueba: "+ producto)
    return( 
        <div className='product__detail__box'>
                <h1 className='title__item__detail'>{producto.nombre}</h1>

                <div className='box__item__description'>
                    <img className="image__detail"   src={`/src/assets/product_images/${producto.imagen}`} alt="" />
                    <p className="parrafo__detail">{producto.descripcion}</p>
                </div>

                <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>

        </div>
       
    )
}