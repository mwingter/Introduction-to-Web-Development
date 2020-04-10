/*
	Aluno: Michelle Wingter da Silva
    nUSP: 10783243
*/

//ex b - Substituição do texto "Change me" por outra coisa.
window.document.getElementById("change_heading").innerHTML = "COLORFUL PAGE";

//ex c - Quando passar o mouse em cima das “caixas” um texto que diz a cor da mesma aparece.
var boxBrown = window.document.getElementsByTagName("div")[0];     
boxBrown.addEventListener('mouseenter', entrar); 
boxBrown.addEventListener('mouseout', sair);

var boxGreen = window.document.getElementsByTagName("div")[1];     
boxGreen.addEventListener('mouseenter', entrar); 
boxGreen.addEventListener('mouseout', sair);

var boxBlue = window.document.getElementsByTagName("div")[2];     
boxBlue.addEventListener('mouseenter', entrar); 
boxBlue.addEventListener('mouseout', sair);

var boxYellow = window.document.getElementsByTagName("div")[3];     
boxYellow.addEventListener('mouseenter', entrar); 
boxYellow.addEventListener('mouseout', sair);

//console.log(window.document.getElementsByTagName("div")[2].style.backgroundColor.toString())

function getStyle(element, property) {
    return window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(property) : element.style[property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })];
}
var backgroundColor = "None!";

function entrar(){
    //this.innerText = cor;
    if(this == boxBrown)        backgroundColor = "Brown!";
    else if(this == boxGreen)   backgroundColor = "Green!";
    else if(this == boxBlue)    backgroundColor = "Blue!";
    else if(this == boxYellow)  backgroundColor = "Yellow!";
    else if(this == newBox)     backgroundColor = getStyle(newBox, "background-color");
    else                        backgroundColor = "None!";

    document.querySelector(".selected").innerHTML = backgroundColor;

}

function sair(){
    document.querySelector(".selected").innerHTML = "None!";
}

//ex d - Criação de um novo elemento <div> de classe random, e um evento que faça com que a cor dessa nova “caixa” mude quando clicada
var sessao = document.querySelector("section");
var newBox = document.createElement("div");

newBox.width = "50px";
newBox.height = "50px";
newBox.display = "inline-block";
newBox.style.backgroundColor = "DeepPink";
newBox.className = "random";

sessao.appendChild(newBox); //inserindo a nova "caixa" na section
  
newBox.addEventListener('click', clicar);
newBox.addEventListener('mouseenter', entrar); 
newBox.addEventListener('mouseout', sair);

function clicar(){
    var randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6); //gera um rgb diferente cada vez que a caixa for clicada
    newBox.style.backgroundColor = randomColor;
}
