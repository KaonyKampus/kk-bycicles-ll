import './itemcount.css'
import { useState } from 'react'
import { toast } from 'react-toastify'

export default function ItemCount ({stock,agregarAlCarrito}){
    const [count, setCount] = useState(1)

     const incrementar = () =>{
        if(count<stock){
            setCount(count + 1)
        } 

        if (count === stock){
            toast.error("Producto sin stock")
        }
    }

    const disminuir = () =>{
        if(count>1){
           setCount(count - 1)
        }
    }

    return(
        <div className='count__box'> 
              <button  className='count__buttons'  onClick={incrementar}>+</button>
              <p className='p__count'>{count}</p>
              <button  className='count__buttons'  onClick={disminuir}>-</button>
              
              <button className='anadir__carro' onClick={() => agregarAlCarrito(count)}> 
                Añadir al carrito
              </button>
        </div>
       
    )
}