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
		question:"In 'The Subway', what was Georges reason for not giving the blind man money?",
		answer:['He had no change.', 'He cant carry change in those pants.', 'He gave his change to someone else', 'He ignores him.'],
		correctAnswer: 'He cant carry change in those pants.',
		
	},


	{		
		question:"What is Newman's first name ?",
		answer:['John', 'Jerry', 'Jason', 'Not Mentioned'],
		correctAnswer: 'Not Mentioned',
		
	},
];


//events
//initialize 
//button click 

//begin with the start page 
//HIDE DIV function
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

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var twoMinute = 60 * 2,
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
}
}


//checks if the answer is correct 
$(document).on('click', '#answers', function(){ 
	check(); 
	
});



function check () { 
//for(var i=0; i < questions.length; i++) 
	//$('input[name="question0"]:checked'.val());
	console.log($('input[name="question0"]:checked').val()); 
	console.log('adasd');
	console.log($('input[name="question0"]:checked'));

}






//game start and the there will be a clock counting down, the user has to finish the questions before the time runs out 




//each question will have four radio buttons the user must choose. they can only choose one one button 




//if the counter runs out before you finish the questions, show the correct ,incorrect, and unanswered questions 





//if the user finishes all the questioins and clicks 'done', it will show the correct ,incorrect, and unanswered questions 





//maybe a restart quesitons 




