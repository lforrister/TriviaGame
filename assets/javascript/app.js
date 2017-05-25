

// Define Variables:


var questions = [
        "Who was the OG Bachelor?", 
        "Who was the first African American Bachelorette?", 
        "Who has been on the Bachelor franchise the most times?",
        "What Bachelorette contestant is known for getting into fights, lifting, and eating a lot of deli meat?",
        "Which Bachelor contestant still has a nanny?"

    ];

var answers = [
    ["Ben Higgins", "Alec Michel", "Jesse Palmer", "Chris Souls"],
    ["JoJo Fletcher", "Kaitlyn Bristow", "Rachel Lindsay", "Emily Maynard"],
    ["Juan Pablo Galavis", "Andi Dorfman", "Nick Viall", "Desiree Hartsock"],
    ["Chad Johnson", "Justin Rego", "Wes Hayden", "Evan Bass"],
    ["Kelsey Poe", "Ashley Iaconetti", "Olivia Cardi", "Corrine Olympios"]
             
];

var correctAnswers = [
    "Alec Michel", "Rachel Lindsay", "Nick Viall", "Chad Johnson", "Corrine Olympios"

    ];





// Count will keep track of the index of the currently displaying picture
// Counter will start the timer
var count = 0;
var counter = 15;
// var timeleft = 0;





// Stuff we want to happen when the window loads
window.onload = function() {
    $(".popup").hide();
    $(".popupwin").hide();
    $(".popupnotime").hide();

    // Everything we want to happen when the start button is clicked (aka everything)
    $("#start").on("click", timer);
    $("#start").on("click", displayTrivia);

 };

    function timer (){
        console.log("Hello");
        counter = 15;
        $("#display").html(15);
        function timeIt() {
            counter--;
            $("#display").html(counter);

            if (counter === 0) {
                console.log("Time's Up!");
                $(".popupnotime").show();
            $(".popup-close").on("click", function () {
                $(".popupnotime").hide();
                nextQuestion();
                stop();
                timer();
            });
            }

            
        }
        meagan = setInterval(timeIt, 1000);



};






// // This puts the correct questions in the right spot
function displayTrivia() {
  $("#question-holder").html(questions[count]);
  $(".choice1").html(answers[count][0]);
  $(".choice2").html(answers[count][1]);
  $(".choice3").html(answers[count][2]);
  $(".choice4").html(answers[count][3]);

  // When you click a right or wrong answer, this should happen 

  $(".choice").on("click", function(event) {
        console.log(event.target.innerHTML);

        if (event.target.innerHTML === correctAnswers[count]){
        console.log("You Win!")
        $(".popupwin").show();
            $(".popup-close").on("click", function () {
                $(".popupwin").hide();
                nextQuestion();
                stop();
                timer();
            });

    }
        else {
            console.log("You Lose");
            $(".popup").show();
            $(".popup-close").on("click", function () {
                $(".popup").hide();
                nextQuestion();
                stop();
                timer();
            });
        }
    });

};

    


// This function makes it move to the next question

function nextQuestion() {
    count ++;
    console.log(count);
    displayTrivia();
    if (count === answers.length) {
        count = 0;
    }

}

 function stop() {

  console.log("stopping");
  clearInterval(meagan);

}







 

// }
// function startSlideshow() {

//     showTrivia = setInterval(nextQuestion, 5000);

//   // TODO: Use showImage to hold the setInterval to run nextImage.



// }
// function stopSlideshow() {

//   // TODO: Put our clearInterval here:

//   clearInterval(showTrivia);

// }


// // This will run the display image function as soon as the page loads.
// displayTrivia();




