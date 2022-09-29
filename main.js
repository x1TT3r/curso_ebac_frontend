const form = document.getElementById('form-A');
const numeroA = document.getElementById('numero-A');
const numeroB = document.getElementById('numero-B');
let formEValido = false;

form.addEventListener('submit',function(e) {
    e.preventDefault();
    const mensagemSucesso= `O Numero A: <b>${numeroA.valueAsNumber}</b> é menor que o Numero B: <b>${numeroB.valueAsNumber}</b>`;
    formEValido = numeroA.valueAsNumber<numeroB.valueAsNumber;
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display ='block';
        numeroA.value='';
        numeroB.value='';
        numeroA.style = ' ';
        document.querySelector('.error-message').style.display='none';
        numeroB.style = ' ';
        document.querySelector('.error-message1').style.display ='none';
    } else {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display ='none';
        numeroA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display='block';
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message1').style.display ='block';
    } 
})
