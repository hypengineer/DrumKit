$(".drum").click(function () {
  PlaySound($(this).attr("id"));


})



$(document).keypress(function (e) {

  PlaySound(e.key.toLowerCase());
})



$(".drum").mouseenter(function () {
  PlaySound($(this).attr("id"));
})

function Animate(id) {
  $("#" + id).addClass("pressed");
  setTimeout(function () { $("#" + id).removeClass("pressed") }, 250);
}

function PlaySound(id) {

  if (id == "w") {

    Animate(id);
    var audio = new Audio("sounds/crash.mp3")
    audio.play();


  }

  else if (id == "a") {
    Animate(id);
    var audio = new Audio("sounds/kick-bass.mp3")
    audio.play();
  }

  else if (id == "s") {
    Animate(id);
    var audio = new Audio("sounds/snare.mp3")
    audio.play();
  }

  else if (id == "d") {
    Animate(id);
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play();
  }

  else if (id == "j") {
    Animate(id);
    var audio = new Audio("sounds/tom-2.mp3")
    audio.play();
  }

  else if (id == "k") {
    Animate(id);
    var audio = new Audio("sounds/tom-3.mp3")
    audio.play();
  }
  else if (id == "l") {
    Animate(id);
    var audio = new Audio("sounds/tom-4.mp3")
    audio.play();
  }
}

