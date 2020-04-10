/*
	Aluno: Michelle Wingter da Silva
    nUSP: 10783243
*/

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





