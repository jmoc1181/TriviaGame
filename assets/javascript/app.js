//name vars up top 
//keep functions small 
var questions = [
	{
		question:'This is the first question',
		answer:['0', '1', '2', '3'],
		correctAnswer: '0'
	}, 


	{		
		question:'question 2',
		answer:['0', '1', '2', '3'],
		correctAnswer: '0'
	},
];


$(function(){
    $("#master").hide();
    $("#start").on("click", function(){
        $("#master, #start").toggle();
    });
});


//events
//initialize 
//button click 
$('#start').on('click', function() { 
	startGame();
})


	
function startGame() { 
	for(var i=0; i < questions.length; i++) { 
	$('#question').html(questions[0].question);

}
} 






/*
function startGame () { 
	var j = 0; 
	var questionString = ''; 

	for (var i=0; i < questions.length; i++) { 
	j++;

	questionString  = 

	$('#questions').append('<div>' + j + '.' + questions[i].question + '</div>'); 
	for(var a =0; a < questions)	


	}
}
*/ 


//functions 






//begin with the start page 





//Once the user clicks 'start', the game begins 




//game start and the there will be a clock counting down, the user has to finish the questions before the time runs out 




//each question will have four radio buttons the user must choose. they can only choose one one button 




//if the counter runs out before you finish the questions, show the correct ,incorrect, and unanswered questions 





//if the user finishes all the questioins and clicks 'done', it will show the correct ,incorrect, and unanswered questions 





//maybe a restart quesitons 




