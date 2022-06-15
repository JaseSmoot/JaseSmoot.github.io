/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects
  var positionX = 0; // the x-coordinate location for the box
  var speedX = 0; // the speed for the box along the x-axis
  var positionY = 0; // the y - coordinate location for the box
  var speedY = 0; // the speed for the box along y-axis


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);

  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40,
  }



  // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();


  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    console.log(event.which)
    if (event.which === KEY.LEFT) {
      speedX = -5;
    }
    if (event.which === KEY.RIGHT) {
      
      speedX = 5;
    }
    if (event.which === KEY.UP) {
      speedY = -5;
    }
    if (event.which === KEY.DOWN) {
      speedY = 5;
    }
  }
  function handleKeyUp(event) {

    console.log(event.which)
    if (event.which === KEY.LEFT) {
      speedX = -0;
    }
    if (event.which === KEY.RIGHT) {
      
      speedX = 0;
    }
    if (event.which === KEY.UP) {
      speedY = -0;
    }
    if (event.which === KEY.DOWN) {
      speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  //reposition changes the postiton and movement of my box
  function repositionGameItem() {
    positionX += speedX; // update the position of the box along the x-axis
    positionY += speedY; // update the position of the box along the y-axis
  }
   // redraw helps my box come back into walker
  function redrawGameItem() {
    $("#walker").css("left", positionX);    // draw the box in the new location, positionX pixels away from the "left"
    $("#walker").css("top", positionY);    // draw the box in the new location, positionY pixels away from the "left"
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
