// FACTORY / CREA OBJETOS CON DISTINTOS TIPOS DE DATOS SEPARADOS 


function ConstrutorSitios(){
    this.crearElemento = function(texto, tipo){
        let html;
        if(tipo === 'input'){
            html = new InputHTML(texto);

        }else if(tipo === 'img'){
            html = new ImagenHTML(texto);

        }else if ( tipo ==='h1'){
            html = new HeadingHTML(texto);

        }else if (tipo === 'p'){
            html= new ParrafoHTML(texto);
        }

        html.tipo = tipo;
        html.mostrar = function() {
            const elemento = document.createElement(this.tipo);

            if(this.tipo === 'input'){
                elemento.setAttribute('placeholder', this.texto);

            }else if(this.tipo === 'img'){
                elemento.setAttribute('src', this.texto);
                
            }else {
                elemento.appendChild(document.createTextNode(this.texto));
            }

            document.querySelector('#app').appendChild(elemento);
        }    
        return html;
    }
}
const InputHTML = function (texto){
    this.texto = texto;

}
const ImagenHTML = function (texto){
    this.texto = texto;

}
const HeadingHTML = function (texto){
    this.texto = texto;

}
const ParrafoHTML = function (texto){
    this.texto = texto;

}
const sitioweb = new ConstrutorSitios();

// almacenar los elementos
const elementosWeb = [];

elementosWeb.push( sitioweb.crearElemento('Bienvenidos','h1'));
elementosWeb.push( sitioweb.crearElemento('Bienvenidosa a mi nuevo sitio web','p'));
elementosWeb.push( sitioweb.crearElemento('logo.svg','img'));
elementosWeb.push( sitioweb.crearElemento('conoce mas sobre nosotros','input'));
elementosWeb.push( sitioweb.crearElemento('contactanos en el formulario','h1'));

//console.log(elementosWeb);

elementosWeb.forEach(elemento =>{
    elemento.mostrar();
})