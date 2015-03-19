function erlang(a,u){
var lowersum = 0;
var mfact = 0;
var p = u/a;

function mfactorial(m){
		var i = m-1;
		while (i > 1){
		m = m * i;
		i--;
		}
		mfact = m;

	
}

	
function summationeachline(k,u){
	
		for(k=a-1; k>0; k--){
		var ki = kfact(k);
		var upow = Math.pow(u,k);
		lowersum+=(upow/ki);		
		}
	
}


	//calculate the factorial of k

	function kfact(k){
	
		var x = k-1;            // counter for the factorial 5*4**3* etc  first multiplier is the number n - 1 eg 4
		
		while (x > 1){		//while x is greater than 1 (greater than or equal to it appears)  the multiplier needs to end at 1

		k = k*x;		//each stage of the factorial process as x counts down to 1
		x--;			// reduce the value of x by 1 and go back through the loop

		}
	return(k);
	
	}


mfactorial(a);
summationeachline(a,u);
var um = Math.pow(u,a);
var tophalf = (um/mfact);
var bottomerlang = tophalf + (1-p) * lowersum;
var erlangs = tophalf/bottomerlang;
return erlangs;

}