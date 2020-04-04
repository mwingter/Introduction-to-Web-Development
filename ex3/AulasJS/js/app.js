// window.alert("Olá mundo")

//window.console.log(
//    window.document.getElementById("titulo").innerHTML
//)

//console.log(
//    window
//)

//AULA 5 - Sobre o BOM pt1
/*console.log(
    //screen
    //screen.height
    //screen.width
    //screen.orientation
    //screen.orientation.type

   //navigator
   //navigator.appname
   //navigator.language
   
   //location
   //location.href
   //location.href = "http://www.google.com"

   //history.back

)*/

//AULA 6 - Sobre o BOM pt2
/*
function voltar(){
    history.back()
}

function adiantar(){
    history.forward()
}

console.log(
    screen.width
)

alert(screen.width)

document.getElementById("largura").innerHTML = screen.width
*/

/*
console.log(
    document.getElementsByClassName("carro")[1].innerHTML
)
*/

/*
console.log(
    //document.getElementsByTagName("p")
    document.querySelector(".div2") //seleciona pela tag, id, classe, e retorna apenas o primeiro elemento, e não o collection. 
                                    //obs: se quiser pela tag, colocar ("tagname")
                                    //pela classe, coloca (".classname")
                                    //pelo id, coloca ("#idname")
)
*/

/*
console.log(
    //document.querySelectorAll(".times")
    document.getElementById("futebol-europeu").querySelectorAll(".times")[0].innerHTML
)
*/


//AULA 10 - DOM (InnerHTML, Style e Atributos)
/*var paragrafo = document.getElementById("p1");
paragrafo.innerHTML = "NOVO CONTEUDO";

//acessando estilo dos elementos
paragrafo.style.color = "red"
paragrafo.style.backgroundColor = "#333"
paragrafo.style.height = "400px" */

//acessando atributos dos elementos
/*var imagem = document.getElementById("imagem")
imagem.src = "html.jpg"
imagem.alt = "Teste de imagem"
imagem.width = "30" */

//AULA 11 - DOM (createElement)
/*var imagem = document.createElement("img")
imagem.src = "js1.png"

var paragrafo = document.createElement("p")
paragrafo.innerHTML = "Olá pessoal"

console.log(
    imagem, paragrafo
) 
*/

//AULA 12 - DOM (appendChild e removeChild)
var parag = document.createElement("p")
parag.innerHTML = "Olá pessoal!"

var img = document.createElement("img")
img.src = "html.jpg"

document.getElementById("conteudo").appendChild(parag) //appendChild serve pra inserir um elemento filho a um elemento pai
                                                        //ex: inserir o parag (filho) ao elemento div de id="conteudo" (pai)
document.getElementById("conteudo").appendChild(img)

 document.getElementById("conteudo").removeChild(parag) //removeChild serve pra remover esse elemento filho

 document.getElementById("demo").set