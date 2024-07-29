import './itemList.css'
import Banner2 from '../Banner2/Banner2.jsx'
import Banner from '../Banner/Banner.jsx'
import Item from '../Item/Item.jsx'



export default function ItemList ({productos}){
    return(
        <>
        <Banner2/>
        <div className='box__main'>
                {
                productos.map((producto) => (
                    <Item key={producto.id} producto={producto} />
                ))
                }                                   
        </div>  
        <Banner/>
        </>    
    )
}