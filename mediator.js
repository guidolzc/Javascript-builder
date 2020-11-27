const Vendedor = function(nombre){
    this.nombre = nombre;
    this.sala = null;

}
const Comprador = function(nombre){
    this.nombre = nombre;
}

Vendedor.prototype = {
    oferta: function(articulo, precio){
        console.log(`Tenemos el siguiente articulo ${articulo} iniciamos en ${precio}`);
    },
    vendido: function(Comprador){
        console.log(`vendido a ${Comprador}(sonido de mazo)`);

    }

}
Comprador.prototype = {
    oferta:function (mensaje, comprador) {

        console.log(`${comprador.nombre} : ${mensaje}`);
    }
}

// aqui VEMOS MODULE privado o publico 
const Subasta = function (){
    let compradores = {};

    return{
        registrar: function(usuario){
            compradores [usuario.nombre] = usuario;
            usuario.sala = this;
            console.log(compradores);
        }
    }

}

const juan = new Comprador('Juan');
const pablo = new Comprador ('Pablo');
const karen = new Comprador('karen');

const vendedor = new Vendedor ('Vendedor');

const subasta = new Subasta();
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(karen);

console.log(subasta);

// aqui podemos dividir como una sala de chat
const subasta2 = new Subasta();
subasta2.registrar(juan);
;


console.log(subasta2);