let player = "x";
let win = document.getElementById("win");
let squ = [];
let winer = document.getElementById('winer');
let lose = document.getElementById("lose");
let losers = document.getElementById('losers');

function welldone(num1 , num2 , num3){
	win.style.display = "block";
	winer.innerHTML = `${squ[num1]} wins `;
	document.getElementById('no'+num1).style.color = "White";
	document.getElementById('no'+num2).style.color = "White";
	document.getElementById('no'+num3).style.color = "White";
	document.getElementById('no'+num1).style.background = "darkred";
	document.getElementById('no'+num2).style.background = "darkred";
	document.getElementById('no'+num3).style.background = "darkred";
}

function check(){
	for(let i = 1; i<10 ; i++){
		squ[i] = document.getElementById('no'+i).innerHTML;
	}
	if(squ[1] == squ[2] && squ[2] == squ[3] && squ[1] !='')
	{welldone(1,2,3)}
	else if(squ[4] == squ[5] && squ[5] == squ[6] && squ[4] !='')
	{welldone(4,5,6)}
	else if(squ[7] == squ[8] && squ[8] == squ[9] && squ[7] !='')
	{welldone(7,8,9)}
	else if(squ[1] == squ[4] && squ[4] == squ[7] && squ[1] !='')
	{welldone(1,4,7)}
	else if(squ[2] == squ[5] && squ[5] == squ[8] && squ[2] !='')
	{welldone(2,5,8)}
	else if(squ[3] == squ[6] && squ[6] == squ[9] && squ[3] !='')
	{welldone(3,6,9)}
	else if(squ[1] == squ[5] && squ[5] == squ[9] && squ[1] !='')
	{welldone(1,5,9)}
	else if(squ[3] == squ[5] && squ[5] == squ[7] && squ[3] !='')
	{welldone(3,5,7)}
	else if(squ[1]!='' && squ[2]!='' && squ[3]!='' && squ[4]!='' && squ[5]!='' && squ[6]!='' && squ[7]!='' && squ[8]!='' && squ[9]!='')
	{lose.style.display = "block";
	losers.innerHTML = ` No Winners`;}
}


function turn(id){
	let selector = document.getElementById(id);
if(player === "x" && selector.innerHTML == '')
	{selector.innerHTML = "X";
	selector.style.background = "red";
	player = "o";}
else if(player === "o" && selector.innerHTML == ''){
	selector.innerHTML = "O";
	selector.style.background = "red";
	player = "x"
}	
check();
}

function end(){
setTimeout(function (){location.reload()},1000);
}
