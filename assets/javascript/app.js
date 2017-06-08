//name vars up top 
//keep functions small 
var questions = [
	{
		question:'What is the name of the alcoholic beverage that cannot be detected on the breath?',
		answer:['Schnapps', 'Hennigans', 'Schneigals', 'Smirnoff'],
		correctAnswer: 'Hennigans',
	}, 


	{		
		question:"What is the name of Elaine's sister?",
		answer:['Debra', 'Madison', 'Helen', 'Gail'],
		correctAnswer: 'Gail',
		
	},


	{		
		question:"When Kramer gets Bette Midler an Italian Ice, what flavor does she want?",
		answer:['Pineapple', 'Tutti-frutti', 'Strawberry', 'Banana'],
		correctAnswer: 'Pineapple',
		
	},


	{		
		question:"What is Newman's first name ?",
		answer:['John', 'Jerry', 'Jason', 'Not-Mentioned'],
		correctAnswer: 'Not-Mentioned',
		
	},
];

var correct = 0;
var wrong = 0;


//events
//initialize 
//button click 
//begin with the start page 
//HIDE DIV function
$( "#endGame" ).hide();

$(function(){
	    $("#master").hide();
	    $("#start").on("click", function(){
	        $("#master, #start").toggle();
	    });
});	



$('#start').on('click', function() { 
//Once the user clicks 'start', the game begins 
	startGame();

//timer starts counting down 
		function startTimer(duration, display) {
	    var timer = duration, minutes, seconds;	
	    setInterval(function () {
	        minutes = parseInt(timer / 60, 10);
	        seconds = parseInt(timer % 60, 10);

	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        display.text(minutes + ":" + seconds);

	        if (--timer === 0) {
	        	clearInterval(time);
	            check();
	        }
    }, 1000);
}

jQuery(function ($) {
	    var twoMinute = 60 * .1,
	        display = $('#time');
	    startTimer(twoMinute, display);
});
})



//once start is clicked, this funciton will cycle through each question and append it to the div on the html page 
function startGame() {
var j = 0;
var questionString = '';
		  for(var i=0; i < questions.length; i++) {
		  j++;

		  var answerString = '';
		  
		  questionString = '<div>' + j + '. ' + questions[i].question + '</div>';

		  for(var a=0; a < questions[i].answer.length; a++) {	
		    answerString += '<input id="answers" class="answer" type="radio" value='+questions[i].answer[a]+' name="question'+i+'">' + questions[i].answer[a] + '</input>';
		  }
		  $('#questions').append('<div class="question">' + questionString + answerString + '</div>');	
	
}}


//checks if the answer is correct on click
//$(document).on('click', '#answers', function(){ 
//	check(); 
//});

function check () { 
//for(var i=0; i < questions.length; i++) 	
	 //$('input[name="question0"]:checked'.val());
			var q1 = ($('input[name="question0"]:checked').val()); 
			var q2 = ($('input[name="question1"]:checked').val()); 
			var q3 = ($('input[name="question2"]:checked').val()); 
			var q4 = ($('input[name="question3"]:checked').val()); 

			console.log(q1);
			console.log(q2);
			console.log(q3);
			console.log(q4);

if (q1 === questions[0].correctAnswer) 
										{ 
	correct += 1; 
}
else {
	wrong += 1; 
}


if (q2 === questions[1].correctAnswer) { 
	correct += 1; 
}
else {
	wrong += 1; 
}


if (q3 === questions[2].correctAnswer) { 
	correct += 1; 
}
else {
	wrong += 1; 
}


if (q4 === questions[3].correctAnswer) { 
	correct += 1; 
}
else {
	wrong += 1; 
}

			console.log(correct);
			console.log(wrong);

			document.getElementById("correct").innerHTML=correct;
			document.getElementById("wrong").innerHTML=wrong;	

$( "#master" ).hide();
$( "#endGame" ).show();
}

			console.log(questions[0].correctAnswer);
			console.log(questions[1].correctAnswer);
			console.log(questions[2].correctAnswer);
			console.log(questions[3].correctAnswer);

			console.log(correct);

//game start and the there will be a clock counting down, the user has to finish the questions before the time runs out 




//each question will have four radio buttons the user must choose. they can only choose one one button 




//if the counter runs out before you finish the questions, show the correct ,incorrect, and unanswered questions 





//if the user finishes all the questioins and clicks 'done', it will show the correct ,incorrect, and unanswered questions 





//maybe a restart quesitons 




