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
    let image = new Image();
    let dataUrl = quadro.toDataURL('image/jpeg', 1.0);

    const imagem = document.createElement('a')
    imagem.download = 'download.png'
    imagem.href =  quadro.toDataURL('image/jpeg', 0.5);
    imagem.click()
    imagem.delete
}

function comparando(){
    
}