let cena = document.getElementById("quadro")
let lista = document.getElementById("lista")

let ctx = cena.getContext("2d")

let desenhando = false

ctx.fillStyle = "rgb(255,255,255)"
ctx.fillRect(0,0, cena.clientWidth , cena.clientHeight)

ctx.fillStyle= "rgb(255,0,0)"

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
    const imagem = document.createElement('a')
    imagem.download = 'download.png'
    imagem.href =  quadro.toDataURL('image/jpeg', 0.5);
    imagem.click()
    imagem.delete
}

function comparando(){
  const imageData = ctx.getImageData(0,0, cena.clientWidth, cena.clientHeight )
   
  const data = imageData.data 
  
  for (let i = 0; i < data.length; i += 4){      
      if (data[i + 1] != 255) {
  //      console.log(data[i],data[i+1])
      }
}

}