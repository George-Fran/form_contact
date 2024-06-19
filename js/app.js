let boton = document.getElementById('boton');
boton.addEventListener('click', () => {
    let error = document.querySelectorAll('.error');
    let errora = document.querySelector('.errora');
    let errorR = document.querySelector('.error-radio');
    let formulario = document.forms['formulario'];
    let name = formulario['name'];
    let lastName = formulario['lname'];
    let email = formulario['email'];
    let message = formulario['message'];
    let general = formulario['general'];
    let support = formulario['support'];
    let permitir = formulario['permitir'];
    error.forEach((error, id) => {
        switch (id) {
            case 0:
                if (name.value === '') {
                    error.innerHTML = 'This field is required';
                }
                break;
            case 1:
                if (lastName.value === '') {
                    error.innerHTML = 'This field is required';
                }
                break;
            case 2:
                if (email.value === '') {
                    error.innerHTML = 'This field is required';
                }
                else if (!email.value.includes('@')) {
                    errora.innerHTML = 'Please enter a valid email address';
                }
                break;
            case 3:
                if (message.value === '') {
                    error.innerHTML = 'This field is required';
                }
                break;
            case 4:
                if (!permitir.checked) {
                    error.innerHTML = 'To submit this form, please consent to being contacted';
                }
                break;
            default:
                break;
        }
    });

    if (!general.checked && !support.checked) {
        errorR.innerHTML = 'Please select a query type';
    }

});