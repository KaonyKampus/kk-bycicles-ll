import './itemDetailContainer.css'
import { useState,useEffect} from 'react'
import obtenerProductos from '../../data'
import ItemDetail from '../item_detail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import Loading from '../componente_carga/Loading.jsx'
import { getDoc,doc } from 'firebase/firestore'
import db from '../../db/db.js'

export default function ItemDetailContainer (){

    const [producto, setProducto] = useState({})
    const [estaCargando1, setEstaCargando1] = useState(false)


    const {productoId} = useParams()
    const getProduct = async () =>{
        const docRef = doc(db, "productos", productoId)
        const dataDb = await getDoc(docRef)
        const data = {id: dataDb.id, ...dataDb.data() }

        setProducto(data)
    }


    useEffect(() => {
        getProduct()
       
    },[])   
    


    return(
        <>
        { 
        estaCargando1 ? ( <Loading/>) : <ItemDetail producto={producto} />
        }   
        </>
    )
}