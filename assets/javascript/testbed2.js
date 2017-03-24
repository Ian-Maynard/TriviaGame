// TestBed  This
$(document).ready(function(){
alert("Testbed2");
//Starts timer on question page
function startTimer(){
    timeIntervalID = setInterval(decrement, 1000);

};

//Decrements time on question page
function decrement(){
    timeNumber--;

    //Show time in time span
    $("#chron").html(timeNumber);

    //if time runs out, set question to unanswered.
    if(timeNumber === 0){
        setQuestionUnanswered();
    }
};

var timeNumber = 30;
startTimer();

}); // End controlling loop