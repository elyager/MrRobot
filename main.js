  let $canvas = document.getElementById('canvas');
  let $context = $canvas.getContext('2d');
  let img = new Image();
  img.src = 'cara.jpg';

  let w, h, offset, glitchInterval;

  img.addEventListener('load', () => {
    init();
    window.addEventListener('resize', init);
  });

  function init() {
    clearInterval(glitchInterval); //remover el intervalo anterior
    $canvas.width = w = img.width + 30;
    offset = w * .1; //offset de un 10% del ancho
    $canvas.height = h = img.height;

    glitchInterval = setInterval(() => {
      clear();
      $context.drawImage(img, -60, 0, img.width, img.height, -30, 0, w, h);
      setTimeout(glitchImg, randInt(250, 1000));
    }, 300);
  }

  function glitchImg() {
    for (let i = 0; i < randInt(1, 13); i++) {
      let x = Math.random() * w;
      let y = Math.random() * h;
      let spliceWidth = w - x;
      let spliceHeight = randInt(5, h / 3);
      $context.drawImage($canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
      $context.drawImage($canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
    }
  }

  function clear() {
    $context.rect(0, 0, w, h);
    $context.fill();
  }

  function randInt(min, max) {
    return Math.floor((Math.random() * (max - min) + min));
  }
