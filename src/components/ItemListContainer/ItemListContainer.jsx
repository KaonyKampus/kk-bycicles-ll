import './itemlistcontainer.css'
import Card from '../Card/Card'

export default function ItemListContainer(props){
    return(
        <>
        <div className='main'>
            <h1></h1>
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