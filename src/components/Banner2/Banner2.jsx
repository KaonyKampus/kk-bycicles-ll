import './banner2.css'
import imagen from '../../assets/banner2.png'


export default function Banner2 () {
    return(
        <>
        <div className='box__banner2'>
            <img className='box__image2' src={imagen} alt="" />
        </div>
        </>
    )
}