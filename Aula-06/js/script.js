let canvas = document.getElementById("desenho01")
let ctx = canvas.getContext('2d')
let px = 0
let py = 0
let largura= 50
let altura = 50
let largura_canvas = 500
let altura_canvas = 500
let anima 
let direcao_x = 1
let direcao_y = 0

desenha()

function desenha(){
    ctx.clearRect(0, 0, largura_canvas, altura_canvas)
    ctx.fillStyle = '#f00'
    ctx.lineWidth=3
    ctx.stokeStyle="#000"

    ctx.fillRect(px, py, largura , altura)
    ctx.strokeRect(px, py, largura , altura)
       
    px += direcao_x
    py += direcao_y

    if ((px <= 0) && (py <= 0)){
        direcao_x = 1
        direcao_y = 0
    }

    if ((px + largura >= largura_canvas) && (py <= 0)){
        direcao_x = 0
        direcao_y = 1
    }

    if ((px + largura >= largura_canvas) && (py+ altura >= altura_canvas)){
        direcao_x = -1
        direcao_y = 0
    }

    if ((px <= 0) && (py + altura >= altura_canvas)){
        direcao_x = 0
        direcao_y = -1
    }


       
   
    anima = requestAnimationFrame(desenha)
}
