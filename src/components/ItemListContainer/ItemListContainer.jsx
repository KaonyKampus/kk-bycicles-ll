import './itemlistcontainer.css'
import { useState } from 'react'
import { useEffect } from 'react'
import obtenerProductos from '../../data.js'
import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom'


 
export default function ItemListContainer({greeting}){
            const [productos, setProductos] = useState([])
            const {idCategoria} = useParams()         


            useEffect(()=> {

                obtenerProductos()
                .then((respuesta)=> {
                    if(idCategoria){
                        const productosFiltrados = respuesta.filter((producto) => producto.categoria === idCategoria)
                        setProductos(productosFiltrados)
                    }else{
                        setProductos(respuesta)
                    }

                })
                .catch((error)=> {
                    console.error(error)
                })
                .finally(()=> {
                    console.log("Aqui llego la promesa")

                })
            }, [idCategoria])






            return(
    
                <div className='main'>
                    <h1 className='main__title'>{greeting}</h1>
                     <ItemList productos={productos} />
                </div>
        
            )
}
