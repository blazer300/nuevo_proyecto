//Creo la clase alumno
class alumno{
constructor(nombre,email,password){
this.nombre = nombre
this.email = email
this.password = password
}



}

//Defino todas las variables globales que necesito para trabajar con el DOM

let arrayAlumnos = []
let miFormulario = document.querySelector("#formulario")
let inputNombre = document.querySelector("#iNombre")

let nombreI = formulario.children[1].value
let emailI = formulario.children[3].value
let passwordI = formulario.children[5].value

let contenedor = document.querySelector("#alumnoIngresado")
let displayTodos = document.querySelector("#displayTodos")
let parrafos = displayTodos.getElementsByTagName("p")
let bandera = false

//Defino los eventos de ambos botones
miFormulario.addEventListener("sumbit" , agregarAlumnos)
btnMostrar.addEventListener('click' , MostrarTodosAlumnos)

//Pongo en focus el primer input

inputNombre.focus()

//Funcion para comprobar el ingreso de datos en inputs

function validarForm(){

    nombreI= formulario.children[1].value
    emailI = formulario.children[3].value
    passwordI= formulario.children[5].value
    console.log(nombreI)
    console.log(emailI)
    console.log(passwordI)

    if(nombreI == ' ' || emailI == '' || passwordI == ''){

        alert('ERROR - Debe completar todos los campos para continuar')
        inputNombre.focus()
        bandera=false
        }else{
            bandera = true
        }
        
    }


//Funcion para agregar alumnos al array de alumnos

function agregarAlumnos(e){
e.preventDefault()
validarForm()
if(bandera == true){
    let opcion = confirm("Esta seguro de agregar el alumno?")
    if( opcion == true){
    let formulario = e.target
    arrayAlumnos.push(new Alumno(nombreI,emailI,passwordI))
    }else{
        alert('No se agregara el usuario')        
    }
    formulario.children[1].value = ''
    formulario.children[3].value = ''
    formulario.children[5].value = ''
    contenedor.innerHTML = ''
    AgregarAlDom()
    inputNombre.focus()
    }else{
    inputNombre.focus()
        
    
    }
}

//Funcion para Mostrar en DOM el ultimo alumno ingresado

function AgregarAlDom(){
    contenedor.innerHTML = `<h3>Ultimo alumno Ingresado:</h3>
    <p><strong> Nombre: </strong>${nombreI}</p>
    <p><strong> Email: </strong>${emailI}</p>
    <p><strong> Password: </strong>${passwordI}</p>
    <hr>`
}

//funcion para mostrar proceduralmente todos los alumnos en un div en DOM

function MostrarTodosAlumnos(e){
    e.preventDefault()
    let i = 0
    displayTodos.innerHTML = '<h3> Listado de todos los Alumnos:</h3>'
    for (const alumno of arrayAlumnos){

        displayTodos.innerHTML += `
        <p><strong> Nombre: </strong> ${alumno.nombre}</p>
        <p><strong> Email:</strong>${alumno.email}</p>
        <p><strong Password:</strong>${alumno.password}</p>
        <hr>`
    }
}







