import './car.css'
import shopping from '../../assets/icons_images/carritocc4.png'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function CarWidget (){

    const {cantidadTotal} = useContext(CartContext)
    
    let cantidad = cantidadTotal()

    return(
        <Link to="/cart" className='car__widget'>
            <a href="">
                <img src={shopping} alt="shopping car" />
            </a>
            <p className='cantidad__car'>{ cantidad > 0 && cantidad }</p>
        </Link>
    )
}