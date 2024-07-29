import './buttons.css'
import iconoK from '../../assets/icons_images/favicon.png'
import { Link } from 'react-router-dom'


/*verificar informacion de navlink para uso de propiedad active true or false para destacar*/

export default function Buttons(){
    return(
        <>
        <div className='nav__buttons'> 
        <ul className='nav_list'>
            <Link to="/" className='nav__selectors  img_nav'>
                <li><img src={iconoK} alt="" /></li>
            </Link>

            <Link to="/categoria/ruta"  className='nav__selectors'>
                <li>Ruta</li>
            </Link>
            <Link to="/categoria/montana"  className='nav__selectors' href="">
                <li>Montaña</li>
            </Link>
            <Link to="/categoria/gravel" className='nav__selectors' href="">
                <li>Gravel</li>
            </Link>
            <Link to="/categoria/accesorios" className='nav__selectors' href="">
                <li>Accesorios</li>
            </Link>
        </ul>
        </div>
        </>
    )
}