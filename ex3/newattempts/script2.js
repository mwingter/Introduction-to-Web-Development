/*
	Aluno: Michelle Wingter da Silva
    nUSP: 10783243
*/

//######## EXERCICIO 1 - Grifando palavras ########
function grifaParalvras(){
    //var titulo = document.getElementsByTagName("h1")[0];
    var texto = document.getElementsByTagName("body")[0].innerHTML;

    var wordsInTitle = contaPalavras("h1"); //numero de palavras no titulo
    var wordsInText = contaPalavras("p"); //numero de palavras no texto

    var grifarRosa = "<span style='background-color: pink;'>";
    var grifarAzul = "<span style='background-color: blue;'>";
    var grifarRoxo = "<span style='background-color: purple;'>";
    var grifarPos = "</span>";



    for(var i = 0; i < wordsInTitle+wordsInText; i++){
        if(texto.innerHTML.length >= 8){ //grifar de ROSA se a palavra tem 8+ char 
            texto.innerHTML = texto.innerHTML.substring(0, i - texto.innerHTML.lenght)
            + grifarRosa + texto.innerHTML.substring(i - texto.innerHTML.lenght, i)
            + grifarPos + texto.innerHTML.substring(i);
           // grifarRosa + titulo.innerHTML + grifarPos;
        }
       /* if(titulo[i].innerHTML.length == 6){ //grifar de AZUL se a palavra tem 6 char 

        }
        if(titulo[i].innerHTML.length == 4 || titulo[i].innerHTML.length == 5 ){ //grifar de ROXO se a palavra tem 8+ char 

        }*/
    }

}
console.log(contaPalavras("h1") + contaPalavras("p"));

//grifaParalvras();

function findWords(str){
    var parag = document.getElementsByTagName("body")[0];
  var array1 = str.match(/\w[a-z]{0,}/gi);

  var grifarRosa = "<span style='background-color: pink;'>";
  var grifarAzul = "<span style='background-color: blue;'>";
  var grifarRoxo = "<span style='background-color: purple;'>";
  var grifarPos = "</span>";

  for(var x = 1 ; x < array1.length ; x++)
  {
    if( array1[x].length > 7)
    {
        array1[x] = grifarRosa + array1[x] + grifarPos;
        parag[x] = array1[x];
    } 
  }
  return parag;
}
var texto = document.getElementsByTagName("body")[0].innerHTML;
//console.log(findWords(texto));

document.getElementsByTagName("body").innerHTML = findWords(texto);
//findWords(texto);




//######## EXERCICIO 2 - Link Home ########
function goHome(){
    var newLink = document.createElement('a');

    var text = document.createTextNode("HOME");

    newLink.appendChild(text);

    newLink.title = "Link home";
    newLink.href = "index.html";

    document.body.appendChild(newLink);
}

goHome();


//######## EXERCICIO 3 - Separando frases ########
function separaFrases(){
    var paragrafo = document.getElementsByTagName("p");
    var br = "</br>";

    for(var i = 0; i < paragrafo.length; i++){ //loop de 0 até o numero de strings no texto
        for(var j = 0; j < paragrafo[i].innerHTML.length; j++){ //loop de 0 até o numero de letras em cada string
            if( paragrafo[i].innerHTML[j] === ';' || paragrafo[i].innerHTML[j] === '.' || paragrafo[i].innerHTML[j] === '?' || paragrafo[i].innerHTML[j] === '!'){
                paragrafo[i].innerHTML = paragrafo[i].innerHTML.substring(0, j + 2) + br + paragrafo[i].innerHTML.substring(j + 2);
                j += br.length + 1;
            }
        }
    }
}

separaFrases();


// ######## EXERCICIO 4 - Contar Palavras ########
function contaPalavras(tag){
    var paragrafo = document.getElementsByTagName(tag);
    var nWords = 0;

    for(var i = 0; i < paragrafo.length; i++){
        var palavra = paragrafo[0].innerHTML;
        
        palavra = palavra.replace(/(^\s*)|(\s*$)/gi,"");
        palavra = palavra.replace(/[ ]{2,}/gi," ");
        palavra = palavra.replace(/\n /,"\n");

        nWords += palavra.split(' ').length;
    }

    return nWords;
}

function ex4(){
    document.body.prepend(contaPalavras("p") + " Palavras no texto.");
}

ex4();
