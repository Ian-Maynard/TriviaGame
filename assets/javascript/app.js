//APP.JS - Trivia Game. 
// Core loop Algorythithms 
// After Start 	set controlling loops 

$(document).ready(function() {

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

            qandAns {quEst:"Who commanded the last shuttle mission?",
                        quAns:["Eugene Cernan", "Neil Armstrong", "Buzz Aldrin","*John Young"]}                    

            ];


            // Init outer Variables 

            if (confirm("Do you want to Play Trivia?") === true) {
                playGame = true;
            }
     
    //Game variable setup        
    var rightAns = 0;
    var wrongAns = 0;
    var timedOutAns = 0;



     // Load  & Shuffle Question Array  - DONE

    while playGame {

    var timeUp = false;     // Time up Boolean Variable 
    var thisAnswerArray[]; // Shuffled answer array.
    var  corrIndex;        // Index of the correct answer.


 
            // Clear display area 


            // Grab a question and answer off the top   


            // Randomize the answer order 



            // Display both 




            // Start the clock 

    
    var dur = 90; // Duration of the timer
    var snapCount = setInterval(countDwn,1000); // decfrement and display the timer 

           
            // Accept input
            // Adjudicate answers
            // Increment appropriate counters




            // Disern wether the user wants to quit???
            // Load questions objects to array. Assign random order
            // to correct answers in answer array




                for (var i = 0; i <= (qandArray.length-1); i++) { // Loop through question array
                    var tempArr[];

                    for (var j = 0; j <=3; j++)
                                            {

                        if

                    // Read Question/Answer objects 
                    // clear area 
                    // Generate/style question 
                    // Generate buttons 

                     var questBtn = $("<button>");

                        if 

                    }

                     questBtn.addClass("quest-button quest-button-color quest");
                     questBtn.attr("data-quest", printquest);
                     questBtn.text(printquest);
                    $("#buttons").append(questBtn);


                    // Assign attributes

                    while () { // Timer controlled loop
                        // Init inner Variables 

                        // Accept input 
                        // Adjudicate answers
                        // Output answers 
                        // Increment counters 
                        // Call Ancilliary functions
                    } // Time controlled loop 
                    // Assumed time-up end to loop at this point - 
                    // print the correct answer, Pause, return.


                } // Question controlled Loop 

            } // Boolean controlled loop 




function shuffArray(inPut,outPut) {
    for (var i = inPut.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        outPut.push(inPut[randomIndex]);
    }
} // End Shuffle Array;

 function countDwn(){
    $("#chron").html(dur);    //Show time in time span
    dur--; //Decrement timer 
    if (dur <= 10){
        dur=dur+(dur*232);
    }
 }







        } // Controlling wrapper for Function
