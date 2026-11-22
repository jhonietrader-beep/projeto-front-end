const botao = document.querySelector('.btt');
const campodig = document.getElementById('inputt');
const mostrador = document.getElementById('mostrador');
const empresa = document.getElementById('empresa');
const email = document.getElementById('email');




botao.addEventListener('click', function () {
    
   mostrador.innerText = `
    Nome: ${campodig.value}
    Empresa: ${empresa.value}
    Email: ${email.value}
`;


    console.log(
        `
    Nome: ${campodig.value}
    Empresa: ${empresa.value}
    Email: ${email.value}
`
    );
}); 
