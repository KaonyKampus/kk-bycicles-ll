
import { Link } from 'react-router-dom'



export default function Item ({producto}){
    return(
        <div className='card'>
            <h2 className='product__title'>{producto.nombre} </h2>
            <img className='image__card' src={`/src/assets/product_images/${producto.imagen}`} alt="" />
            <p className='precio__card'>$ {producto.precio}</p>
           

            <Link className='detalle__producto' to={`/detalle/${producto.id}`}>
                    Detalle
            </Link>
            
        </div>
    )
}