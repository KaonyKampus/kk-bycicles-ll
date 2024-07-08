import Buttons from "../Buttons_nav/Buttons"
import CarWidget from "../Car/CarWidget"
import './navbar.css'



function NavBar(){
    return(
        <>
        <div className="nav__bar">
            <Buttons/>
            <CarWidget/>
        </div>
        </>
    )
}

export default NavBar    