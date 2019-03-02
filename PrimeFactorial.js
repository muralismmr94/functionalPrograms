var request=require('readline-sync');
var utility=require('../Utility/utility');
var factnumber=request.question("enter a number to check ");
utility.primeFactor(factnumber);

