window.onload = function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var img = new Image();
  img.src = 'cara.jpg';

  var w, h, offset, glitchInterval; //dynamic assigments
  
  img.onload = function() {
    init();
    window.onresize = init;
  }

  var init = function() {
    clearInterval(glitchInterval); //remover el intervalo anterior
    canvas.width = w = img.width + 30;
    offset = w * .1; //offset de un 10% del ancho
    canvas.height = h  = img.height;
    
    glitchInterval = setInterval(function() {
      clear();
      context.drawImage(img, -60, 0, img.width, img.height, -30, 0, w, h);
      setTimeout(glitchImg, randInt(250, 1000));
    }, 500);
  };

  var glitchImg = function() {
    for (var i = 0; i < randInt(1, 13); i++) {
      var x = Math.random() * w;
      var y = Math.random() * h;
      var spliceWidth = w - x;
      var spliceHeight = randInt(5, h / 3);
      context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
      context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
    }
  };

  var clear = function() {
    context.rect(0, 0, w, h);
    context.fill();
  };

  var randInt = function(a, b) {
    return Math.floor((Math.random() * (b - a) + a));
  };
}



