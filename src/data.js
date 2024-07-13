

const productos = [
    {
        id:1,
        nombre: "Casco S-Works Variante 1",
        precio:230000,
        imagen:"./assets/product_images/accesorio1.jpg",
        descripcion:"",
        categoria: "accesorios",
    },
    {
        id:2,
        nombre: "Casco S-Works Variante 2",
        precio:235000,
        imagen:"./assets/product_images/accesorio2.jpg",
        descripcion:"",
        categoria: "accesorios",
    },
    {
        id:3,
        nombre: "Casco S-Works Variante 3",
        precio:200000,
        imagen:"./assets/product_images/accesorio3.jpg",
        descripcion:"",
        categoria: "accesorios",
    },
    {
        id:3,
        nombre: "Casco S-Works Variante 3",
        precio:200000,
        imagen:"./assets/product_images/accesorio4.jpg",
        descripcion:"",
        categoria: "accesorios",
    },
    {
        id:4,
        nombre: "Casco Ergonómico Genérico",
        precio:130000,
        imagen:"./assets/product_images/accesorio5.jpg",
        descripcion:"",
        categoria: "accesorios",
    },
    {
        id:5,
        nombre: "Guantes Cerrados Génericos",
        precio:45000,
        imagen:"./assets/product_images/accesorio6.jpg",
        descripcion:"",
        categoria: "accesorios",
    },
    {
        id:6,
        nombre: "Guantes Probike de Ebilla",
        precio:100000,
        imagen:"./assets/product_images/accesorio7.jpg",
        descripcion:"",
        categoria: "accesorios",
    },
    {
        id:7,
        nombre: "Guantes BKS de Ebilla",
        precio:110000,
        imagen:"./assets/product_images/accesorio7.jpg",
        descripcion:"",
        categoria: "accesorios",
    },
    {
        id:8,
        nombre: "Gafas Clásicas lentes intercambiables",
        precio:120000,
        imagen:"./assets/product_images/accesorio8.jpg",
        descripcion:"",
        categoria: "accesorios",
    },
    {
        id:9,
        nombre: "Gafas Clásicas Lentes Fotocromáticos",
        precio:120000,
        imagen:"./assets/product_images/accesorio9.jpg",
        descripcion:"",
        categoria: "accesorios",
    },
    {
        id:10,
        nombre: "Gafas Lente Oscuro West-biking",
        precio:120000,
        imagen:"./assets/product_images/accesorio10.jpg",
        descripcion:"",
        categoria: "accesorios",
    },
    {
        id:21,
        nombre: "Bicicleta Gravel Scott Syncros",
        precio:5000000,
        imagen:"./assets/product_images/gravel1.jpg",
        descripcion:"",
        categoria: "gravel",
    },
    {
        id:22,
        nombre: "Bicicleta Gravel Umarin",
        precio:5000000,
        imagen:"./assets/product_images/gravel2.jpg",
        descripcion:"",
        categoria: "gravel",
    },
    {
        id:23,
        nombre: "Bicicleta Gravel Taroko Fina",
        precio:5000000,
        imagen:"./assets/product_images/gravel3.jpg",
        descripcion:"",
        categoria: "gravel",
    },
    {
        id:24,
        nombre: "Bicicleta Gravel Bombtrack",
        precio:4500000,
        imagen:"./assets/product_images/gravel4.jpg",
        descripcion:"",
        categoria: "gravel",
    },
    {
        id:25,
        nombre: "Bicicleta Gravel Jakar",
        precio:7000000,
        imagen:"./assets/product_images/gravel5.jpg",
        descripcion:"",
        categoria: "gravel",
    },
    {
        id:26,
        nombre: "Bicicleta Gravel Scott Coster",
        precio:7000000,
        imagen:"./assets/product_images/gravel6.jpg",
        descripcion:"",
        categoria: "gravel",
    },
    {
        id:27,
        nombre: "Bicicleta Gravel Bike Racer",
        precio:9000000,
        imagen:"./assets/product_images/gravel7.jpg",
        descripcion:"",
        categoria: "gravel",
    },
]


const obtenerProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(productos)
        },2000)
    })
}

export default obtenerProductos