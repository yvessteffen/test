window.onload = function(){
    document.getElementById("output").innerHTML = "You've been blessed <br /> with" +
        "<br /> a free raccoon hug";
    document.getElementById("title").innerHTML = "You've been blessed by a free raccoon hug";
};

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

function clickYes(){
    document.getElementById("title").innerHTML = "Yayy! >.<";
    document.getElementById("output").remove()
    document.getElementById("gif").src = "ressources/hug.jpg"
    document.getElementById("btn y","btn n").remove()
    document.getElementById("btns").innerText = "*hugs*"
    document.getElementById('btns').classList.add('yes')
    document.getElementById('container').classList.add('spin')
}

let click = 0
function clickNo(){
    document.getElementById("title").innerHTML = "Oh no! An error occured";
    document.getElementById("btn n").innerText = "Accept"
    document.getElementById("output").innerHTML = "Oh no! An error occured";
    document.getElementById("btn n").classList.add('y')
    document.getElementById("btn n").setAttribute('onClick',"clickYes()")
}