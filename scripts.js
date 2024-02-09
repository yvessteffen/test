window.onload = function(){
    document.getElementById("output").innerHTML = "Will you be my <br /> Valentine ?";
    document.getElementById("title").innerHTML = "Will you be my Valentine ?";
};

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
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

let click = 0
function clickNo(){
    if (click == 0) {
        click++
        document.getElementById("title").innerHTML = "Sure ? :(";
        document.getElementById("btn n").innerText = "Sure ? :("
        document.getElementById("output").innerHTML = "Sure ? :(";
    }
    else funcs[Math.floor(Math.random() * funcs.length)]();
}