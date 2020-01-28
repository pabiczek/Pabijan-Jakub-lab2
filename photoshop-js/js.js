document.addEventListener('DOMContentLoaded', appStart)

let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d');

let isDrawing;
let lastPoint;

function appStart(){

document
.querySelector('#darken')
.addEventListener('click', () => darkenFilter())

document
.querySelector('#brightness')
.addEventListener('click', () => brightness())

document
    .querySelector('#blur')
    .addEventListener('click', () => blurFilter())

document
    .querySelector('#contrastAdd')
    .addEventListener('click', () => contrastFilterAdd())

document
    .querySelector('#bw')
    .addEventListener('click', () => blackwhite())

document
    .querySelector('#loader')
    .addEventListener('change', createImage, false)

document
    .querySelector('#clearCanvas')
    .addEventListener('click', () => clearThis())

document
    .querySelector('#paintColor')
    .addEventListener('change', function(e){
        strokeColor = e.target.value;
    })
    
}

function createImage(e) {
    let fileReader = new FileReader();

    fileReader.onload = function(e) {
        let image = new Image();
        image.onload = function() {
            ctx.drawImage(image, 0 , 0, canvas.width, canvas.height);
        }
        image.src = e.target.result;
    }
    fileReader.readAsDataURL(e.target.files[0]);

}


function brightness (amount = 7){
    const canvasData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    for(let i = 0; i < canvasData.data.length; i+=4) {

        canvasData.data[i] += amount
        canvasData.data[i+1] += amount
        canvasData.data[i+2] += amount

    }
    ctx.putImageData(canvasData, 0, 0)
}

function darkenFilter (amount = 7){
    const canvasData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    for(let i = 0; i < canvasData.data.length; i+=4) {

        canvasData.data[i] -= amount
        canvasData.data[i+1] -= amount
        canvasData.data[i+2] -= amount

    }
    ctx.putImageData(canvasData, 0, 0)
}


function contrastFilterAdd (amount = 7) {
    const canvasData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    let contrast = (amount/100)+1;
    let int = 128*(1-contrast);

    for (let i = 0; i < canvasData.data.length; i += 4) {
      canvasData.data[i] = canvasData.data[i]*contrast+int;
      canvasData.data[i + 1] = canvasData.data[i+1]*contrast+int;
      canvasData.data[i + 2] = canvasData.data[i+2]*contrast+int;
    }
    ctx.putImageData(canvasData, 0, 0)
  }



function blackwhite(){
    const canvasData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < canvasData.data.length; i+= 4) {
    let avg = (canvasData.data[i] + canvasData.data[i + 1] + canvasData.data[i + 2]) / 3
        canvasData.data[i]     = avg
        canvasData.data[i + 1] = avg
        canvasData.data[i + 2] = avg
    }
    ctx.putImageData(canvasData, 0, 0);
} 


function blurFilter() {
    const canvasData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    for( let i = 0; i < canvasData.data.length; i+=4) {        
      canvasData.data[i] = (canvasData.data[i] + canvasData.data[i+4])/2
      canvasData.data[i+1] = (canvasData.data[i+1] + canvasData.data[i+5])/2
      canvasData.data[i+2] = (canvasData.data[i+2] + canvasData.data[i+6])/2
    }
    ctx.putImageData(canvasData, 0, 0)
  }


function clearThis() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }


  
canvas.onmousedown = function(e) {
  isDrawing = true;
  lastPoint = getMousePos(canvas, e);
};
let strokeSize = 1;
let strokeColor = "black";
canvas.onmousemove = function(e) {
  let pos = getMousePos(canvas,e);
  console.log(pos)
  if (!isDrawing) return;

  ctx.beginPath();

  ctx.lineWidth = strokeSize;
  ctx.strokeStyle = strokeColor;
  
  ctx.moveTo(lastPoint.x, lastPoint.y);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
    
  lastPoint = pos;
};

canvas.onmouseup = function() {
  isDrawing = false;
};

function  getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect(),
      scaleX = canvas.width / rect.width,    
      scaleY = canvas.height / rect.height;  

  return {
    x: (evt.clientX - rect.left) * scaleX,   
    y: (evt.clientY - rect.top) * scaleY    
  }
}
