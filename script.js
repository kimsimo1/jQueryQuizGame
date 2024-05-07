

"use strict";

const data = [
  {
    question: "What is the capital of New York?",
    answers: [ "NYC", "Albany", "Buffalo", "Cooperstown" ],
    correct_choice: 1
  },
  {
    question: "What is the capital of California?",
    answers: [ "San Fransisco", "Los Angeles", "Sacramento", "Berkeley" ],
    correct_choice: 2
  },
{
    question: "What is the capital of Florida?",
    answers: [ "Miami", "Orlando", "Tallahassee", "Fort Lauderdale" ],
    correct_choice: 2
  }
  
];



let turn = 0;
let score = 0;

showQuestion();

// function that can show the current question and its possible answers
function showQuestion() {
  // set the counter
  $('#counter').text("Question: "+ (turn + 1) );

  // show question text
  $('#question').text( data[turn].question );

  // render buttons for answers
  $('#answers').empty();

  for ( let index in data[turn].answers ) {
    // 1. Create the button and set text to answer text
    let button = $("<button>");
    button.text( data[turn].answers[index] );

    // 2. Append button element into html document model
    $('#answers').append( button );

    // 3. Add event handler
    button.click(
      function() {
        checkAnswer(index);
      }
    );
  }
}



function checkAnswer(choice) {
    // handle event when user clicks an answer: right or wrong?
    // decide which answer is correct
    if ( choice == data[turn].correct_choice ) {
      $('#wrong').empty();
      $('#right').text("Correct answer!");
      showScore(); 
      nextQuestion();
    } else {
      // wrong button
      $('#wrong').text("Wrong answer!");
      $('#right').empty();
    }
}





// show another if one is available
function nextQuestion() {
  turn++;
  if ( turn < data.length ) {
    showQuestion();
  } else {
    $('body').html("<h1>You Won! Game Over!</h1>");
   
  }
  
}

function showScore(){
  
  $('#score').text("Score: " + (score++));
  
}
 showScore(); 






























/* Students: Please use this week's project for Week 5: Assignment 5: Shared Libraries. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
