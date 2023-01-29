let canvas = document.getElementById("desenho01")
let ctx = canvas.getContext('2d')
let px = 0
let py = 0
let anima 

desenha()

function desenha(){
    ctx.clearRect(0, 0, 500, 500)
    ctx.fillStyle = '#f00'
    ctx.fillRect(px, py, 50 , 50)
       
    px ++
    anima = requestAnimationFrame(desenha())
}
