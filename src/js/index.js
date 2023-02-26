//logica de passo sera apagada dps q estiver pronto o Projeto


//1. Quando usuario clikar no botao mostrar o quadro

//Passo 1. dar um jeito de pega elemento e coloca no js
const botaoJunte = document.querySelector('.botao-junte')

//Passo 2. identificar click no botao
botaoJunte.addEventListener('click', () => {
 //Passo 4. abrir contato na tela
contato.classList.add('aberto');});
   

//Passo 3. dar um jeito de pegar o elemento da modal no js
const contato = document.querySelector('.contato');
    
   
//2.quando usuario clikar no X fecha o aviso

//Passo 1. dar um jeito de pega elemento e coloca no js
const fecharContato = document.querySelector('.fechar-contato'); 
//2. identificar click no botao
fecharContato.addEventListener('click', ()=> {
    //Passo 3. fechar contato na tela
contato.classList.remove('aberto'); })
