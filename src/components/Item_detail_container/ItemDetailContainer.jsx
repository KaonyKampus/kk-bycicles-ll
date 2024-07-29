import './itemDetailContainer.css'
import { useState,useEffect} from 'react'
import obtenerProductos from '../../data'
import ItemDetail from '../item_detail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'



export default function ItemDetailContainer (){

    const [producto, setProducto] = useState({})
    const {productoId} = useParams()

    useEffect( ()=>{
       

        obtenerProductos()
        .then((data)=>{
            const eProducto = data.find( (productoData) => productoData.id === parseInt(productoId)) 
            setProducto(eProducto)
        })   

    },[productoId])   

    return(
        <>
        <ItemDetail producto={producto} />
        </>
    )
}