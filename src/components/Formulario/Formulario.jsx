import { useState } from "react"



export default function Formulario (){
    const[nUsuario, setnUsuario] = useState("")
    const[direccion, setDireccion] = useState("")
    const[email,setEmail] = useState("")


    const handleChangenUsuario = (event)=> {
            setnUsuario(event.target.value)
    }

    const handleChangeDireccion = (event)=>{
            setDireccion(event.target.value)

    }

    const handleChangeEmail = (event)=>{
            setEmail(event.target.value)
    }


    const handleSubmitForm = (event)=>{
            event.preventDefault()

            const usuarioInfo ={nUsuario,direccion,email}
            console.log(usuarioInfo)


            setnUsuario("")
            setDireccion("")
            setEmail("")
    }

    return(

        <form onSubmit={handleSubmitForm}>

             <label htmlFor="">Nombre: </label>
             <input type="text" value={nUsuario} onChange={handleChangenUsuario}/>

             <label htmlFor="" >Dirección: </label>
             <input type="text" value={direccion}  onChange={handleChangeDireccion}/>

             <label htmlFor="" >Email: </label>
             <input type="email"  value={email} onChange={handleChangeEmail}/>

             <button>Enviar</button>
        </form>
    )
}