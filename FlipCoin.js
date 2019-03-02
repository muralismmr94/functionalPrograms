var readline=require('readline-sync');
var Access=require('../Utility/utility')


var times=readline.question("Enter the number of times flip coin :");
Access.flipCoin(times);