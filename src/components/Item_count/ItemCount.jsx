import './itemcount.css'
import { useState } from 'react'

export default function ItemCount (){
    const [count, setCount] = useState(1)

     const incrementar = () =>{
        setCount(count + 1)
    }

    const disminuir = () =>{
        if(count<1){
           setCount(count - 1)
        }
    }

    return(
        <>
        <div className='count__box'> 
              <button  className='count__buttons'  onClick={incrementar}>+</button>
              <p>{count}</p>
              <button  className='count__buttons'  onClick={disminuir}>-</button>
        </div>
        </>
    )
}