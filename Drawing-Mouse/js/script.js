let cena = document.getElementById("quadro")
let cena2 = document.getElementById("quadro2")

let ctx = cena.getContext("2d")

let desenhando = false

cena.onmousedown = function(e){
       ctx.moveTo(e.clientX, e.clientY)
       desenhando = true
 }

cena.onmouseup = function(e){
      desenhando = false
}

cena.onmousemove = function(e){
    if (desenhando) {
        ctx.strokeStyle = "red"
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
    }
 }

function copiarImagem()
{
    cena2 = cena   

}