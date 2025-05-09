// mostrar los objetos del array productos con forEach
export const mostrarConForEach = (productos) => {
    productos.forEach(({descripcion,precio}) => {
        console.log(`
            Descripcion: ${descripcion}
            Precio: $${precio}`);
    })
}

// filtrar los productos cuyo precio sea mayor a $20, usando filter
export const filtrarPorPrecio = (productos) => {
    const productosPorPrecio = productos.filter(prod => prod.precio > 20);
    console.log(productosPorPrecio);
}

//crear un array con los precios de los productos con el IVA
export const precioIVA = (productos) => {
    const precioConIVA = productos.map(produ =>({
        descripcion: produ.descripcion,
        precioConIVA: produ.precio * 1.21 // aplica el 21% de IVA
    }));
    console.log(precioConIVA);
}

// Ordenar el array original de productos por precio de menor a mayor usando sort
export const ordenarPorPrecio = (productos) => {
    productos.sort((a, b) => a.precio - b.precio);
    console.log(productos);
};

export const agregarProducto = (productos) => {
    productos.push({
        descripcion: "Parlante Bluetooth", precio: 60 
    });
    console.log(productos);
};

export const quitarProducto = (productos) => {
    const menorPrecio = Math.min(...productos.map(p => p.precio));

    const indice = productos.findIndex(p => p.precio === menorPrecio);

    if (indice !== -1) {
        productos.splice(indice, 1);
    }
    console.log(productos)
};