//name vars up top 
//keep functions small 
var questions = [
	{
		question:'What is the name of the alcoholic beverage that cannot be detected on the breath?',
		answer:[' Schnapps ', ' Hennigans ', ' Schneigals ', ' Smirnoff '],
		correctAnswer: 'Hennigans',
	}, 


	{		
		question:"What is the name of Elaine's sister?",
		answer:[' Debra ', ' Madison ', ' Helen ', ' Gail '],
		correctAnswer: 'Gail',
		
	},


	{		
		question:"When Kramer gets Bette Midler an Italian Ice, what flavor does she want?",
		answer:[' Pineapple ', ' Tutti-frutti ', ' Strawberry ', ' Banana '],
		correctAnswer: 'Pineapple',
		
	},


	{		
		question:"What is Newman's first name ?",
		answer:[' John ', ' Jerry ', ' Jason ', ' Not-Mentioned '],
		correctAnswer: 'Not-Mentioned',
		
	},


	{		
		question:"Which Big 4 sporting event do we not see someone on the show attend?",
		answer:[' NBA ', ' NFL ', ' MLB ', ' NHL '],
		correctAnswer: 'NBA',
		
	},

	{		
		question:"Who does not testify at the trial in the show's finale?",
		answer:[' Soup Nazi ', ' Mabel Choate ', ' Poppie ', ' Marla '],
		correctAnswer: 'Poppie',
		
	},

	{		
		question:"Which is not the name of a horse mentioned on the show?",
		answer:[' Snoopy ', ' Rusty ', ' Prickly Pete ', ' Manya '],
		correctAnswer: 'Manya',
		
	},

	{		
		question:"Which is not a possible child's name mentioned in 'The Seven'?",
		answer:[' Mug ', ' Ritz ', ' Sauce ', ' Bisquick '],
		correctAnswer: 'Ritz',
		
	},

	{		
		question:"How many times has Elaine said her catchphrase 'Get out!' throughout the series?",
		answer:[' 16 ', ' 11 ', ' 10 ', ' 12 '],
		correctAnswer: '10',
		
	},
	
	{		
		question:"Which other show is not mentioned/seen on Seinfeld?",
		answer:[' Cheers ', ' Blossom ', ' Jeopardy ', ' Wheel-of-Fortune '],
		correctAnswer: 'Wheel-of-Fortune',
		
	},


];

var correct = 0;
var wrong = 0;
var timing; 
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
	    	timing = setInterval(function () {
	        minutes = parseInt(timer / 60, 10);
	        seconds = parseInt(timer % 60, 10);

	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        display.text(minutes + ":" + seconds);

	        if (--timer === 0) {
	            check();
	        }
   		 }, 1000);
}

		jQuery(function ($) {
	    var twoMinute = 60 * 1.5,
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
		    answerString += '<input id="answers" class="answer" type="radio" class="checkradios" value='+questions[i].answer[a]+' name="question'+i+'">' + questions[i].answer[a] + '</input>';
		  }
		  $('#questions').append('<div class="question">' + questionString + answerString + '</div>');	
	
}}



//checks if the answer is correct on click
//$(document).on('click', '#answers', function(){ 
//	check(); 
//});

function check () { 
	
    clearInterval(timing);

//for(var i=0; i < questions.length; i++) 	
	 //$('input[name="question0"]:checked'.val());
			var q1 = ($('input[name="question0"]:checked').val()); 
			var q2 = ($('input[name="question1"]:checked').val()); 
			var q3 = ($('input[name="question2"]:checked').val()); 
			var q4 = ($('input[name="question3"]:checked').val()); 
			var q5 = ($('input[name="question4"]:checked').val()); 
			var q6 = ($('input[name="question5"]:checked').val()); 
			var q7 = ($('input[name="question6"]:checked').val()); 
			var q8 = ($('input[name="question7"]:checked').val()); 
			var q9 = ($('input[name="question8"]:checked').val()); 
			var q10 = ($('input[name="question9"]:checked').val()); 

			console.log(q1);
			console.log(q2);
			console.log(q3);
			console.log(q4);
			console.log(q5);
			console.log(q6);
			console.log(q7);
			console.log(q8);
			console.log(q9);
			console.log(q10);

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

if (q5 === questions[4].correctAnswer) 
										{ 
	correct += 1; 
}
else {
	wrong += 1; 
}

if (q6 === questions[5].correctAnswer) { 
	correct += 1; 
}
else {
	wrong += 1; 
}

if (q7 === questions[6].correctAnswer) { 
	correct += 1; 
}
else {
	wrong += 1; 
}

if (q8 === questions[7].correctAnswer) { 
	correct += 1; 
}

else {
	wrong += 1; 
}

if (q9 === questions[8].correctAnswer) { 
	correct += 1; 
}

else {
	wrong += 1; 
}

if (q10 === questions[9].correctAnswer) { 
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


if (correct >= 7) { 
	 document.getElementById("gif").src="https://media.giphy.com/media/aMh59aKR8vjdC/giphy.gif"
}
	else { 
	document.getElementById("gif").src="https://media.giphy.com/media/PEtL0mS2JXMBi/giphy.gif"
	}


}




			console.log(questions[0].correctAnswer);
			console.log(questions[1].correctAnswer);
			console.log(questions[2].correctAnswer);
			console.log(questions[3].correctAnswer);
			console.log(questions[4].correctAnswer);
			console.log(questions[5].correctAnswer);
			console.log(questions[6].correctAnswer);
			console.log(questions[7].correctAnswer);
			console.log(questions[8].correctAnswer);
			console.log(questions[9].correctAnswer);
			console.log(correct);





//game start and the there will be a clock counting down, the user has to finish the questions before the time runs out 




//each question will have four radio buttons the user must choose. they can only choose one one button 




//if the counter runs out before you finish the questions, show the correct ,incorrect, and unanswered questions 





//if the user finishes all the questioins and clicks 'done', it will show the correct ,incorrect, and unanswered questions 





//maybe a restart quesitons 




