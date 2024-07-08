import './card.css'
import cardImage from '../../assets/product_images/accesorio1.jpg'


export default function  Card (){
    return( 
        <>
        <div className='card'>
            <a className='box__image__card' href="">
                <img className='image__card' src={cardImage} alt="" />
            </a>
            <h2 className='product__title'>producto</h2>
            <p className='precio__card'>precio</p>
            <button className='product__button'>Agregar al carrito</button>
        </div>
        </>
    )
}