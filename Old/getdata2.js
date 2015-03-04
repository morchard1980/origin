function test(){

var callCounter=1;
var lengthCounter=101;
var waitCounter=201;
var agentCounter = 301;
var serviceCounter = 401;
var a = 1;
var number1 = parseInt(document.getElementById(callCounter).value);	//works
var ui = number1 / 1800;
var uii = parseInt(document.getElementById(lengthCounter).value);
var u = ui * uii;
var probabilityWaitMaxpercent = parseFloat(document.getElementById(waitCounter).value);
var probabilityWaitMax = probabilityWaitMaxpercent/100;
	var erlangs = erlang(a,u);

	while(erlangs > probabilityWaitMax){
		a++;
		erlangs = erlang(a,u);
		
	}
var agentsOut = document.getElementById(agentCounter);
	agentsOut.textContent = a;
var target = parseFloat(document.getElementById("target").value);
var endSum = -(a - u)*target/uii;
var eul = Math.exp(endSum);
var serviceLevel = (1 - erlangs * eul)*100;
var serviceOut = document.getElementById(serviceCounter);
	serviceOut.textContent = serviceLevel.toFixed(2) + " %";
}