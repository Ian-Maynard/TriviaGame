//APP.JS - Trivia Game. 
// Core loop Algorythithms 
// After Start 	set controlling loops 



            // Init outer Variables     
var qandArray = [

            qandAns {quEst:"Who was the first man in space?",
                        quAns:["John Glenn", "*Yuri Gagarin", "Gus Grissom","Alexei Leonov"]}

            qandAns {quEst:"Which of these astronauts became a Senator?",
                        quAns:["*John Glenn*", "John Young", "Gordy Cooper","Neil Armstrong"]}

            qandAns {quEst:"Which of these was the first man to walk in space?",
                        quAns:["Yuri Gagarin", "John Young", "*Alexey Leonov","Neil Armstrong"]}

            qandAns {quEst:"Which Apollo Mission landed on the moon?",
                        quAns:["*Apollo 11", "Apollo 5", "Apollo 13","Apollo 9"]}

            qandAns {quEst:"Which of these was the longest serving astronaut?",
                        quAns:["John Glenn", "*John Young", "Gordy Cooper","Neil Armstrong"]}

            qandAns {quEst:"Which branch of the Military did John Glenn serve in?",
                        quAns:["*Marines", "Air Force", "Navy","Army Air Corps"]}

            qandAns {quEst:"Who commanded the first shuttle mission?",
                        quAns:["Eugene Cernan", "Spurgeon Tanner", "Buzz Aldrin","*John Young"]}  

            qandAns {quEst:"Who was the first woman in space?",
                        quAns:["Sally Ride", "Eileen Collins", "*Valentina Tereshkova","Svetlana Savitskaya"]}                   

            ];   // Trivia Questions and Answers

    //Game variable setup        
    var totRightAns = 0;              // Total # of right answers 
    var totWrongAns = 0;              // Total # of wrong anwers 
    var timedOutAns = 0;              // Total Timed Out answers 
    var gameTime[];                   // Game object array
    var qIndex=0;                     // Current question index 
    var cAnswer= 0;                   //  Index of the current correct answer
    shuffArray(qandArray,gameTime)    // Shuffle the storage array into the game-time array


// Execution begins



    if (confirm("Do you want to Play Trivia?") === true) {
                playGame = true;
            }



    while playGame {

        var theAns[];                                                   // Create current Answer Array 
        shuffArray(gameTime[qIndex].quAns,theAns);                      // Randomize the answer order and shuffle answers into the "Current Answers".    
        var cAnswer = theAns.indexOf("*");                              // Index of the correct answer.
        var tempAns = theAns[cAnswer].slice(1, theAns[cAnswer].length)  // Strip first character "right Answer" flag.
        theAns[cAnswer]=tempAns;                                        // Replace correct answer flag from correct answer. 
        var timeUp = false;                                             // Init Time's-up Boolean Variable 
        var dur = 20;                                                   // Initialize Timer to 20 seconds.

                                                                        // Create and Format Q and A's for Display 
        $("#Q0").empty();                                               // Clear the question display
        $("#Q0").html(gameTime[qIndex].quEst);                          // Display the question 

                for (i = 0; i = theAns.length; i++) {
                // var ansBtnStyle = "id=A"+[i]+" "+"ansBtnStyle";
                var ansBtn = $("<button>"); // Create the button                                  
                var ansBtnName = "#A" + i; // Create the name
                $(ansBtnName).empty; // Clear out the element   
                // ansBtn.addClass();      Add the classes here 

                ansBtn.text(theAns[i]); // Put the text in

                //assign a discernable value to the button of the correct answer.
                if (i = cAnswer) {
                    ansBtn.attr("corRect", "y"); // Correct answer based on flag in data
                } else {
                    ansBtn.attr("corRect", "n"); // all others incorrect 
                }

                $(ansBtnName).prepend(ansBtn); // Insert the button in the div. 

            } // End Button creation and stylization loop


                var snapCount = setInterval(countDwn,1000); // decrement and display the timer 

                     while ()
                        $(".ansBtn").on("click",function(){});
                        
                        // Increment appropriate counters
                        // Discern wether the user wants to quit???

                                    // Accept input 
                                    // Adjudicate answers
                                    // Output answers 
                                    // Increment counters 
                                    // Call Ancilliary functions
                                // Assumed time-up end to loop at this point - 
                                // print the correct answer, Pause, return.


                            } // Question controlled Loop 

                        } // Boolean controlled loop 



function createButtons(){
$("#Q0").empty();
$("#Q0").html(gameTime[qIndex].quEst);

    for(i=0; i=currentAns.length; i++)  {

        var ansBtnStyle = "id=A"+[i]+" "+"nsBtnStyle";
        var ansBtn = $("<button>");
        ansBtn.addClass();
        ansBtn.attr("data-ans", currentAns[i]);
        // 5. Then give each "ansBtns" a text equal to "currentAns[i]".
        ansBtn.text(currentAns[i]);
        // 6. Finally, append each "ansBtn" to the "#buttons" div (provided).
        $("#buttons").html(ansBtn);
    }  // Button creation and stylization loop 

} // Create the buttons 

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


// }); // Controlling wrapper for Function