var box = document.getElementById("box")
var button = document.getElementById("btn")

function randomcolor(){
    var alphaNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    var color = "#"
    for (var i = 0; i < 6; i++) {

        color += alphaNum[Math.floor(Math.random() * alphaNum.length)]
        
        }

    return color
}

button.addEventListener('click', function(){
    color= randomcolor()
    box.style.backgroundColor = color
})