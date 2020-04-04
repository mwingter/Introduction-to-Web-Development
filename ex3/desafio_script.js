/*
	Aluno: Michelle Wingter da Silva
    nUSP: 10783243
*/

// Ex 1 - Mude o style da tag <body> para outro tipo de fonte. 
document.body.style.fontFamily = "Arial";


// Ex 2 - Substitua os <span> (nickname, favorites, hometown) com as informações de algum personagem.
document.getElementById("nickname").innerHTML = "Midoriya Izuku";
document.getElementById("favorites").innerHTML = "Super heroes";
document.getElementById("hometown").innerHTML = "Musutafu, Japan";


// Ex 3 - Crie um novo elemento img e coloque uma imagem do personagem escolhido. E acrescente o elemento na página.
var img = document.createElement("img");
img.src = "mid.jpg"

document.body.appendChild(img);