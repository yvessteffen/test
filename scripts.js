
window.onload = function(){
    document.getElementById("output").innerHTML = "Will you be my <br /> Valentine ?";
    document.getElementById("title").innerHTML = "Will you be my Valentine ?";
};

function changeElement(id, string){
    document.getElementById(id).innerHTML = string;
}

function clickYes(){
    document.getElementById("title").innerHTML = "Yayy! >.<";
    document.getElementById("output").remove()
    document.getElementById("gif").src = "ressources/yay.gif"
    document.getElementById("btn y","btn n").remove()
    document.getElementById("btns").innerText = "Yayy! >.<"
    document.getElementById('btns').classList.add('yes')
    document.getElementById('container').classList.add('spin')
}
