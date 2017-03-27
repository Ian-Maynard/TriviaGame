$(document).ready(function() {

var qandArray = [
            {quEst:"Who was the first man in space?",corAns:"Yuri Gagarin",quAns:["John Glenn", "Yuri Gagarin", "Gus Grissom","Alexei Leonov"]},
            {quEst:"Which of these astronauts became a Senator?",corAns:"John Glenn",corAns:"Yuri Gagarin", quAns:["John Glenn", "John Young", "Gordy Cooper","Neil Armstrong"]},
            {quEst:"Which of these was the first man to walk in space?",corAns:"Alexey Leonov", quAns:["Yuri Gagarin", "John Young", "Alexey Leonov","Neil Armstrong"]},
            {quEst:"Which Apollo Mission landed on the moon?",corAns:"Apollo 11", quAns:["Apollo 11", "Apollo 5", "Apollo 13","Apollo 9"]},
            {quEst:"Which of these was the longest serving astronaut?",corAns:"John Young", quAns:["John Glenn", "John Young", "Gordy Cooper","Neil Armstrong"]},
            {quEst:"Which branch of the Military did John Glenn serve in?",corAns:"Marines", quAns:["Marines", "Air Force", "Navy","Army Air Corps"]},
            {quEst:"in which state is the Johnson Space Center?",corAns:"Texas", quAns:["Texas", "Alabama", "Massachusets","California"]},
            {quEst:"Who commanded the first Space Shuttle mission?",corAns:"John Young", quAns:["Eugene Cernan", "Neil Armstrong", "Buzz Aldrin","John Young"]}                    
            ];

   // Trivia Questions and Answers

    //Game variable setup   
    var numberOfQ   = qandArray.length;
    var totRightAns = 0;              // Total # of right answers 
    var totWrongAns = 0;              // Total # of wrong anwers 
    var timedOutAns = 0;              // Total Timed Out answers 
    var qDisplay    = [];             // Game object array
    shuffArray(qandArray,qDisplay);   // Shuffle the storage array into the game-time array
    var qIndex = 0;                   // Start at the top of the array
    var dur = 20;
    timeUp  = 0;

function shuffArray(inPut,outPut) {
    // Shuffle an array randomly to another.
        for (var i = inPut.length - 1; i >= 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            outPut.push(inPut[randomIndex]);
        }
 } // End Shuffle Array;
 

function countDwn(){
        if (dur==0){
           timeUp=1;
           clearInterval(snapCount);
        }
         else {   
                dur--; //Decrement timer 
                $("#chron").empty();
                $("#chron").html(dur+" seconds remain.");    //Show time in time span
                }
} // Count Down


function screenDraw(x){
    $("#Q0").empty();                                           // Clear the question display
    $("#Q0").html(qDisplay[x].quEst);                          // Display the question 
    for (i=0; i <=3; i++) {
         var ansBtn = $("<button>");                // Create the button                                  
         var ansBtnName = "#A" + i;                 // Create the name
         $(ansBtnName).empty();                     // Clear out the element   
         ansBtn.text(qDisplay[x].quAns[i]);         // Assign the text of the question to the button 
         ansBtn.addClass("ansWer");                 // Assign a single class to all buttons                   
        $(ansBtnName).append(ansBtn);               // Insert the button in the div.     
        }                                                           // End Button creation and stylization loop  
}

// Execution begins

    if (confirm("Do you want to Play Trivia?") == true) {

        for (h=0; h <= numberOfQ-1; h++) {
            currentQuestion=qDisplay[h].quEst;
            currentAnswer=qDisplay[h].corAns;  

            screenDraw(h); // Display questions and build buttons
            
            timeUp = 0;          // When 
            dur = 20;            // set the duration of the timer              
            var snapCount = setInterval(countDwn,2000);                  // decrement and display the timer 
               
        $(".ansWer").on("click", function() {

            if (($(this).text) == currentAnswer) {
                totRightAns++;
                alert(($(this).text+" is the CORRECT ANSWER!!"));
                } 
            else {
                totWrongAns++;
                alert(($(this).text+" is the INCORRECT ANSWER!!"));
            }
            

      });



                                                                                 // Accept the button input here
    } // Length of array loop 

} // Boolean controlled loop Controlled by Play? Yes

}); // End function wrapper