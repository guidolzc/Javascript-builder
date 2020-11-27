//SINGLETON ESTAN TODOS UNIDOS A UNA SOLA INSTANCIA O OBJETO como una CONEXIÓN 
// si tu conexión es sigleton entoces todos están podemos depender de el pedir datos atravez de el

const alumnos = {
    // todos los alumnos 
    listaAlumnos : [],

    //obtener un alumno

    get: function(id){
        console.log(id);
        return this.listaAlumnos[id];
    },

    // crear un alumno
    crear: function(datos){
        console.log(datos);
        this.listaAlumnos.push(datos);
    },

    //listar todos los alumnos
    listado: function(){
        return this.listaAlumnos;
    }

}

const infoAlumno = {
    nombre : 'juan',
    edad : 20 

}
const infoAlumno2 = {
    nombre : 'pablo',
    edad: 22
}
alumnos.crear(infoAlumno); 
alumnos.crear(infoAlumno2); 

const listado = alumnos.listado();
console.log(listado);

const alumno = alumnos.get(1);
console.log(alumno);