const request = require('readline-sync');
var utility  = require('../Utility/utility');
var a,b,c;
a=request.question("enter a value");
b=request.question("enter b value");
c=request.question("enter c value");
utility.quadratic(a,b,c);