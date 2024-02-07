
window.onload = function(){
    let myVariable = "Will you be my Valentine ?";
    document.getElementById("output").innerHTML = myVariable;
    document.getElementById("title").innerHTML = myVariable;
};

function changeElement(id, string){
    document.getElementById(id).innerHTML = string;
}

function clickYes(){
    document.getElementById("output").remove()
    document.getElementById("gif").src = "ressources/yay.gif"
    document.getElementById("btn y","btn n").remove()
    document.getElementById("btns").innerText = "Yayy! >.<"
    document.getElementById('btns').classList.add('yes')
    document.getElementById('container').classList.add('spin')
}
