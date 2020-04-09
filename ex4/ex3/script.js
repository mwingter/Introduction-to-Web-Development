/*
	Aluno: Michelle Wingter da Silva
    nUSP: 10783243
*/

var p = document.getElementsByTagName("p")[0].innerHTML; //salvando o texto no formato original para usar depois

var button = document.createElement("button"); //criando um elemento de botão
button.innerText = "G R I F A R !";
button.style.backgroundColor = "red";

document.body.appendChild(button); //inserindo o botão no corpo da body

button.addEventListener('click', grifaTexto);


//######## Funções do EXERCICIO 1 - Grifando palavras ########

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



