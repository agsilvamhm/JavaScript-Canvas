let canvas = document.getElementById("desenho01")
let ctx = canvas.getContext('2d')

let px = 50
let py = 50

ctx.fillStyle = "#00f"
ctx.rect(px, py, 200, 200)
ctx.fill()

ctx.clearRect(50,50,100,100)