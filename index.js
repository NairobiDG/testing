/*for ( i=0; i<document.querySelectorAll(".drum").length; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", playAudio);

  //function handleClick(){
    //alert("You just clicked the button");
  //}

  function playAudio(){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  };
}*/
/*for ( i=0; i<document.querySelectorAll(".drum").length; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//the function is in de querySelectorAll-line instead of between te curly brackets
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  });
}*/


//detecting which button is clicked:
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    //this.style.color="white"; // 'this' selects the button that is clicked and changes its color

    var buttonInnerHTML = this.innerHTML; //'this' is the identity of the button(click) that triggers the eventlistener - innerHTML shows the innerHTML of the button that triggerd the click event
    makeSound(buttonInnerHTML);
  });
}


//detecting which letter is pressed on the keyboard:
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
});


//the function:
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}
