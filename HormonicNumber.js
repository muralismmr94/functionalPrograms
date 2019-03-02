var request=require('readline-sync');
var utility=require('../Utility/utility');
var number=request.question("enter  Nth harmonic number you want ");
var hor=utility.hormonic(number);
console.log(hor);