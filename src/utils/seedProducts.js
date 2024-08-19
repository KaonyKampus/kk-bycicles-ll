import {addDoc, collection} from "firebase/firestore"
import db from "../db/db.js";

const productos = [
    {
        id:1,
        nombre: "Casco S-Works Variante 1",
        precio:230000,
        imagen:"accesorio1.jpg",
        descripcion:"Este casco de alta gama está diseñado para ofrecer la máxima protección y comodidad tanto en rutas urbanas como en terrenos montañosos. Fabricado con una estructura ligera y resistente, incluye una innovadora tecnología de ventilación que optimiza el flujo de aire y reduce la acumulación de calor. Su sistema de ajuste preciso garantiza un fit personalizado, adaptándose a diferentes formas de cabeza para una seguridad y confort óptimos durante todo el viaje. Ideal para ciclistas que buscan un casco con características avanzadas y alto rendimiento.",
        categoria: "accesorios",
        stock: 10
    },
    {
        id:2,
        nombre: "Casco S-Works Variante 2",
        precio:235000,
        imagen:"accesorio2.jpg",
        descripcion:"Este casco combina un diseño aerodinámico con una ventilación excepcional, ideal para mantener la frescura en largos recorridos. La carcasa exterior está fabricada en policarbonato de alta resistencia, mientras que el forro interno de EPS proporciona una excelente absorción de impactos. Su sistema de ajuste micrométrico permite una personalización rápida y fácil del ajuste, garantizando la máxima seguridad. Además, su perfil estilizado y ligereza lo convierten en una opción premium para ciclistas que priorizan el rendimiento y la comodidad.",
        categoria: "accesorios",
        stock: 9
    },
    {
        id:3,
        nombre: "Casco S-Works Variante 3",
        precio:200000,
        imagen:"accesorio3.jpg",
        descripcion:"Este casco ofrece una combinación de ligereza y comodidad ideal para largas distancias. Con múltiples aberturas de ventilación estratégicamente colocadas, asegura una circulación de aire constante que previene el sobrecalentamiento durante esfuerzos intensos. El diseño ergonómico y el acolchado interior mejoran el confort, mientras que el sistema de ajuste de dial permite una adaptación precisa al tamaño de la cabeza. Perfecto para ciclistas que buscan una opción confiable y cómoda para sus recorridos.",
        categoria: "accesorios",
        stock: 5
    },
    {
        id:4,
        nombre: "Casco S-Works Variante 4",
        precio:200000,
        imagen:"accesorio4.jpg",
        descripcion:"Este casco está diseñado para ofrecer una protección robusta sin sacrificar el confort. Su carcasa exterior de policarbonato y el forro de EPS están diseñados para absorber impactos de manera eficiente. La ventilación optimizada mediante un sistema de entradas y salidas de aire proporciona una experiencia de conducción fresca y cómoda. Su ajuste fácil y seguro, junto con un diseño moderno, lo convierte en una opción ideal para ciclistas tanto de carretera como de montaña.",
        categoria: "accesorios",
        stock: 8
    },
    {
        id:6,
        nombre: "Guantes Cerrados Génericos",
        precio:45000,
        imagen:"accesorio5.jpg",
        descripcion:"Guantes diseñados para ofrecer un equilibrio perfecto entre comodidad y funcionalidad. Fabricados con materiales transpirables y de alta durabilidad, estos guantes permiten un excelente agarre al manillar, reduciendo la fatiga en las manos durante largas rutas. El acolchado estratégico en las zonas de contacto ayuda a amortiguar las vibraciones y proporciona mayor comodidad. Su diseño ergonómico y su cierre ajustable aseguran un fit seguro y personalizado.",
        categoria: "accesorios",
        stock: 10
    },
    {
        id:7,
        nombre: "Guantes Probike de Ebilla",
        precio:100000,
        imagen:"accesorio6.jpg",
        descripcion:"Estos guantes ofrecen un nivel superior de confort y protección para el ciclista. Con refuerzos en áreas clave, como la palma y los dedos, garantizan una larga durabilidad y resistencia a abrasiones. El diseño ergonómico se ajusta perfectamente a la mano, y el acolchado adicional reduce el impacto de las vibraciones en recorridos extensos. Además, su sistema de cierre de velcro proporciona un ajuste preciso y seguro, haciendo de estos guantes una excelente opción para cualquier tipo de ciclismo.",
        categoria: "accesorios",
        stock: 15
    },
    {
        id:8,
        nombre: "Guantes BKS de Ebilla",
        precio:110000,
        imagen:"accesorio7.jpg",
        descripcion:"Guantes con un diseño ergonómico que proporciona un ajuste perfecto y cómodo. Están fabricados con materiales de alta calidad que ofrecen una excelente transpiración y un agarre seguro al manillar. El acolchado en las zonas de impacto ayuda a reducir la fatiga en las manos durante rutas largas, mientras que el cierre ajustable en la muñeca asegura un fit personalizado. Ideal para ciclistas que buscan comodidad y funcionalidad en sus guantes.",
        categoria: "accesorios",
        stock: 25
    },
    {
        id:9,
        nombre: "Gafas Clásicas lentes intercambiables",
        precio:120000,
        imagen:"accesorio8.jpg",
        descripcion:"Estas gafas cuentan con lentes intercambiables que permiten adaptar la visión a diferentes condiciones de luz. El marco ligero y resistente está diseñado para proporcionar un ajuste cómodo y seguro, mientras que las lentes de alta calidad ofrecen una protección UV completa. Su diseño envolvente minimiza el ingreso de viento y polvo, garantizando una visión clara y sin obstrucciones. Perfectas para ciclistas que necesitan flexibilidad y protección en sus rutas.",
        categoria: "accesorios",
        stock: 2
    },
    {
        id:10,
        nombre: "Gafas Clásicas Lentes Fotocromáticos",
        precio:120000,
        imagen:"accesorio9.jpg",
        descripcion:"Gafas avanzadas con lentes fotocromáticos que se adaptan automáticamente a los cambios en la iluminación. El marco está fabricado para ofrecer un ajuste ligero y ergonómico, mientras que las lentes fotocromáticas aseguran una visibilidad óptima en diversas condiciones de luz. Su diseño envolvente proporciona una protección completa contra el viento y el polvo, haciendo de estas gafas una opción ideal para ciclistas que buscan versatilidad y protección.",
        categoria: "accesorios",
        stock: 3
    },
    {
        id:11,
        nombre: "Gafas Lente Oscuro West-biking",
        precio:120000,
        imagen:"accesorio10.jpg",
        descripcion:"Estas gafas están diseñadas para ofrecer una protección completa contra la luz solar intensa. Con lentes oscuros de alta calidad, garantizan una visión clara y sin reflejos, mientras que el marco ligero asegura un ajuste cómodo durante largos recorridos. Su diseño envolvente ayuda a proteger los ojos del viento y el polvo, haciendo de estas gafas una excelente opción para ciclistas que enfrentan condiciones soleadas y exigentes.",
        categoria: "accesorios",
        stock: 7
    },
    {
        id:21,
        nombre: "Bicicleta Gravel Scott Syncros",
        precio:5000000,
        imagen:"gravel1.jpg",
        descripcion:"La Scott Syncros es una bicicleta Gravel de alta gama diseñada para afrontar cualquier desafío en terrenos variados. Su cuadro de aluminio ligero está optimizado para resistir el desgaste de rutas irregulares, mientras que la horquilla de carbono reduce las vibraciones y mejora el confort. Equipado con una transmisión Shimano GRX 1x11, ofrece cambios rápidos y precisos, mientras que los frenos de disco hidráulicos garantizan una potencia de frenado excepcional en todas las condiciones meteorológicas. Ideal para aventureros que buscan rendimiento y fiabilidad en sus rutas.",
        categoria: "gravel",
        stock: 2
    },
    {
        id:22,
        nombre: "Bicicleta Gravel Umarin",
        precio:5000000,
        imagen:"gravel2.jpg",
        descripcion:"La Umarin es una bicicleta Gravel robusta y versátil, diseñada para ciclistas que buscan durabilidad y comodidad en terrenos mixtos. Su cuadro de carbono no solo reduce el peso, sino que también mejora la absorción de impactos. Equipado con una transmisión SRAM Apex 1x11, garantiza cambios suaves y precisos, mientras que los frenos de disco hidráulicos Shimano ofrecen una frenada eficiente y segura. La geometría de la bicicleta está pensada para largas distancias, proporcionando una experiencia de conducción estable y cómoda.",
        categoria: "gravel",
        stock: 22
    },
    {
        id:23,
        nombre: "Bicicleta Gravel Taroko Fina",
        precio:5000000,
        imagen:"gravel3.jpg",
        descripcion:"La Taroko Fina combina estilo y funcionalidad para una experiencia de ciclismo excepcional. Su cuadro de aluminio ligero está diseñado para ofrecer una combinación ideal de resistencia y agilidad, mientras que la horquilla de carbono mejora la absorción de vibraciones en terrenos irregulares. La transmisión Shimano 105 2x11 permite cambios precisos y fiables, y los frenos de disco hidráulicos aseguran una frenada potente y controlada. Es la opción perfecta para quienes buscan una bicicleta que ofrezca tanto rendimiento como confort en rutas variadas.",
        categoria: "gravel",
        stock: 17
    },
    {
        id:24,
        nombre: "Bicicleta Gravel Bombtrack",
        precio:4500000,
        imagen:"gravel4.jpg",
        descripcion:"La Bombtrack es una bicicleta Gravel diseñada para aventuras en terrenos exigentes. Su cuadro de acero ofrece una resistencia superior y una sensación de confort en rutas largas, mientras que la horquilla de acero proporciona estabilidad y absorción de impactos. Equipado con una transmisión Shimano Tiagra 2x10 y frenos de disco mecánicos, garantiza un rendimiento fiable en cualquier condición. La geometría de la bicicleta está optimizada para el confort y la durabilidad en rutas desafiantes.",
        categoria: "gravel",
        stock: 5
    },
    {
        id:25,
        nombre: "Bicicleta Gw Vortex",
        precio:1000000,
        imagen:"montana1.jpg",
        descripcion:"La Gw Vortex está diseñada para enfrentar terrenos difíciles con confianza. Su cuadro de acero robusto y la suspensión delantera básica aseguran durabilidad y un manejo estable. Equipado con una transmisión Shimano Tourney 3x7, ofrece una gama de velocidades adecuada para superar obstáculos y pendientes. Los frenos de disco mecánicos proporcionan una frenada confiable en diversas condiciones, haciendo de esta bicicleta una opción sólida para ciclistas de montaña.",
        categoria: "montana",
        stock: 19
    },
    {
        id:26,
        nombre: "Bicicleta Gw Vulcan",
        precio:1200000,
        imagen:"montana2.jpg",
        descripcion:"La Gw Vulcan es ideal para quienes buscan una bicicleta de montaña con un diseño resistente y cómodo. Su cuadro de aluminio ligero y la suspensión delantera SR Suntour con 80 mm de recorrido aseguran una conducción suave en terrenos irregulares. La transmisión Shimano Altus 3x8 proporciona cambios precisos y fiables, mientras que los frenos de disco hidráulicos garantizan un control de frenada superior. Perfecta para ciclistas que necesitan un equilibrio entre rendimiento y durabilidad.",
        categoria: "montana",
        stock: 4
    },
    {
        id:27,
        nombre: "Bicicleta Gw Vortex PRO",
        precio:1500000,
        imagen:"montana3.jpg",
        descripcion:"La Gw Vortex PRO está construida para los ciclistas de montaña que buscan rendimiento y resistencia. Su cuadro de aluminio y la suspensión delantera ajustable con 100 mm de recorrido permiten una conducción cómoda y estable en terrenos difíciles. La transmisión Shimano Deore 2x10 asegura cambios precisos y una amplia gama de velocidades, mientras que los frenos de disco hidráulicos proporcionan una frenada potente y controlada. Ideal para rutas exigentes y aventuras en la montaña.",
        categoria: "montana",
        stock: 22
    },
    {
        id:34,
        nombre: "Bicicleta Gw Pantera",
        precio:1800000,
        imagen:"montana4.jpg",
        descripcion:"La Gw Pantera ofrece un diseño robusto y componentes de alta calidad para afrontar cualquier terreno. Su cuadro de aluminio y la suspensión delantera SR Suntour con 100 mm de recorrido proporcionan un manejo cómodo y eficaz. Equipado con una transmisión Shimano Alivio 3x9, permite cambios suaves y precisos, mientras que los frenos de disco mecánicos garantizan un rendimiento confiable. Ideal para ciclistas que buscan una bicicleta todo terreno con una excelente relación calidad-precio.",
        categoria: "montana",
        stock: 6
    },
    {
        id:35,
        nombre: "Bicicleta Gw Vartit",
        precio:1900000,
        imagen:"montana5.jpg",
        descripcion:"La Gw Vartit es ideal para enfrentarse a terrenos difíciles y variados. Su suspensión delantera ajustable permite adaptarse a diferentes tipos de terreno, mientras que el cuadro de aluminio garantiza resistencia y durabilidad. Equipado con una transmisión Shimano Acera 2x9 y frenos de disco hidráulicos, ofrece cambios precisos y una potente frenada. Esta bicicleta está diseñada para proporcionar una experiencia de conducción superior en rutas exigentes y montañosas.",
        categoria: "montana",
        stock: 8
    },
    {
        id:36,
        nombre: "Bicicleta Gw Ociat",
        precio:1000000,
        imagen:"montana6.jpg",
        descripcion:"La Gw Ociat combina un diseño moderno con componentes fiables para una experiencia de conducción estable. Su cuadro de aluminio y la suspensión delantera Zoom permiten un manejo cómodo en terrenos variados. La transmisión Shimano Altus 3x8 ofrece una amplia gama de velocidades, mientras que los frenos de disco mecánicos aseguran una frenada confiable. Perfecta para ciclistas que buscan una bicicleta versátil y duradera para aventuras en montaña.",
        categoria: "montana",
        stock: 1
    },
    {
        id:52,
        nombre: "Bicicleta Gw K2 Freno disco",
        precio:2500000,
        imagen:"ruta2.jpg",
        descripcion:"La Gw K2 es una bicicleta de ruta avanzada equipada con frenos de disco para una frenada precisa y segura en cualquier condición meteorológica. Su cuadro de aluminio ligero y resistente proporciona un excelente equilibrio entre peso y durabilidad, mientras que la transmisión Shimano Sora 2x9 asegura cambios suaves y rápidos. La geometría optimizada y la capacidad de absorción de impactos del cuadro permiten una conducción cómoda en rutas largas. Ideal para ciclistas que buscan fiabilidad y rendimiento en sus trayectos.",
        categoria: "ruta",
        stock: 1
    },
    {
        id:53,
        nombre: "Bicicleta Specialized Carbon",
        precio:1000000,
        imagen:"ruta3.jpg",
        descripcion:"La Specialized Carbon es una bicicleta de ruta de alto rendimiento diseñada para ciclistas exigentes. Su cuadro de carbono ligero y resistente ofrece una excelente absorción de vibraciones y un peso reducido, ideal para largas distancias. Equipado con un grupo Shimano Tiagra 2x10, proporciona cambios precisos y fiables, mientras que los frenos de disco mecánicos garantizan una frenada eficiente en diversas condiciones. Su diseño aerodinámico y su confort superior la hacen perfecta para competiciones y entrenamientos serios.",
        categoria: "ruta",
        stock: 7
    },
    {
        id:54,
        nombre: "Bicicleta Specialized Venturais",
        precio:2000000,
        imagen:"ruta4.jpg",
        descripcion:"La Specialized Venturais ofrece un rendimiento excepcional para ciclistas de ruta que buscan eficiencia y confort. Su cuadro de aluminio y la horquilla de carbono proporcionan una combinación ideal de rigidez y ligereza, permitiendo una conducción ágil y precisa. Equipado con una transmisión Shimano 105 2x11 y frenos de disco hidráulicos, garantiza cambios suaves y una frenada potente. Su diseño ergonómico asegura comodidad en rutas largas, haciendo de esta bicicleta una opción premium para entusiastas del ciclismo.",
        categoria: "ruta",
        stock: 11
    },
    {
        id:55,
        nombre: "Bicicleta Specialized E-green",
        precio:1200000,
        imagen:"ruta5.jpg",
        descripcion:"La Specialized E-green es una bicicleta ecológica que combina rendimiento y sostenibilidad. Su cuadro de aluminio reciclado y la horquilla de carbono ofrecen una excelente relación peso-rigidez, proporcionando una conducción estable y cómoda. Equipado con un grupo Shimano Claris 2x8, asegura cambios precisos y una transmisión eficiente. Los frenos de disco mecánicos ofrecen una frenada confiable, mientras que el diseño ecológico destaca por su compromiso con el medio ambiente. Ideal para ciclistas que valoran la sostenibilidad sin comprometer el rendimiento.",
        categoria: "ruta",
        stock: 5
    },
    {
        id:56,
        nombre: "Bicicleta Specialized Advanter",
        precio:1000000,
        imagen:"ruta6.jpg",
        descripcion:"La Specialized Advanter está diseñada para ciclistas que buscan una bicicleta de ruta con un rendimiento equilibrado. Su cuadro de aluminio hidroformado y la horquilla de carbono garantizan una conducción ágil y precisa, mientras que la transmisión Shimano Sora 2x9 proporciona cambios rápidos y fiables. Los frenos de disco mecánicos ofrecen una frenada segura en diversas condiciones climáticas. Su diseño aerodinámico y sus componentes de calidad hacen de esta bicicleta una opción destacada para quienes buscan velocidad y control en sus recorridos.",
        categoria: "ruta",
        stock: 4
    },
    {
        id:57,
        nombre: "Bicicleta Specialized E-green II",
        precio:1500000,
        imagen:"ruta7.jpg",
        descripcion:"La Specialized E-green II es una bicicleta de ruta mejorada que ofrece un rendimiento superior y un gran confort. Su cuadro de aluminio y la horquilla de carbono proporcionan una conducción suave y estable, reduciendo las vibraciones en terrenos irregulares. Equipado con una transmisión Shimano Tiagra 2x10 y frenos de disco hidráulicos, garantiza cambios precisos y una frenada potente. Ideal para ciclistas comprometidos con el medio ambiente que buscan un producto de alta calidad con un rendimiento excepcional.",
        categoria: "ruta",
        stock: 4
    },
    {
        id:58,
        nombre: "Bicicleta Trek Alpha",
        precio:2200000,
        imagen:"ruta8.jpg",
        descripcion:"La Trek Alpha es una bicicleta de ruta de alta gama diseñada para ofrecer una relación peso-rendimiento excepcional. Su cuadro de aluminio Alpha 100 Series y la horquilla de carbono aseguran una conducción ligera y eficiente, perfecta para largas distancias. Equipado con una transmisión Shimano 105 2x11 y frenos de disco hidráulicos, proporciona cambios rápidos y una frenada potente. Ideal para ciclistas que buscan una bicicleta con excelente rendimiento y fiabilidad en sus rutas más exigentes.",
        categoria: "ruta",
        stock: 1
    },
    {
        id:59,
        nombre: "Bicicleta Treck Aluminium",
        precio:700000,
        imagen:"ruta9.jpg",
        descripcion:"La Treck Aluminium es una bicicleta de entrada ideal para quienes están comenzando en el ciclismo de ruta. Su cuadro de aluminio proporciona ligereza y durabilidad, mientras que la horquilla de acero ofrece una conducción cómoda y estable. Equipado con una transmisión Shimano Tourney 3x7 y frenos de disco mecánicos, asegura una experiencia de conducción confiable. Perfecta para ciclistas que buscan una bicicleta económica y de buen rendimiento para sus primeras experiencias en ruta.",
        categoria: "ruta",
        stock: 3
    },
    {
        id:60,
        nombre: "Bicicleta Orbea Classic",
        precio:20000000,
        imagen:"ruta10.jpg",
        descripcion:"La Orbea Classic es una bicicleta de ruta de lujo que combina elegancia y tecnología avanzada. Su cuadro de carbono de alta gama y la horquilla de carbono proporcionan una excelente absorción de vibraciones y una conducción extremadamente ligera. Equipado con un grupo Shimano Dura-Ace 2x11 y frenos de disco hidráulicos, garantiza un rendimiento de primera clase en términos de cambios y frenada. Su diseño refinado y sus componentes de alta calidad la hacen una opción premium para ciclistas que buscan lo mejor en confort y rendimiento.",
        categoria: "ruta",
        stock: 5
    },
    {
        id:61,
        nombre: "Bicicleta Orbea Mountain",
        precio:1100000,
        imagen:"ruta11.jpg",
        descripcion:"La Orbea Mountain es una bicicleta de montaña robusta y confiable, diseñada para enfrentar terrenos difíciles con facilidad. Su cuadro de aluminio y la suspensión delantera con 80 mm de recorrido ofrecen una conducción estable y cómoda. La transmisión Shimano Altus 3x9 proporciona una amplia gama de velocidades para superar cualquier obstáculo, mientras que los frenos de disco mecánicos garantizan una frenada segura en descensos y rutas técnicas. Ideal para ciclistas que buscan durabilidad y versatilidad en sus aventuras montañesas.",
        categoria: "ruta",
        stock:15
    }
];


const seedProducts =  () =>{
    productos.map(({id, ...rest})=>{
        const productosRef = collection(db,"productos")
        addDoc(productosRef, rest)
    })
}


seedProducts()