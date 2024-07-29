import './car.css'
import shopping from '../../assets/icons_images/carritocc4.png'

export default function CarWidget (){
    return(
        <>
        <div className='car__widget'>
            <a href="">
                <img src={shopping} alt="shopping car" />
            </a>
            <span>(0)</span>
        </div>
        </>
    )
}