/*
	Aluno: Michelle Wingter da Silva
    nUSP: 10783243
*/

//####### Ex a - Usando como servidor o GET do List <resourse> 
var nameList = []; //lista com nome das cores
var rgbList = []; //lista com código rgb das cores

fetch('https://reqres.in/api/unknown?page=1') //pegando a primeira página
.then(function(response){
    //console.log(response);
    return response.json();
})
.then(function(response){
    console.log(response.vagas); //response.data retorna um array
    //como é um array, tenho q fazer um loop pra ir um a um inserindo os dados dentro do html
    response.vagas.forEach(function(user){
        nameList.push(user.name);
        rgbList.push(user.color);
    })
})

fetch('https://reqres.in/api/unknown?page=2') //pegando a segunda página
.then(function(response){
    //console.log(response);
    return response.json();
})
.then(function(response){
    console.log(response.data); //response.data retorna um array
    //como é um array, tenho q fazer um loop pra ir um a um inserindo os dados dentro do html
    response.data.forEach(function(user){
        nameList.push(user.name);
        rgbList.push(user.color);
    })
})

//####### Ex b - criação de um elemento de “caixa” de cor preta, com um texto dentro que informa o HEX e o nome dessa cor.
var box = document.createElement("div");
box.style.backgroundColor = "black";
box.style.height = "200px";
box.style.width = "200px";
box.style.color = "white";
box.style.paddingRight = "20px";
box.style.textAlign = "right"

var text1 = document.createElement("p");
var text2 = document.createElement("p");
text1.innerText = "#000";
text2.innerText = "black";
text1.style.margin = "0";
text2.style.margin = "0";

box.appendChild(text1);
box.appendChild(text2);


//####### Ex c - Criação de um botão na página, que irá trocar a cor da “caixa” do ec b para os valores que receber do servidor.
var button = document.createElement("button");
button.innerText = "Change Color";
button.style.color = "purple";
button.style.backgroundColor = "plum";
button.style.marginLeft = "60px";
button.style.marginTop = "5px";
button.style.borderRadius = "9px"
button.style.height = "35px"

document.body.appendChild(box);
document.body.appendChild(button);

button.addEventListener("click", clicar); //adicionando evento ao botão

function clicar(){
    var randomNumber = Math.floor(Math.random() * (nameList.length)); //cada vez que clicar, gera um número entre 1 e o número de cores disponíveis no servidor
    //console.log(nameList.length, randomNumber, nameList[randomNumber]);

    if(nameList.length > 0){
        box.style.backgroundColor = rgbList[randomNumber]
        //console.log(box.style.backgroundColor, nameList[randomNumber], typeof(nameList[randomNumber]));

        text1.innerText = rgbList[randomNumber];
        text2.innerText = nameList[randomNumber];
    }
}
