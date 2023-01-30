let canvas = document.getElementById("desenho01")
let ctx = canvas.getContext('2d')
let px = 0
let py = 10
let largura= 50
let altura = 50
let largura_canvas = 500
let altura_canvas = 500
let anima 
let direcao_x = 1

desenha()

function desenha(){
    ctx.clearRect(0, 0, largura_canvas, altura_canvas)
    ctx.fillStyle = '#f00'
    ctx.fillRect(px, py, largura , altura)
       
    px = px + direcao_x

    if (((px + largura) >= largura_canvas) || (px <= 0)) direcao_x *= -1
    
    anima = requestAnimationFrame(desenha)

}
