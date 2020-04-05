/*
	Aluno: Michelle Wingter da Silva
    nUSP: 10783243
*/

var p = document.getElementsByTagName("p")[0].innerHTML; //salvando o texto no formato original para usar depois

//######## EXERCICIO 1 - Grifando palavras ########

function ehLetra(char) {
    return (char.match(/[a-z]/i) || char == '-'); //é letra se for entre a-z ou se for o caracter '-'
}

function grifaTexto() {
    var texto = document.getElementsByTagName("body")[0];

    var grifarRosa = "<span style='background-color: Pink;'>";
    var grifarAzul = "<span style='background-color: Cyan;'>";
    var grifarRoxo = "<span style='background-color: #D8BFD8;'>";
    var grifarPos = "</span>";
    
    var wordSize = 0; //variavel para salvar o tamanho da palavra atual

    for (var i = 0; i < texto.innerHTML.length; i++) {

        if (wordSize >= 8 && !(ehLetra(texto.innerHTML[i]))) { //se palavra tem 8+ char, grifar de ROSA
           //adicionando as tags de span entre a palavra
            texto.innerHTML = texto.innerHTML.substring(0, i - wordSize) //texto até a palavra a ser grifada
                                    + grifarRosa + texto.innerHTML.substring(i - wordSize, i) //grifando a palavra
                                    + grifarPos + texto.innerHTML.substring(i); //texto depois da palavra até o fim

            i += (grifarRosa.length + grifarPos.length); //soma o tamanho da tag span colocada entre a palavra ao numero de caracteres do texto
            wordSize = 0; //tamanho da palavra é zerado para ir para a próxima
            continue;
        }

        if (wordSize == 6 && !(ehLetra(texto.innerHTML[i]))) { //se paravra tem 6 char, grifar de AZUL

            texto.innerHTML = texto.innerHTML.substring(0, i - wordSize) 
                                    + grifarAzul + texto.innerHTML.substring(i - wordSize, i) + grifarPos 
                                    + texto.innerHTML.substring(i); 

            i += (grifarAzul.length + grifarPos.length);
            wordSize = 0;
            continue;

        }

        if ((wordSize == 4 || wordSize == 5) && !(ehLetra(texto.innerHTML[i]))) { //se palavra tem 4 ou 5 char, grifar de ROXO

            texto.innerHTML = texto.innerHTML.substring(0, i - wordSize) 
                                    + grifarRoxo + texto.innerHTML.substring(i - wordSize, i) + grifarPos 
                                    + texto.innerHTML.substring(i); 

            i += (grifarRoxo.length + grifarPos.length);
            wordSize = 0;
            continue;

        }


         if (texto.innerHTML[i] == '<') { //se o char atual for '<', significa que é uma tag, então vamos pular essa tag
            wordSize = 0; //zera o tamanho de palavra pra ir pra proxima palavra

            while (texto.innerHTML[i] != '>' && i < texto.innerHTML.length)
                i++;

            continue;
        }

        if (ehLetra(texto.innerHTML[i])){
            wordSize++; //se for letra, incrementa o tamanho da palavra
        }          
        else{
            wordSize = 0; //se não for letra, zera o tamanho da palavra
        }
            
    }

}

grifaTexto();


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
            if(paragrafo[i].innerHTML[j] === '.' || paragrafo[i].innerHTML[j] === '?' || paragrafo[i].innerHTML[j] === '!'){
                paragrafo[i].innerHTML = paragrafo[i].innerHTML.substring(0, j + 2) + br + paragrafo[i].innerHTML.substring(j + 2);
                j += br.length + 1;
            }

            if(paragrafo[i].innerHTML[j] == '<'){
                while(paragrafo[i].innerHTML[j] != '>' && i < paragrafo[i].innerHTML.length){
                    j++;
                }
                continue;
            }
        }
    }
}

separaFrases();


// ######## EXERCICIO 4 - Contar Palavras ########
function contaPalavras(paragrafo){

        var nWords = paragrafo;
        
        nWords = nWords.replace(/(^\s*)|(\s*$)/gi,"");
        nWords = nWords.replace(/[ ]{2,}/gi," ");
        nWords = nWords.replace(/\n /,"\n");

        nWords = nWords.split(' ').length;

        document.body.prepend(nWords + " Palavras no texto.");
}


contaPalavras(p); //chamando a função com p paragrafo salvo no inicio do código
