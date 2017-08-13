'use strict';

window.renderStatistics = function (ctx, names, times) {
  var max = -1;

  // coordinates and sizes
  var INITIAL_X = 120;
  var INITIAL_Y = 250;
  var BAR_WIDTH = 40;

  // indents
  var INDENT = 90;
  var NAME_INDENT = 20;
  var TIME_INDENT = 5;

  // shadow rectangle
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // white rectangle
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, 420, 270);

  // text
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '14px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);

  function generateColor() {
    var color = (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255,' + (Math.random()) + ')';
    return color;
  }

  ctx.textBaseline = 'bottom';
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    var name = names[i];
    var histogramHeight = 150;

    if (time > max) {
      max = time;
    }

    var step = histogramHeight / max;

    ctx.fillStyle = generateColor();
    ctx.fillRect(INITIAL_X + INDENT * i, INITIAL_Y, BAR_WIDTH, -times[i] * step);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(name, INITIAL_X + INDENT * i, INITIAL_Y + NAME_INDENT);
    ctx.fillText(time.toFixed(0), INITIAL_X + INDENT * i, INITIAL_Y - times[i] * step - TIME_INDENT);
  }
};
