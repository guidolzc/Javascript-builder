class Formulario {
    constructor(){
        this.campos = []
    }
    agregarCampo(tipo, texto){
        let campos = this.campos;

        let campo;
        
        switch(tipo){
            case "text":
                campo = new InputText (texto);
                break;
            case "email":
                campo = new InputEmail (texto);
                break;
            case "button":
                campo = new Boton (texto);
                break;
            default:
                throw new Error("tipo no valido"+ tipo);

        }
        campos.push(campo);
    }
    obtenerFormulario(){
        let form = document.createElement('form'),
        campos = this.campos.length,
        campo;

        for(let i=0 ;i<campos; i++){
        campo = this.campos[i]
        form.appendChild(campo.crearElemento());
        let br = document.createElement('br');
        form.appendChild(br);
        }
        return form;
    }
     
    
}
class Inputs{
    constructor(texto){
        this.texto = texto;
    }
}

class InputText extends Inputs {
     constructor (texto){
         super(texto);

     }
     crearElemento() {
         const InputText = document.createElement('input');
         InputText.setAttribute('type','text');
         InputText.setAttribute('placeholder', this.texto);
         return InputText;
     }
}
class InputEmail extends Inputs {
    constructor (texto){
        super(texto);

    }
    crearElemento() {
        const InputEmail = document.createElement('input');
        InputEmail.setAttribute('type','Email');
        InputEmail.setAttribute('placeholder', this.texto);
        return InputEmail;
    }
}
class Boton extends Inputs {
    constructor (texto){
        super(texto);

    }
    crearElemento() {
        const button = document.createElement('button');
        button.setAttribute('type', 'submit');
        button.textContent = this.texto;
        return button;
    }
}

// instanciar formulario
const formulario = new Formulario();

formulario.agregarCampo('text', 'añade tu nombre');

formulario.agregarCampo('text', 'añade tu apellido');

formulario.agregarCampo('email', 'añade tu correo');


formulario.agregarCampo('button', 'Enviar Formulario');

// rederizar en el html

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#app').appendChild(formulario.obtenerFormulario())
});


console.log(formulario);