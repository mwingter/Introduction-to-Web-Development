/*
	Aluno: Michelle Wingter da Silva
    nUSP: 10783243
*/

//var button = document.querySelectorAll(".button"); //temos 17 botões [0~16]
var button = document.getElementsByTagName("table")[0]; //temos 17 botões

//button.addEventListener("click", clicar);
/*
button[0].addEventListener("click", clicar); //0 - botão C
button[1].addEventListener("click", clicar); //0 - botão C
button[2].addEventListener("click", clicar); //0 - botão C
button[3].addEventListener("click", clicar); //0 - botão C
button[4].addEventListener("click", clicar); //0 - botão C
button[5].addEventListener("click", clicar); //0 - botão C
button[6].addEventListener("click", clicar); //0 - botão C
button[7].addEventListener("click", clicar); //0 - botão C
*/

//console.log(table.rows[4].cells[0])


//Função que faz cada número aparecer na telinha
function apareceNaTela(n){
    document.form.textView.value = document.form.textView.value + n; //assim, salvamos na tela uma string da equação que queremos fazer
}

//função que calcula o cálculo da equação salva na telinha
function calcResult(){
    var equation = document.form.textView.value;
    if(equation){
        document.form.textView.value = eval(equation);
    }
}

function apaga(){
    document.form.textView.value = "";
}





