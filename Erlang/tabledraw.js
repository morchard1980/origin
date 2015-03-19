// getdata2 (which works on one line) + the loop to make it work on all lines in the table


function test(){

	for(callCounter=1, lengthCounter=101, waitCounter=201, agentCounter = 301, serviceCounter = 401, occCounter = 501, asCounter = 601; callCounter<99; callCounter++, lengthCounter++, waitCounter++, agentCounter++, serviceCounter++, occCounter++, asCounter++){

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
	//all the different calculations for the output are here
	var agentsOut = document.getElementById(agentCounter);
	agentsOut.textContent = a;
	var target = parseFloat(document.getElementById("target").value);
	var endSum = -(a - u)*target/uii;
	var eul = Math.exp(endSum);
	var serviceLevel = (1 - erlangs * eul)*100;
	var occLevel = (u/a)*100;
	var serviceOut = document.getElementById(serviceCounter);
	serviceOut.textContent = serviceLevel.toFixed(2) + " %";
	var occOut = document.getElementById(occCounter);
	occOut.textContent = occLevel.toFixed(2) + " %";
	var p = occLevel/100;
	var oneMinusP = 1-p;
	var asa = (erlangs*uii)/(a*oneMinusP);
	var asaOut = document.getElementById(asCounter);
	asaOut.textContent = asa.toFixed(2) + " Seconds";
}
}