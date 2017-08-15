'use strict';

window.renderStatistics = function (ctx, names, times) {
  var max = -1;
  var i = 0;

  // coordinates and sizes
  var INITIAL_X = 120;
  var INITIAL_Y = 250;
  var BAR_WIDTH = 40;
  var HISTOGRAM_HEIGHT = 150;

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

  function getRandomBlueColor() {
    return 'rgba(0, 0, 255,' + (Math.random() * 0.9 + 0.1) + ')';
  }

  for (i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var step = HISTOGRAM_HEIGHT / max;

  ctx.textBaseline = 'bottom';

  for (i = 0; i < times.length; i++) {
    time = times[i];
    var name = names[i];

    var color = (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : getRandomBlueColor();
    ctx.fillStyle = color;
    /* INITIAL_X -- начальная координата по оси x;
    INITIAL_X + INDENT * i -- к начальной точке прибавляем значение переменной
    INDENT, умноженной на индекс элемента массива для смещения каждой последующей колонки вправо;
    INITIAL_Y -- начальная координата по оси x;
    BAR_WIDTH -- ширина колонки;
    -times * step -- для определения высоты элемента гистограммы считается пропорция, в которой
    step это результат деления 100%(histogramHeight) на максимальное значение(max), а time это время текущего игрока
    Унарный минус перед time нужен для того, чтобы увеличение  прямоугольника происходило не вниз, а вверх */
    ctx.fillRect(INITIAL_X + INDENT * i, INITIAL_Y, BAR_WIDTH, -time * step);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    /* name - имя текущего игрока;
    значение координаты по x высчитывается так же, как у колонок;
    INITIAL_Y + NAME_INDENT -- значение по оси y. Равно начальной координате колонки плюс отступ вниз; */
    ctx.fillText(name, INITIAL_X + INDENT * i, INITIAL_Y + NAME_INDENT);
    /* time.toFixed(0) - время текущего игрока, округлённое до целой части;
    значение координаты по x высчитывается так же, как у колонок;
    INITIAL_Y - time * step - TIME_INDENT -- значение по оси y. Равно начальной координате колонки с
    отступом равным высоте колонки(time * step) и дополнительным отступом от края колонки(TIME_INDENT); */
    ctx.fillText(time.toFixed(0), INITIAL_X + INDENT * i, INITIAL_Y - time * step - TIME_INDENT);
  }
};
