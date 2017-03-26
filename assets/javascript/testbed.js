// TestBed
$(document).ready(function() {

function shuffArray(inPut,outPut) {
    for (var i = inPut.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
		outPut.push(inPut[randomIndex]);
    }
} // End Shuffle Array;

 function countDwn(){
  	$("#chron").html(dur);    //Show time in time span
  	dur--; //Decrement timer 
 }

 var qandArray = [

            {quEst:"Who was the first man in space?", quAns:["John Glenn", "*Yuri Gagarin", "Gus Grissom","Alexei Leonov"]},

            {quEst:"Which of these astronauts became a Senator?", quAns:["*John Glenn*", "John Young", "Gordy Cooper","Neil Armstrong"]},

            {quEst:"Which of these was the first man to walk in space?", quAns:["Yuri Gagarin", "John Young", "*Alexey Leonov","Neil Armstrong"]},

            {quEst:"Which Apollo Mission landed on the moon?", quAns:["*Apollo 11", "Apollo 5", "Apollo 13","Apollo 9"]},

            {quEst:"Which of these was the longest serving astronaut?", quAns:["John Glenn", "*John Young", "Gordy Cooper","Neil Armstrong"]},

            {quEst:"Which branch of the Military did John Glenn serve in?", quAns:["*Marines", "Air Force", "Navy","Army Air Corps"]},

            {quEst:"in which state is the Johnson Space Center?", quAns:["*Texas", "Alabama", "Massachusets","California"]},

            {quEst:"Who commanded the last shuttle mission?", quAns:["Eugene Cernan", "Neil Armstrong", "Buzz Aldrin","*John Young"]}                    

            ];

var gameDay = [];
var dur = 90;
snapCount = setInterval(countDwn,1000);


console.log("Before : ", qandArray);
shuffArray(qandArray,gameDay);
console.log("after : ", gameDay);

$("#Q0").html(gameDay[1].quEst);



}); // End controlling loop