const canvas = document.createElement("canvas")
canvas.width = 1052
canvas.height = 360
const renderingContext = canvas.getContext("2d")

document.body.appendChild(canvas)

const image = new Image

image.onload = function(){
    grayScale()//
}

image.src="./imagem/imagem_522_357.jpg"

const grayScale = function(){
    renderingContext.drawImage(image, 0, 0) // Coloca a imgem no Canvas na posição 0 0
    const imageData = renderingContext.getImageData(0, 0, image.width, image.height)

    const data = imageData.data
    const bytesPorPixel = 4

 //   renderingContext.putImageData(imageData, 300, 0)
    //console.log(imageData.data.length)
    // value = (0.21 * R) + (0.72 * G) + (0.07 * B)

    for (let i = 0; i < data.length; i += bytesPorPixel){      
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const value = (0.21 * r) + (0.72 * g) + (0.07 * b)
        data[i] = value
        data[i + 1] = value
        data[i + 2] = value
    }
    renderingContext.putImageData(imageData, 530, 0)//
}

//const canvas = document.createElement("canvas");
//canvas.width = 600;
//canvas.height = 400;
//const renderingContext = canvas.getContext("2d");
//document.body.appendChild(canvas);

//const image = new Image;
//image.onload = function () {
//    grayscale();
//};
//image.src = "./imagem/rgb.jpg";

//const grayscale = function () {
 //   renderingContext.drawImage(image, 0, 0);
 //  const imageData = renderingContext.getImageData(0, 0, image.width, image.height);
 //   const data = imageData.data;
 //   const bytesPerPixel = 4;
    // value = 0.21 * r + 0.72 * g + 0.07 * b
 //   for (let i = 0; i < data.length; i += bytesPerPixel) {
 //      const r = data[i];
  //     const g = data[i + 1];
  //     const b = data[i + 2];
  //     const value = 0.21 * r + 0.72 * g + 0.07 * b
   //    data[i] = value
    //   data[i + 1] = value
     //  data[i + 2] = value
   // }
   // renderingContext.putImageData(imageData, 300, 0)
//}
