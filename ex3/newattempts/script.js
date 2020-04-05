/*
	Aluno: Michelle Wingter da Silva
    nUSP: 10783243
*/

//######## EXERCICIO 1 - Grifando palavras ########

//is letter(c)
//(c.match(/[a-z]/i) || c == '-')


function grifaParalvras(){
    //var titulo = document.getElementsByTagName("h1")[0];
    var texto = document.getElementsByTagName("body")[0];

    var wordSize = 0; //tamanho das palavras

    var grifarRosa = "<span style='background-color: pink;'>";
    var grifarAzul = "<span style='background-color: blue;'>";
    var grifarRoxo = "<span style='background-color: purple;'>";
    var grifarPos = "</span>";

    var regex = /[a-z]/i;

    for(var i = 0; i < texto.innerHTML.length; i++){

        //console.log(texto);
        
        if(wordSize >= 8 && !(texto.innerHTML[i].match(regex) || texto.innerHTML[i] == '-')){ //se o tamanho da palavra for maior que 8 letras e a última não for uma letra
           
            

            //adicionando as tags de span entre a palavra
            texto.innerHTML = texto.innerHTML.substring(0, i - wordSize) + grifarRosa + texto.innerHTML.substring(i - wordSize, i) + grifarPos + texto.innerHTML.substring(i);

            i += (grifarRosa.lenght + grifarPos.length); //adicionando o tamanho da tag adicionada no numero de caracteres do texto (i)
            wordSize = 0; //zera o tamanho da palavra pra ir pra próxima

            continue;
        }
       


        if (texto.innerHTML[i] == '<') {
            wordSize = 0; //zera o contador

            //avança até o fechamento da tag
            while (texto.innerHTML[i] != '>' && i < texto.innerHTML.length){
                i++;
            }
            
            continue;
        }


        if(texto.innerHTML[i].match(regex) || texto.innerHTML[i] == '-'){
            wordSize++; //se for letra, incrementa o tamanho da palavra
        }
        else{
            wordSize = 0; //se não for letra, zera o tamanho da palavra
        }
    }

}
//console.log(contaPalavras("h1") + contaPalavras("p"));

grifaParalvras();




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
