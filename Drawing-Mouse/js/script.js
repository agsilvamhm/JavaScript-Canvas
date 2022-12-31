let cena = document.getElementById("quadro")
let titulo = document.getElementById("titulo")
let ctx = cena.getContext("2d")

let desenhando = false

ctx.fillStyle = "rgb(255,255,255)"
ctx.fillRect(0,0, cena.clientWidth + 29 , cena.clientHeight + 13)

cena.onmousedown = function(e){
       ctx.moveTo(e.clientX, e.clientY)
       desenhando = true
 }

cena.onmouseup = function(e){
      desenhando = false
}

cena.onmousemove = function(e){
    if (desenhando) {
        ctx.strokeStyle =  "rgb(65,105,225)"
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

const lista = document.getElementById("lista")

function comparando(){
  const imageData = ctx.getImageData(0,0, cena.clientWidth, cena.clientHeight )
   
  const data = imageData.data 

  let cont = 0
  
  for (let i = 0; i < data.length; i += 4){      
      if (data[i + 1] != 255) {
          const item = document.createElement("li") 
          item.textContent = "Cores " + data[i] + " - " + data[i + 1] + " - " + data[i + 2]
          lista.appendChild(item)
          cont = cont + 1
      }

      if (cont > 300 ){
        titulo.innerHTML = "Assinado" 
       }  else {
        titulo.innerHTML = "Não assinado" 
       }
    } 
}