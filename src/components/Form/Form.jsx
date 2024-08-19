import './form.css'

export default function Form({datosForm,handleCahngeInput,handleSubmitForm}){

    return(
        <div className="box__form">
        <form className="form" onSubmit={handleSubmitForm} >
            <h2 className="titulo__form">🚲¡ Terminemos tu compra !👌</h2>

            <label className="label__format" >Nombre</label>
            <input type="text" name="nombre" value={datosForm.nombre} onChange={handleCahngeInput} />

            <label className="label__format" >Telefono</label>
            <input type="text" name="telefono" value={datosForm.telefono} onChange={handleCahngeInput}/>

            <label className="label__format" >Email</label>
            <input type="text" name="email" value={datosForm.email}  onChange={handleCahngeInput}/>

            <button type="submit" className="guardar">Guardar</button>
        </form>
    </div>
    )
}