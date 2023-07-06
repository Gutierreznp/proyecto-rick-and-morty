export default function validation(input){
    const error = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regPassword = new RegExp('[0-9]');

    if(!regexEmail.test(input.email)) {
        error.email = 'Debe ingresar un email valido!'
    }
    if(!input.email) {
        error.email = 'Debe ingresar un email!'
    }
    if(input.email.length > 35) {
        error.email = 'Debe tener menos de 35 caracteres!'
    }
    if(!regPassword.test(input.password)) {
        error.password = 'La contraseña debe contener al menos 1 numero'
    }
    if(input.password.length < 6 || input.password.length > 10) {
        error.password = 'Contraseña entre 6 y 10 caracteres'
    }
    return error;
}