import './buttons.css'


export default function Buttons(){
    return(
        <>
        <div className='nav__buttons'>
        <ul className='nav_list'>
            <a className='nav__selectors' href="">
                <li>Home</li>
            </a>
            <a className='nav__selectors' href="">
                <li>Bicis Ruta</li>
            </a>
            <a className='nav__selectors' href="">
                <li>Bicis MTB</li>
            </a>
            <a className='nav__selectors' href="">
                <li>Accesorios</li>
            </a>
        </ul>
        </div>
        </>
    )
}