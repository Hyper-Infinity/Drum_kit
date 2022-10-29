var btns = document.querySelectorAll("button.drum");

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonflash(event.key);
});

for (var i = 0; i < 7; i++) {
  btns[i].addEventListener("click", function () {
    var ch_m = this.innerHTML;
    makeSound(ch_m);
    buttonflash(ch_m);
  });
}

function makeSound(ch) {
  if (ch === "w") {
    var Audio1 = new Audio("sounds\\tom-1.mp3");
    Audio1.play();
  } else if (ch === "a") {
    var Audio1 = new Audio("sounds\\tom-2.mp3");
    Audio1.play();
  } else if (ch === "s") {
    var Audio1 = new Audio("sounds\\tom-3.mp3");
    Audio1.play();
  } else if (ch === "d") {
    var Audio1 = new Audio("sounds\\tom-4.mp3");
    Audio1.play();
  } else if (ch === "j") {
    var Audio1 = new Audio("sounds\\snare.mp3");
    Audio1.play();
  } else if (ch === "k") {
    var Audio1 = new Audio("sounds\\crash.mp3");
    Audio1.play();
  } else if (ch === "l") {
    var Audio1 = new Audio("sounds\\kick-bass.mp3");
    Audio1.play();
  }
}

function buttonflash(key)
{
    var k = document.querySelector("." + key);
    k.classList.add("pressed");
    setTimeout(function()
    {
        k.classList.remove("pressed");
    }, 200);
}
