import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/FooterCompo.jsx'
import './App.css'
import ItemDetailContainer from './components/Item_detail_container/ItemDetailContainer.jsx'
import {BrowserRouter,Routes, Route } from "react-router-dom"
import { CartProvider } from './context/CartContext.jsx'
import Cart from './components/Cart/Cart.jsx'
import CheckOut from './components/check/CheckOut.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  

<strong></strong>
  return (
    <BrowserRouter>

      <CartProvider>
        <NavBar/>
        <ToastContainer/>
          <Routes theme="dark">
              <Route path="/" element={<ItemListContainer greeting =" ! Bienvenidos a KK-Bycicles ! "/>}/>
              <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting =" ¡ Bienvenidos a KK-Bycicles !"/>}/>
              <Route path="/detalle/:productoId" element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkOut' element={<CheckOut/>} />
          </Routes>
        <Footer/>
      </CartProvider>
        
    </BrowserRouter>

  )
}

export default App




