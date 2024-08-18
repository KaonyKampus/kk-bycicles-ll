import { createContext, useState } from "react"



const CartContext = createContext()

const CartProvider = ({children}) => {

    const [carrito,setCarrito] = useState([])

    const agregarProducto = (productoNuevo) => {
        const condicion = estaEnElCarrito (productoNuevo.id)
        if(condicion){
            //sumar cantidades
            let nuevoCarrito = [...carrito]
            nuevoCarrito.forEach((productoCarrito)=>{
                if(productoCarrito.id === productoNuevo.id){
                    productoCarrito.cantidad = productoCarrito.cantidad + productoNuevo.cantidad
                }
            })
            setCarrito(nuevoCarrito)
        }else{
            setCarrito([ ...carrito, productoNuevo ])

        }

      

        //condicional que sume cantidades o lo aNada de nuevo

    }

    
    
    
    
    //Funcion para detectar si el producto a anadir esa en el carrito o no 
    const estaEnElCarrito = (idProducto) =>{
        const condicional = carrito.some((productoCarrito)=> productoCarrito.id === idProducto)
        return condicional
    }
 

    const cantidadTotal = () => {
        const totalProductos = carrito.reduce((total, productoCarrito) => total + productoCarrito.cantidad, 0 )
        return totalProductos
    }


    const precioTotal = () => {
        const precio = carrito.reduce((total,productoCarrito) => total + (productoCarrito.cantidad * productoCarrito.precio),0)
        return precio
    }


    const borrarProducto = (idProducto) => {
        const productosFiltrados = carrito.filter((productoCarrito)=> productoCarrito.id !== idProducto)
        setCarrito(productosFiltrados)

    }

    const vaciarCarrito = () => {
        setCarrito([])
    }


    return(
        <CartContext.Provider value={{carrito,agregarProducto, cantidadTotal,precioTotal,borrarProducto, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    ) 
}
export { CartProvider,CartContext }