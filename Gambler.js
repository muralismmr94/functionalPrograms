const readline=require("readline-sync");
const utility=require('../Utility/utility');
var stake=readline.question("enter a stake number:")
var goal=readline.question("enter a Goal number:")
var number=readline.question("enter a Number of times you want to play:")
utility.gambler(stake,goal,number);