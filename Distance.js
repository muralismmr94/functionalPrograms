const request=require('readline-sync');
var utility=require('../Utility/utility');
var x = request.question("enter x value ");
var y = request.question("enter y value ");
utility.distance(x,y);

