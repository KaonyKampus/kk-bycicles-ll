import './itemlistcontainer.css'
import { useState } from 'react'
import { useEffect } from 'react'
import obtenerProductos from '../../data.js'
import ItemCount from '../Item_count/ItemCount.jsx'


/*falta ingresar la propiedad*/

export default function ItemListContainer({greeting}){
            const [productos, setProductos] = useState([])

            useEffect(()=> {
                obtenerProductos()
                .then((respuesta)=> {
                    setProductos(respuesta)
                })
                .catch((error)=> {
                    console.error(error)
                })
                .finally(()=> {
                    console.log("Finalizó la promesa")
                })
            },[])
            return(
                <>
                <div className='main'>
                    <h1 className='main__title'>{greeting}</h1>
                    <div className='box__main'>
                            {
                            productos.map((producto) => (
                                <div className='card' key={producto.id}>
                                        <h2 className='product__title'>{producto.nombre}</h2>
                                        <a className='box__image__card' href="">
                                            <img className='image__card' src={producto.imagen} alt="" />
                                        </a>
                                        <p className='precio__card'>$ {producto.precio}</p>
                                        <ItemCount/>  
                                        <button className='product__button'>Agregar al carrito</button>
                                </div>
                            ))
                            }                                   
                    </div>  
                </div>
                </>
            )
}
