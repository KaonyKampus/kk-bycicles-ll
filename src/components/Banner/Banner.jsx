import './banner.css'
import imagen from '../../assets/banner.png'


export default function Banner () {
    return(
        <>
        <div className='box__banner'>
            <img className='box__image' src={imagen} alt="" />
        </div>
        </>
    )
}