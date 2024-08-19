import { FadeLoader } from "react-spinners"
import "./loading.css"


export default function Loading (){
    return(
<div className="fadeContainer">
        <FadeLoader   className='spinersito'   color="#2319e5" speedMultiplier={7} width={4}>
            Esta cargando
        </FadeLoader>
</div>  
    )
}