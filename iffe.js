// Immediately invoked function expression used to prevent a variable from
// becoming global

(function () {
  var tmp = '..';
}());

/* IFFE use case: inadvertent sharing via closures */
// Closures keep their connections to outer variables which is
// sometimes not what you want

var result = [];
 for (var i =0; i < 5; i++) {
   result.push(function () { return i });
 }
 console.log(result[1]()); // 5, not 1
 console.log(result[3]()); // 5, not 3

 // To get a snapshot of the current value of i you can use an IFFE

 for (var i=0; i < 5; i++) {
   (function () {
     var i2 = i; // copy current i
     result.push(function () { return i2 });
   }())
 }