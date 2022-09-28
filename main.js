const form = document.getElementById('form-A');
const numeroA = document.getElementById('numero-A');
const numeroB = document.getElementById('numero-B');
let formEValido = false;

function validaNumero (numeroA,numeroB){
    return numeroA < numeroB;
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    const mensagemSucesso= `O Numero A: <b>${numeroA.value}</b> é menor que o Numero B: <b>${numeroB.value}</b>`;

    formEValido = validaNumero(numeroA.value,numeroB.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display ='block';

        numeroA.value='';
        numeroB.value='';

    } else {
        numeroA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display='block';

        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message1').style.display ='block';
    }
})

numeroA.addEventListener('keyup',function(e) {
    console.log(e.target.value);
    formEValido = validaNumero(e.target.value);})

numeroB.addEventListener('keyup',function(e) {
    console.log(e.target.value);
    formEValido = validaNumero(e.target.value);

    if (!formEValido) {
        numeroA.classList.add('error');
        document.querySelector('.error-message').style.display ='block';

        numeroB.classList.add('error');
        document.querySelector('.error-message').style.display ='block';
        
    } else {
        numeroA.classList.remove('error');
        document.querySelector('.error-message').style.display ='none';

        numeroB.classList.remove('error');
        document.querySelector('.error-message').style.display ='none';
    }

});
