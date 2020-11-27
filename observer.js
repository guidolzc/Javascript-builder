// tambien se lo conoce como suscriptor publicador
// ofertas de facebbok y udemy a eso se parece observer alertas registro 
let observer ={
    obtenerOferta : function(callback){
        if(typeof callback === "function"){
            this.subcribers[this.subcribers.length] = callback;
            

        }
    },
    cancelarOferta: function(callback){
        for(let i = 0; i<this.subcribers.length; i++){ 
            if(this.subcribers[i] === callback){ 
                delete this.subcribers[i];
            }
        }
    },
    publicarOferta : function(oferta){ 
        for(let i = 0; i<this.subcribers.length; i++){ 
            if(typeof this.subcribers[i] === 'function'){ 
             this.subcribers[i](oferta);
            } 
        } 
    },
    crear: function(objeto){ 
        for(let i in this){
            if(this.hasOwnProperty(i)){
                objeto[i] = this[i];
                objeto.subcribers = [];

            }
        }

    }
    
}
// vendedores
const udemy = { 
    nuevoCurso: function(){ 
        const curso = 'un nuevo curso de javascript';
        this.publicarOferta(curso);

    }

}

const facebook = {
    nuevoAnuncio : function(){ 
        const oferta = 'comprar un celular';
        this.publicarOferta(oferta);

    }
}

// crear publicadores

observer.crear(udemy);

observer.crear(facebook);

const guido = {
    compartir : function (oferta){
        console.log('Guido dice : Excelente oferta de '+ oferta);

    }
}
const karen = { 
    interesa : function(oferta){
        console.log('Karen dice : Me interesa la oferta de '+ oferta);
    }
}
// SUBCRITORES PUBLICADORES CANCELAR SUBcritor 

udemy.obtenerOferta( guido.compartir );
udemy.obtenerOferta( karen.interesa );
udemy.nuevoCurso();

udemy.cancelarOferta(karen.interesa);
udemy.nuevoCurso();


facebook.obtenerOferta(karen.interesa);
facebook.obtenerOferta(guido.compartir);
facebook.nuevoAnuncio();