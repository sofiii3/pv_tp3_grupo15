import { mostrarConForEach } from "./Array.js";
import { filtrarPorPrecio } from "./Array.js";
import { precioIVA } from "./Array.js";
import { ordenarPorPrecio } from "./Array.js";
import { agregarProducto } from "./Array.js";
import { quitarProducto } from  "./Array.js";

const productos =[
    {
        descripcion: "Teclado",precio: 10
    },
    {
        descripcion: "Auriculares",precio: 45
    },
    {
        descripcion: "Memoria RAM",precio: 5
    },
    {
        descripcion: "CPU",precio:30
    },
    {
        descripcion: "Gabinete",precio:15
    }

]

// Mostrar los objetos de la array productos
//mostrarConForEach(productos);

// Mostrar los productos superiores a 20
//filtrarPorPrecio(productos);

// Mostrar productos con su precio elevado con IVA
//precioIVA(productos);

// Mostrar productos de menor a mayor usando sort
//ordenarPorPrecio(productos);

// Agrega un nuevo producto al final del array
//agregarProducto(productos);

// Quitar el producto con menor precio del array
quitarProducto(productos);