
//Loguear Usuarios
function Login(email, clave) {

          //Alerta bienvenida al iniciar sesion
          const Swal = require('sweetalert2');
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Verificando '
          })

    var datos = new FormData();
    datos.append('user', email);
    datos.append('pass', clave);
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://technicalskillsapi.000webhostapp.com/API/Users/login' , false);
    xhr.onload = function ()
    {
        if (this.status === 200) {
        }
    }
    xhr.send(datos);
    return JSON.parse(xhr.responseText);
} exports.Login = Login;
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Registrar usuario
function Registrer(nameUser, email, userName, pass) {
    var datos = new FormData();
    datos.append('nameUser', nameUser);
    datos.append('email', email);
    datos.append('userName', userName);
    datos.append('pass', pass);
    //
    var xhr = new XMLHttpRequest(); 
    xhr.open('POST', 'https://technicalskillsapi.000webhostapp.com/API/Users/create' , false);
    xhr.onload = function ()
    {
        if (this.status === 200) {
        }
    }
    xhr.send(datos);
    return JSON.parse(xhr.responseText);
} exports.Registrer = Registrer;


//******************************************************************************************************/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function editarSkills(idUser, idSkill, idState, nameSkill) {
    var datos = new FormData();
    datos.append('idUser', idUser);
    datos.append('idSkill', idSkill);
    datos.append('idState', idState);
    datos.append('nameSkill', nameSkill);
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://technicalskillsapi.000webhostapp.com/API/TS/editar' , false); 
    xhr.onload = function ()
    {
        if (this.status === 200) {
        }
    }
    xhr.send(datos);
    return JSON.parse(xhr.responseText);
} exports.editarSkills = editarSkills;
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function crearSkills(nameSkill, idUser, idState) {
    var datos = new FormData();
    datos.append('nameSkill', nameSkill);
    datos.append('idUser', idUser);
    datos.append('idState', idState);
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://technicalskillsapi.000webhostapp.com/API/TS/create' , false);
    xhr.onload = function ()
    {
        if (this.status === 200) {
        }
    }
    xhr.send(datos);
    return JSON.parse(xhr.responseText);
} exports.crearSkills = crearSkills;
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrarSkills(idUser, idState) {
    var datos = new FormData();
    datos.append('idUser', idUser);
    datos.append('idState', idState);
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://technicalskillsapi.000webhostapp.com/API/TS/mostrar' , false);
    xhr.onload = function ()
    {
        if (this.status === 200) {
        }
    }
    xhr.send(datos);
    return JSON.parse(xhr.responseText);
} exports.mostrarSkills = mostrarSkills;
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function eliminarSkills(idUser, IdSkill) {
    var datos = new FormData();
    datos.append('idUser', idUser);
    datos.append('idSkill', IdSkill);
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://technicalskillsapi.000webhostapp.com/API/TS/eliminar' , false);
    xhr.onload = function ()
    {
        if (this.status === 200) {
        }
    }
    xhr.send(datos);
    return JSON.parse(xhr.responseText);
} exports.eliminarSkills = eliminarSkills;