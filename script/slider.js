var imagenes = [];
imagenes[0] = '../res/dron1.png';
imagenes[1] = '../res/dron2.jpg';
imagenes[2] = '../res/dron3.jpg';
let i = 0;
function changeImg() {
  document.sl.src = imagenes[i];
  if(i < 2) {
    i++;
  } else i = 0;
}
setInterval(changeImg, 3000);
