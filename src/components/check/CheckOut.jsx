import { useContext, useState } from "react"
import "./checkout.css"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection } from "firebase/firestore"
import Form from "../Form/Form"
import db from "../../db/db.js"


export default function CheckOut(){

    const [datosForm,setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: ""
    })
    const [idOrden, setIdOrden] = useState(null)
    const { carrito, precioTotal} = useContext(CartContext) 


    const handleCahngeInput =(event) =>{
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value})
    } 

    console.log(datosForm)
    
    const handleSubmitForm = (event) =>{
        event.preventDefault()

        const orden = {
            comprador: {...datosForm},
            productos: [...carrito],
            fecha: Timestamp.fromDate(new Date()),
            total: precioTotal()
        }
        sendOrder(orden)
    }

    const sendOrder = async (orden) => {

        try{
            const ordenesRef = collection(db, "ordenes")
            const ordenDb = await addDoc(ordenesRef, orden)
            setIdOrden(ordenDb.id)
        }catch(error){
            console.log(error)
        }

    }


    return(
    <>
        {
          idOrden  ? (
          <div className="mensaje__orden">
            <h2>¡Orden Completada Satisfactoriamente!</h2>
            <p>Por favor guarda el ID de tu orden generada: {idOrden} </p>
          </div>) : (
            <Form  
            datosForm={datosForm} 
            handleCahngeInput={handleCahngeInput}
            handleSubmitForm={handleSubmitForm} 
            />
        )} 
    </>
    )
}