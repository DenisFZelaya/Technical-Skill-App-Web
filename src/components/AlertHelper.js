

function alertError(mensaje) {
    const Swal = require('sweetalert2')
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: mensaje
    })
}exports.alertError = alertError;


function alertExito(title) {
    const Swal = require('sweetalert2')
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: title,
        showConfirmButton: false,
        timer: 1500
    })
}exports.alertExito = alertExito;
