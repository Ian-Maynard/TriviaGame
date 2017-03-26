$(document).ready(function(){

var qandArray = [
            {quEst:"Who was the first man in space?",corAns:"Yuri Gagarin",quAns:["John Glenn", "Yuri Gagarin", "Gus Grissom","Alexei Leonov"]},
            {quEst:"Which of these astronauts became a Senator?",corAns:"John Glenn",corAns:"Yuri Gagarin", quAns:["John Glenn", "John Young", "Gordy Cooper","Neil Armstrong"]},
            {quEst:"Which of these was the first man to walk in space?",corAns:"Alexey Leonov", quAns:["Yuri Gagarin", "John Young", "Alexey Leonov","Neil Armstrong"]},
            {quEst:"Which Apollo Mission landed on the moon?",corAns:"Apollo 11", quAns:["Apollo 11", "Apollo 5", "Apollo 13","Apollo 9"]},
            {quEst:"Which of these was the longest serving astronaut?",corAns:"John Young", quAns:["John Glenn", "John Young", "Gordy Cooper","Neil Armstrong"]},
            {quEst:"Which branch of the Military did John Glenn serve in?",corAns:"Marines", quAns:["Marines", "Air Force", "Navy","Army Air Corps"]},
            {quEst:"in which state is the Johnson Space Center?",corAns:"Texas", quAns:["Texas", "Alabama", "Massachusets","California"]},
            {quEst:"Who commanded the last shuttle mission?",corAns:"John Young", quAns:["Eugene Cernan", "Neil Armstrong", "Buzz Aldrin","John Young"]}                    
            ];


   // Trivia Questions and Answers

    //Game variable setup   

    var totRightAns = 0;              // Total # of right answers 
    var totWrongAns = 0;              // Total # of wrong anwers 
    var timedOutAns = 0;              // Total Timed Out answers 
    var gameTime    = [];             // Game object array
    var qIndex      = 0;              // Current question index 
    var cAnswer     = 0;              //  Index of the current correct answer
    shuffArray(qandArray,gameTime);   // Shuffle the storage array into the game-time array

// Execution begins

    if (confirm("Do you want to Play Trivia?") === true) {
                playGame = true;
            }

    while (playGame) {

        var theAns=[];                                                  // Create current Answer Array 
        shuffArray(gameTime[qIndex].quAns,theAns);                      // Randomize the answer order and shuffle answers into the "Current Answers".    
        var timeUp = false;                                             // Init Time's-up Boolean Variable 
        var dur = 20;                                                   // Initialize Timer to 20 seconds.
                                                                        // Create and Format Q and A's for Display 
        $("#Q0").empty();                                               // Clear the question display
        $("#Q0").html(gameTime[qIndex].quEst);                          // Display the question 

                for (i = 0; i <=3; i++) {

                    var ansBtn = $("<button>");        // Create the button                                  
                    var ansBtnName = "#A" + i;        // Create the name
                    $(ansBtnName).empty;             // Clear out the element   
                        ansBtn.text(theAns[i]);         // 

                        if (i = cAnswer) {
                            ansBtn.attr("corRect", "y"); // Correct answer based on flag in data
                                        }
                        else {
                            ansBtn.attr("corRect", "n"); // all others incorrect 
                            }

                    $(ansBtnName).prepend(ansBtn); // Insert the button in the div.     

                    } // End Button creation and stylization loop

                var snapCount = setInterval(countDwn,1000); // decrement and display the timer 
                    
        } // Boolean controlled loop 





function shuffArray(inPut,outPut) {
// Shuffle an array randomly to another.
    for (var i = inPut.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        outPut.push(inPut[randomIndex]);
    }
} // End Shuffle Array;

 function countDwn(){
    $("#chron").html(dur);    //Show time in time span
    dur--; //Decrement timer 
    if (dur=0){
        timeUp = true;
            }
    }

 }); // End function wrapper