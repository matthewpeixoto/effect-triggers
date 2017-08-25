$('.btn-show-hide').on('click', function () {
  $('.box').toggleClass('js-show-hide');
});

$('.btn-move').on('click', function () {
  $('.diamond').toggleClass('js-move');
});

$('.btn-collapse-expand').on('click', function () {
  $('.panel').toggleClass('js-collapse-expand');
});

$('.btn-bounce').on('click', function () {
  $('.circle').addClass('js-bounce');
});

$('.circle').on('animationend', function () {
  $('.circle').removeClass('js-bounce');
});
