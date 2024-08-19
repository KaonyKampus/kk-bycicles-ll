import './itemList.css'
import Banner2 from '../Banner2/Banner2.jsx'
import Item from '../Item/Item.jsx'



export default function ItemList ({productos}){
    return(
        <>
        
        <div className='box__main'>
        <Banner2/>
                {
                productos.map((producto) => (
                    <Item key={producto.id} producto={producto} />
                ))
                }                               
        </div>  
        
        </>    
    )
}