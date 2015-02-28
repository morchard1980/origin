function ask(){
 var name = prompt("What is your name?");
                   alert("Hello " + name);
    
    question(name);
}

function question(name){
 var a = prompt("type a number in " + name);
 var b = prompt("and now type another one in please " + name);
 var c = parseInt(a);
 var d = parseInt(b);
 var e = c+d;
    alert("Those 2 numbers added together = " +e+ " Thanks for playing " + name);
}