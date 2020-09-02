function fo(){
	var t=document.getElementById("task");
	t.focus();
	t.style.borderColor="#333";
}
window.addEventListener("DOMContentLoaded",fo,false);
function dis(){
	var d=document.getElementById("s");
	d.style.display="block";
}
var k=document.getElementById("conv");
k.addEventListener("mouseup",dis,false);
function far(){
	var tv=document.getElementById("task").value;
	var F=9/5*tv+32;
document.getElementById("result").textContent=F+" degrees Farhenheit";
}
function fa(){
	var tv=document.getElementById("task").value;
	var C=5/9*(tv-32);
		document.getElementById("result").textContent=C +" degrees Celsius";
	}

var f=document.getElementById("f");
f.addEventListener("mouseup",far,false);
var c=document.getElementById("c");
c.addEventListener("mouseup",fa,false);

