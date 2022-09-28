const form = document.getElementById('form-A');
const numeroA = document.getElementById('numero-A');
const numeroB = document.getElementById('numero-B');
let formEValido = false;

form.addEventListener('submit',function(e) {
    e.preventDefault();
    const mensagemSucesso= `O Numero A: <b>${numeroA.value}</b> é menor que o Numero B: <b>${numeroB.value}</b>`;
    formEValido = numeroA.value<numeroB.value;
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
        containerMensagemSucesso='none';
    } 
})

numeroA.addEventListener('keyup',function(e){
    console.log(e.target.value);

    if(!formEValido) {
        numeroA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display='block';
    } else {
        numeroA.style.border='';
        document.querySelector('.error-message').style.display='none';
    }
});
numeroB.addEventListener('keyup',function(e){
    console.log(e.target.value);

    if(!formEValido) {
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message1').style.display='block';
    } else {
        numeroB.style='';
        document.querySelector('.error-message1').style.display='none';
    }
});