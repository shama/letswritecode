// var request = new XMLHttpRequest();
//
// request.onreadystatechange = function () {
//   if (request.readyState === 4) {
//     if (request.status === 200) {
//       var bears = JSON.parse(request.response);
//       console.log(bears[1]);
//     } else {
//       throw new Error(request.response);
//     }
//   }
// }
//
// request.open('GET', 'http://localhost:9966/boars.json');
// request.send();

var nets = require('nets');
nets({
  url: 'http://localhost:9966/bears.json',
  json: true
}, function (err, response, bears) {
  bears.forEach(function (bear) {
    //document.write(bear + '<br/>');
    console.log(bear);
  });
});
