
var read=require('readline-sync');
var utility=require('../Utility/utility');

replace();
function replace() {
   var input = read.question("Enter the name?");
   utility.replaceString(input);
}