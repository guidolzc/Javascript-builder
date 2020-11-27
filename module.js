//MODULOS PRIVADO Y PUBLICO
const comprarBoleto = (function(){

    // PRIVADO
    let evento = 'conferncia JS 2019';
    let adquirirBoleto = () =>{
        const elemento = document.createElement('p');
        elemento.textContent = `Comprando Boleto para : ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }

    // PUBLICO si esta en publico mostrara pero no podra acceder a su  datos 
    return{
        mostrarBoleto : function(){
            adquirirBoleto();
        }
    }
     

})();

comprarBoleto.mostrarBoleto(); //  solo llama la funcion mostrar

console.log(comprarBoleto.evento); // no puede acceder al lado privado 
