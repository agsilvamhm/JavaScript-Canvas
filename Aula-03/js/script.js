let canvas = document.getElementById("desenho01")
let ctx = canvas.getContext('2d')

let px = 50
let py = 50

ctx.moveTo(0,0)
ctx.lineTo(250, 250)
ctx.lineTo(400, 250)
ctx.lineTo(400, 100)
ctx.moveTo(250, 250)
ctx.lineTo(200, 300)
ctx.stroke()