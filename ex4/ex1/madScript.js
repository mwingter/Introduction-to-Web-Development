/* 
Michelle Wingter da Silva, 10783243
*/

//ex a
var button = window.document.getElementById("lib-button");
var div = window.document.getElementById("story");

button.addEventListener('click', makeMadTalk);

//ex b
function makeMadTalk(){
    
    var noun = window.document.getElementById("noun").value; //pronome
    var adj = window.document.getElementById("adjective").value; //adjetivo
    var name = window.document.getElementById("person").value; //nome

    div.innerText = `${name} loves ${adj} ${noun} `;
    //ex: "Johnny loves scary movies"
}

