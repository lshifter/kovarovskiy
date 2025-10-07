$(function () {

});
let doors = document.querySelectorAll('.door'),
  doorSales = document.querySelectorAll('.door__sales'),
  door1 = document.getElementById('door__1'),
  door2 = document.getElementById('door__2'),
  door3 = document.getElementById('door__3'),
  doorSale1 = document.getElementById('door__sales1'),
  doorSale2 = document.getElementById('door__sales2'),
  doorSale3 = document.getElementById('door__sales3');
function openDoor(o) {
  o.currentTarget.classList.add('open'),
    doorSales.forEach(function (o) {
      door1.classList.contains('open')
        ? ((doorSale1.innerHTML = productSale),
          (doorSale2.innerHTML = '10%'),
          (doorSale3.innerHTML = '25%'))
        : door2.classList.contains('open')
          ? ((doorSale2.innerHTML = productSale),
            (doorSale1.innerHTML = '25%'),
            (doorSale3.innerHTML = '10%'))
          : door3.classList.contains('open') &&
          ((doorSale1.innerHTML = '10%'),
            (doorSale3.innerHTML = productSale),
            (doorSale2.innerHTML = '25%'));
    });
  for (let o = 0; o < doors.length; o++)
    doors[o].classList.contains('open') ||
      setTimeout(function () {
        doors[o].classList.add('open');
      }, 2500);
  for (let o = 0; o < doors.length; o++)
    doors[o].removeEventListener('click', openDoor);
  showResultWindow(), showForm();
}
function showResultWindow() {
  setTimeout(function () {
    $('.spin-result-wrapper').css('display', 'block');
  }, 2e3);
}
function showForm() {
  setTimeout(function () {
    $('.door__wrapper').slideUp(), $('.order_block').slideDown(), start_timer();
  }, 4e3);
}
var intr,
  time = 600;
function start_timer() {
  intr = setInterval(tick, 1e3);
}
function tick() {
  --time;
  var o = Math.floor(time / 60),
    e = time - 60 * o;
  0 == o && 0 == e && clearInterval(intr),
    (e = 10 <= e ? e : '0' + e),
    $('#min').html('0' + o),
    $('#sec').html(e);
}
doors.forEach(function (o) {
  o.addEventListener('click', openDoor);
}),
  $('.close-popup, .pop-up-button').click(function (o) {
    o.preventDefault(), $('.spin-result-wrapper').fadeOut();
    let e = $('#roulette');
    (o = (e = e || $('#order_form')).offset().top),
      $('body,html').animate({ scrollTop: o }, 800);
  })
  
