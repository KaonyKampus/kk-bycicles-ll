import './banner.css'
import imagen from '../../assets/banner.png'


export default function Banner () {
    return(
        <div className='box__banner1'>
            <img className='box__image1' src={imagen} alt="" />
        </div>
    )
}