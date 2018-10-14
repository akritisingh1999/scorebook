var button1=document.getElementById("one");
var button2=document.getElementById("two");
var button3=document.getElementById("three");
var input=document.getElementById("input");
var output=document.getElementById("winsc");
var s1=document.getElementById("p1");
var s2=document.getElementById("p2");
var game=true;
var score1=0;
var score2=0;
var winningscore=0;

button1.addEventListener("click", function() {
	if(game)
	score1++;
	if(score1==winningscore)
	{
		s1.textContent=score1;
		game=false;
	}
	s1.textContent=score1;
});
		
button2.addEventListener("click", function() {

	if(game)
	score2++;
	if(score2==winningscore)
	{
		s2.textContent=score2;
		game=false
	}
	s2.textContent=score2;
});
		

button3.addEventListener("click", function() {

	score1=0;
	score2=0;
	s1.textContent=score1;
	s2.textContent=score2;
	game=true;
});
 function reset(){
 	score1=0;
	score2=0;
	s1.textContent=score1;
	s2.textContent=score2;
	game=true;
 }
input.addEventListener("change", function() {

	winningscore=input.value;
	output.textContent=Number(winningscore);
	reset();

});

	