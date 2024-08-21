import './itemlistcontainer.css'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom'
import Loading from '../componente_carga/Loading.jsx'
import { getDocs, collection, query, where} from 'firebase/firestore'
import db from '../../db/db.js'



 
export default function ItemListContainer({greeting}){
            const [productos, setProductos] = useState([])
            const [estaCargando, setEstaCargando] = useState(false)
            const {idCategoria} = useParams()         


            const getProducts = async () => {
                try{
                    const productosRef = collection(db, "productos")
                    const dataDb = await getDocs(productosRef) 
                    const data = dataDb.docs.map((productDb) => {
                        return{ id: productDb.id, ...productDb.data()}
                    })
                    setProductos(data)
                }catch(error){
                    console.log(error)
                }
            }


            const getProductsByCategory = async () =>{
                try{
                    const productosRef = collection(db, "productos")
                    const q = query(productosRef, where("categoria", "==", idCategoria))
                    const dataDb = await getDocs(q)
                    const data = dataDb.docs.map((productDb) => {
                        return{ id: productDb.id, ...productDb.data()} 
                    })
                    setProductos(data)
                }catch(error){
                    console.log(error)
                }
            }


            useEffect(()=> {
                if(idCategoria){
                    getProductsByCategory()
                }else{
                    getProducts()
                }
            }, [idCategoria])

            return(
                <div className='main'>
                    <h1 className='main__title'>{greeting}</h1>
                     {
                    estaCargando ? ( <Loading/>) : <ItemList productos={productos} />
                     }
                </div>
            )
}
