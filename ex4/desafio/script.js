/*
	Aluno: Michelle Wingter da Silva
    nUSP: 10783243
*/

//Função que faz cada número aparecer na telinha
function apareceNaTela(n){
    document.form.textView.value = document.form.textView.value + n; //assim, salvamos na tela uma string da equação que queremos fazer
}

//Função que calcula o cálculo da equação salva na telinha
function calcResult(){
    var equation = document.form.textView.value;
    if(equation){
        document.form.textView.value = eval(equation);
    }
}

//Função do botão 'C'
function apaga(){
    document.form.textView.value = "";
}

//Função do botão 'CE'
function volta(){
    var exp = document.form.textView.value; //salva a equação atual (que ta na telinha)
    document.form.textView.value = exp.substring(0, exp.length-1) //volta a equação para um estado anterior
}





