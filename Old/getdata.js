function test(){

var callCounter=1;
var lengthCounter=101;
var a = 1;
var number1 = parseInt(document.getElementById(callCounter).value);	//works
var ui = number1 / 1800;
var uii = parseInt(document.getElementById(lengthCounter).value);
var u = ui * uii;


	alert(number1);
	var erlangs = erlang(a,u);

	while(erlangs > 0.3){
		a++;
		erlangs = erlang(a,u);
		
	}
	
alert(a + " Agents Will Achieve " + erlangs.toFixed(4) + " Erlangs, An Occupancy rate of " + erlangs.toFixed(4)*100 + "%");
	alert(e);
}
