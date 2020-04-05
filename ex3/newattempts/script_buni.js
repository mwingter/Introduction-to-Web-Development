/*
    Aluno: Michelle Wingter da Silva
    nUSP: 10783243
*/

var p = document.getElementsByTagName("p")[0].innerHTML; //salvando o texto no formato original para usar depois


function findWords2(str){

var titulo = document.getElementsByTagName("h1")[0].innerHTML
texto2 = findWords3(titulo);

  texto2 += "<p>";
 
    // Gambiarra porque a merda do javascript não tem replaceALL e usar regex com os parametros como ! e , é muito dificil
  str = str.split(',').join("DELIMITER,");
  str = str.split("!").join("DELIMITER!");
  str = str.split(":").join("DELIMITER:");
  str = str.split(" ").join("DELIMITER ");
  str = str.split('"').join('DELIMITER"');
  str = str.split(".").join("DELIMITER.");
  str = str.split(";").join("DELIMITER;");
  str = str.split("'").join("DELIMITER'");
 
  //console.log(str);
  var array1 =  str.split("DELIMITER");
  console.log(array1);

  var grifarRosa ='<span style="background-color: pink">';
  var grifarAzul = "<span style='background-color: blue;'>";
  var grifarRoxo = "<span style='background-color: purple;'>";
  var grifarPos = "</span>";
  var size = 0;
  var aux = "";
  for(var x = 0 ; x < array1.length ; x++)
  {
size = array1[x].length;
if( size > 7)
    {
        texto2+= " " + grifarRosa+array1[x].trim()+grifarPos;

    }
else{
texto2+=array1[x];
}
  }
 texto2 += "</p>";
 
  return texto2;
}

function findWords3(str){
  var texto2 = "<h1>";
 

  str = str.split(',').join("DELIMITER,");
  str = str.split("!").join("DELIMITER!");
  str = str.split(":").join("DELIMITER:");
  str = str.split(" ").join("DELIMITER ");
  str = str.split('"').join('DELIMITER"');
  str = str.split(".").join("DELIMITER.");
  str = str.split(";").join("DELIMITER;");
  str = str.split("'").join("DELIMITER'");
 
  //console.log(str);
  var array1 =  str.split("DELIMITER");
  console.log(array1);

  var grifarRosa ='<span style="background-color: pink">';
  var grifarAzul = "<span style='background-color: blue;'>";
  var grifarRoxo = "<span style='background-color: purple;'>";
  var grifarPos = "</span>";
  var size = 0;
  var aux = "";
  for(var x = 0 ; x < array1.length ; x++)
  {
size = array1[x].length;
if( size > 7)
    {
        texto2+= " " + grifarRosa+array1[x].trim()+grifarPos;

    }
else{
texto2+=array1[x];
}
  }
 texto2 += "</h1>";
  return texto2;
}


var texto = document.getElementsByTagName("p")[0].innerHTML;

document.getElementsByTagName("body")[0].innerHTML = findWords2(texto);


//document.getElementsByTagName("p")[0].innerHTML = findWords(texto);


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