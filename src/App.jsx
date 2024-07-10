import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/FooterCompo'



import './App.css'

function App() {
  


  return (
    <>
    <div className='app'>
        <NavBar/>
        <Banner/>
        <ItemListContainer greeting ="Bienvenidos a KK-Bycicles"/>
    </div>
    <Footer/>
    </>
  )
}

export default App
