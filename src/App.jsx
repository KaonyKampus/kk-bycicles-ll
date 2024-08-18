import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/FooterCompo.jsx'
import './App.css'
import ItemDetailContainer from './components/Item_detail_container/ItemDetailContainer.jsx'
import {BrowserRouter,Routes, Route } from "react-router-dom"
import { CartProvider } from './context/CartContext.jsx'
import Cart from './components/Cart/Cart.jsx'

function App() {
  


  return (
    <BrowserRouter>

      <CartProvider>
        <NavBar/>
          <Routes>
              <Route path="/"  element={<ItemListContainer greeting ="Bienvenides a KK-Bycicles"/>}/>
              <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting ="¡ Bienvenidos a KK-Bycicles !"/>}/>
              <Route path="/detalle/:productoId" element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
          </Routes>
        <Footer/>
      </CartProvider>
        
    </BrowserRouter>

  )
}

export default App




