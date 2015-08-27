// setTimeout(function () {
//   console.log('im called after 1s');
// }, 1000);

// var count = 0;
// var interval = setInterval(function () {
//   if (count > 5) {
//     clearInterval(interval);
//   }
//   count++;
//   console.log('every 1s');
// }, 1000);

// function getBear (callback) {
//   setTimeout(function () {
//     console.log('got bear');
//     callback();
//   }, 3000 * Math.random());
// }
//
// function poll () {
//   getBear(function () {
//     setTimeout(poll, 1000);
//   });
// }
// poll();

var bear = new Image();
bear.src = '/bear.jpg';
bear.style.position = 'absolute';
document.body.appendChild(bear);

var delta = 0;
var amount = 50;
function draw () {
  bear.style.left = amount * Math.sin(delta) + 'px';
  delta += .1;
  requestAnimationFrame(draw);
}
draw();
