'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '14px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);

  var max = -1;
  var barWidht = 40;
  var indent = 90;
  var initialX = 120;
  var initialY = 250;
  var nameIndent = 20;
  var timeIndent = 5;
  var startAlpha = 0.4;

  ctx.textBaseline = 'bottom';
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }

    var histogramHeight = 150;
    var step = histogramHeight / max;
    var name = names[i];
    var decimal = i / 10;

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + (startAlpha + decimal) + ')';
    }

    ctx.fillRect(initialX + indent * i, initialY, barWidht, -times[i] * step);
    ctx.fillStyle = '#000000';
    ctx.fillText(name, initialX + indent * i, initialY + nameIndent);
    ctx.fillText(time.toFixed(0), initialX + indent * i, initialY - times[i] * step - timeIndent);
  }
};
