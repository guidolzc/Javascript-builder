
const restaurApp = {};
restaurApp.platillos= [
    {
        platillo: 'pizza',
        precio: 25,
    },
    {
        platillo: 'hamburguesa',
        precio: 20,

    },
    {
        platillo: 'hot dog',
        precio : 15,
    },

];

// funciones
restaurApp.funciones = {
    ordenar: id =>{
        console.log(`Tu platillo : ${restaurApp.platillos [id].platillo} se esta preparando`);

    },
    agregarPlatillo : (platillo, precio)=> {
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo);
    },
    mostrarMenu:platillos =>{
        console.log(`bienvenido a nuestro menu : `);
        platillos.forEach((platillo, index)=>{
            console.log(`${index} : ${platillo.platillo} $ ${platillo.precio}`)
        });
    }
}


console.log(restaurApp);
const{ platillos} = restaurApp;
restaurApp.funciones.mostrarMenu( platillos);
restaurApp.funciones.ordenar(0);


restaurApp.funciones.agregarPlatillo('pastel', 15);
restaurApp.funciones.mostrarMenu(platillos);