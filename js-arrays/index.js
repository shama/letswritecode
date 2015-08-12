// var list = [1, 'string', { type: true }, [1,2,3]];
//
// list.push('at the end');
// list.unshift('at the beginning');
//
// // list.forEach(function (item) {
// //   console.log(item);
// // });
//
// var firstitem = list.shift();
// console.log(firstitem);

var bears = ['grizzly', 'polar', 'brown'];

bears.splice(bears.indexOf('polar'), 1);

console.log(bears);

// var last2 = bears.slice(-2);
// console.log(last2);

// var longestbear = bears.reduce(function (prev, next) {
//   if (next.length > prev.length) return next;
//   return prev;
// });
//
// console.log(longestbear);

// bears = bears.filter(function (bear) {
//   return bear !== 'polar';
// }).map(function (bear) {
//   var li = document.createElement('li');
//   li.textContent = bear;
//   return li;
// });
//
// var ul = document.createElement('ul');
// bears.forEach(function (element) {
//   ul.appendChild(element);
// });
// document.body.appendChild(ul);
