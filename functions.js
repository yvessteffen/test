let funcs = [
    remove,
    hide
]

function drop(){
    console.log("drop")
}

function remove(){
    console.log("remove")
    document.getElementById('btn n').disabled = true
    document.getElementById('btn n').classList.add('hidden')
}

function hide(){
    console.log("hide")
    document.getElementById('btn n').classList.add('hide')
    document.getElementById('btn n').disabled = true
}