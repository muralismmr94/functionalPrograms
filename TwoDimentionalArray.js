const readline=require('readline-sync');
var utility=require('../Utility/utility');
var a = readline.question("enter a value");
var b = readline.question("enter b value");
var arr = [];
utility.twoDimArray(a,b,arr);