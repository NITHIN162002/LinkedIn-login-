var inp=document.getElementsByClassName("check");
function password(){
    var e=inp[0].value;
    var p=inp[1].value;
    if(e=="nithinvemana13@gmail.com" && p=="97056711@Nanu"){
        document.getElementById("btn").type="submit";
        document.getElementById("form").action="https://www.linkedin.com/in/nithin-vemana"; 
    }
    else{
        document.getElementById("war").innerHTML="Username or Password is incorrect";
    }
}
var n=0;
function visible(){
    n++;
    if(n%2!=0){ 
        document.getElementById("eye").src="./visible.png";
        document.getElementById("pas").type="text";
       
    }
    else{
        document.getElementById("eye").src="./visibility-off.png";
        document.getElementById("pas").type="password";
    }
}