var halfHourArray = ["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00",

		"1230","1300","1330","1400","1430","1500","1530","1600","1630","1700","1730","1800","1830","1900","1930","2000","2030","2100","2130","2200","2230","2300","2330"];

var halfHourUntilArray = ["00:29","00:59","01:29","01:59","02:29","02:59","03:29","03:59","04:29","04:59","05:29","05:59","06:29","06:59","07:29","07:59","08:29","08:59","09:29","09:59","10:29","10:59","11:29","11:59","12:29",

		"12:59","13:29","13:59","14:29","14:59","15:29","15:59","16:29","16:59","17:29","17:59","18:29","18:59","19:29","19:59","20:29","20:59","21:29","21:59","22:29","22:59","23:29","23:59"];

function reset(){
var myNode = document.getElementById("dynamic");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}

}

function tableDraw(){
var loc = document.getElementsByTagName("tbody")[0];
var a=document.getElementById("startHour30").value;
var b=document.getElementById("endHour30").value-1;
var y;
var z;
var at;
var ot;
var st;
var ao;	
var as;	
	for(a, y=1, z=101, ot=201, at=301, st=401, ao=501, as=601; a<=b; a++, y++, z++, at++, ot++, st++, ao++, as++){
	var startText = halfHourArray[a];
	var row = document.createElement("tr");
	var j;
	
	loc.appendChild(row);
	
		//column data creator

		for(j=0, startText ;j<8; j++){
		var data1 = document.createElement("td");
		var cellText = document.createTextNode(startText);
		var dataInp = 	document.createElement("input");
		var dataInp2 = document.createElement("input");
		var probability = document.createElement("input");
		dataInp.type="text";
		dataInp.id = y;
		dataInp2.type="text";
		dataInp2.id = z;
		probability.type="text";
		probability.id = ot;
		var agentText = document.createElement("td");
		var serviceText = document.createElement("td");
		var agentOcc = document.createElement("td");
		var asa = document.createElement("td");
		agentText.id = at;
		serviceText.id = st;
		agentOcc.id = ao;
		asa.id = as;
			
			//row builder
			if(j===0){
			row.appendChild(data1);
			data1.appendChild(cellText);
			}
			else if (j===1){
			row.appendChild(data1);
			data1.appendChild(dataInp);
			}
			else if(j===2){
			row.appendChild(data1);
			data1.appendChild(dataInp2);
			}
			else if(j===3){
			row.appendChild(data1);
			data1.appendChild(probability);
			}
			else if(j===4){
			row.appendChild(agentText);
			}
			else if(j===5){
			row.appendChild(serviceText);	
			}
			else if(j===6){
			row.appendChild(agentOcc);	
			}
			else{
			row.appendChild(asa);	
			}
}
}
}

	
