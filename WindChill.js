const request = require('readline-sync');
var utility  = require('../Utility/utility');
var t,v;
t=request.question("enter a temparature here: ");
v=request.question("enter a wind speed here: ");
utility.windChill(t,v);