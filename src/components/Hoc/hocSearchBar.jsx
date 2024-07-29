/*import { useEffect } from "react"
import { useState } from "react"




const hocSearchBar = (Component) => {
    return function () {
      const [productos, setProductos] = useState([]);
      const [consulta, setConsulta] = useState("");
  
      useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => setProductos(data))
          .catch((error) => console.error(error));
      }, []);
  
      const search = (listarProductos) => {
        const listarProductosFiltrados = listarProductos.filter((producto) =>
          producto["title"].toLowerCase().includes(consulta)
        );
  
        return listarProductosFiltrados;
      };
  

      const handleInputChange = (event) => {
        setConsulta(event.target.value.toLowerCase());
      };
  
      return (
        productos && (
          <>
            <div>
              <input type="text" placeholder="buscar..." onChange={handleInputChange} />
            </div>
            <Component productos={search(productos)} />
          </>
        )
      );
    };
  };
  
  export default hocSearchBar;
  */
 