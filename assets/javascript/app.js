// var questions = [{
//     question: "Who was the OG Bachelor?",
//     choices: ["Ben Higgins", "Alec Michel", "Jesse Palmer", "Chris Souls"],
//     correctAnswer: 2
// }, {
//     question: "Who is the first African American Bachelorette?",
//     choices: ["JoJo Fletcher", "Kaitlyn Bristow", "Rachel Lindsay", "Emily Maynard"],
//     correctAnswer: 3
// }, {
//     question: "Who has been on the Bachelor franchise the most times?",
//     choices: ["Juan Pablo Galavis", "Andi Dorfman", "Nick Viall", "Desiree Hartsock"],
//     correctAnswer: 3
// }, {
//     question: "What Bachelorette contestant is known for getting in fights, lifting, and eating lots of deli meat?",
//     choices: ["Chad Johnson", "Justin Rego", "Wes Hayden", "Evan Bass"],
//     correctAnswer: 1
// }, {
//     question: "Which Bachelor contestant still has a nanny?",
//     choices: ["Kelsey Poe", "Ashley Iaconetti", "Olivia Caridi", "Corrine Olympios"],
//     correctAnswer: 4
// }];


// ------------ //


// Slideshow Activity
// Students: follow the instructions below:

// TODO: Put links to our images in this image array.


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



// Variable showImage will hold the setInterval when we start the slideshow
var showTrivia;

// Count will keep track of the index of the currently displaying picture.
var count = 0;





// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
window.onload = function() {
    $(".popup").hide();
    $(".popupwin").hide();
    $("#start").on("click", startSlideshow, console.log("started")); 



// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#stop").on("click", stopSlideshow);
};



// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayTrivia() {
  $("#question-holder").html(questions[count]);
  $(".choice1").html(answers[count][0]);
  $(".choice2").html(answers[count][1]);
  $(".choice3").html(answers[count][2]);
  $(".choice4").html(answers[count][3]);

};

    $(".choice").on("click", function(event) {
        console.log(event.target.innerHTML);

        if (event.target.innerHTML === correctAnswers[count]){
        console.log("You Win!")
        $(".popupwin").show();
            $(".popup-close").on("click", function () {
                $(".popupwin").hide();
            });


    }
        else {
            console.log("You Lose");
            $(".popup").show();
            $(".popup-close").on("click", function () {
                $(".popup").hide();
            });
        }
    });

// Make an array/object of correct answers, then make an if/else statement comparing the user's click to the correct answer. 
// event.target.id (etc, look it up)
  




function nextQuestion() {

  // TODO: Increment the count by 1.

  count ++;






  // TODO: Use a setTimeout to run displayImage after 1 second.

    setTimeout(displayTrivia, 3000);


  // TODO: If the count is the same as the length of the image array, reset the count to 0.

  if (count === questions.length) {
    count = 0;
  }

 

}
function startSlideshow() {

    showTrivia = setInterval(nextQuestion, 5000);

  // TODO: Use showImage to hold the setInterval to run nextImage.

}
function stopSlideshow() {

  // TODO: Put our clearInterval here:

  clearInterval(showTrivia);

}



// This will run the display image function as soon as the page loads.
displayTrivia();




