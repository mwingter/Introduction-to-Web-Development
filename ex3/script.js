/*
	Aluno: Michelle Wingter da Silva
    nUSP: 10783243
*/

//EXERCICIO 1 - Grifando palavras



//EXERCICIO 2 - Link Home
function goHome(){
    var newLink = document.createElement('a');

    var text = document.createTextNode("HOME");

    newLink.appendChild(text);

    newLink.title = "Link home";
    newLink.href = "index.html";

    document.body.appendChild(newLink);
}


//EXERCICIO 3 - Separando frases
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


// EXERCICIO 4 - Contar Palavras
function contaPalavras(){
    var paragrafo = document.getElementsByTagName("p");
    var aux = 0;

    for(var i = 0; i < paragrafo.length; i++){
        var palavra = paragrafo[0].innerHTML;
        
        palavra = palavra.replace(/(^\s*)|(\s*$)/gi,"");
        palavra = palavra.replace(/[ ]{2,}/gi," ");
        palavra = palavra.replace(/\n /,"\n");

        aux += palavra.split(' ').length;
    }

    document.body.prepend(aux + " Palavras no texto.");
}



//EXECUTANDO AS FUNÇÕES

 //ex 1

goHome(); //ex 2

separaFrases(); //ex 3

contaPalavras(); //ex 4