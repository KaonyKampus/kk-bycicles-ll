import './itemlistcontainer.css'
import Card from '../Card/Card'

/*falta ingresar la propiedad*/

export default function ItemListContainer({greeting}){
      
    return(
        <>
        <div className='main'>
            <h1 className='main__title'>{greeting}</h1>
            <div className='box__main'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>  
        </div>
        </>
    )
}