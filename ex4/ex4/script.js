var box = document.createElement("div");
box.style.backgroundColor = "black";
box.style.height = "200px";
box.style.width = "200px";
box.style.color = "white";
box.style.paddingRight = "20px";
box.style.textAlign = "right"



var text1 = document.createElement("p");
var text2 = document.createElement("p");
text1.innerText = "#000";
text2.innerText = "black";
text1.style.margin = "0";
text2.style.margin = "0";


box.appendChild(text1);
box.appendChild(text2);

var button = document.createElement("button");
button.innerText = "Change Color";
button.style.color = "purple";
button.style.backgroundColor = "plum";
button.style.marginLeft = "60px";
button.style.marginTop = "5px";
button.style.borderRadius = "9px"
button.style.height = "35px"

document.body.appendChild(box);
document.body.appendChild(button);

button.addEventListener("click", clicar);

function clicar(){
    button.innerText = "clicou"
}
