let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value=='' || attempt.value=='') {
    	setHiddenFields();
    }
    
    if(!validateInput(input.value)) {
    	return;
    } else {
    	attempt.value++; 
    }
    
    if(getResults(input.value)) {
    setMessage("You Win! :)");
    showAnswer(true);
	showReplay();
	} else if(attempt.value>=10){
	setMessage("You Lose! :(");
	showAnswer(false);
	showReplay();

	} else {setMessage("Incorrect, try again.");}

}

//implement new functions here
function setHiddenFields() {
	
	answer.value = Math.floor(Math.random()*10000).toString();
	while(answer.value.length < 4) {
		answer.value= "0" + answer.value;
	} 
	attempt.value = 0;
}

function setMessage(message){
 document.getElementById('message').innerHTML = message;
} 

function validateInput(input) {
	if(input.length==4) {
		return true;
	} else {
		setMessage("Guesses must be exactly 4 characters long.");
		return false;
}}

function getResults(input) {
	let charGuessed=0;
	let result= '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
	for(i=0; i<input.length; i++) {

 
	if(input.charAt(i)==answer.value.charAt(i)) {
	result+='<span class="glyphicon glyphicon-ok"></span>';
	charGuessed++;
} else if(answer.value.indexOf(input.charAt(i)) > -1) {
	result+='<span class="glyphicon glyphicon-transfer"></span>';
} else {
	result+='<span class="glyphicon glyphicon-remove"></span>';}
}

	result+='</div></div>';
document.getElementById('results').innerHTML += result;

if(charGuessed==input.length) {return true;} else {return false;}
}

function showAnswer(success) {
	let code = document.getElementById('code')

if(success) {
	code.className += ' success';
} else {
	code.className += ' failure';}

	code.innerHTML = answer.value;
}


function showReplay() {
	document.getElementById('guessing-div').style.display = "none";
    document.getElementById('replay-div').style.display = "block";
}
