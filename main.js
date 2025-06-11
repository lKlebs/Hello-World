let nomeUsuário = prompt("Qual o seu nome?");
let elemento = document.querySelector("#nome-usuário");
elemento.textContent = nomeUsuário;

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?");
}
if(nomeUsuário == null){
    elemento.textContent = 'Seja muito bem-vindo.'; 
}else{
elemento.textContent = nomeUsuário;
}