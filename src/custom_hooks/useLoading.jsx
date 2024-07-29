import { useState } from "react"


const useLoading = () =>{
    const [loading, setLoading] = useState(false)
    
    const showLoading = ()=> {
        setLoading(true)
    }

    const hideLoading = ()=>{
        setLoading(false)
    }

    const loadedScreen = <div>Loading...</div>
    

    return{loading, showLoading, hideLoading, loadedScreen}

}


export default useLoading




