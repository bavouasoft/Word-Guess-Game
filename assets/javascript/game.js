let wordslist = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
pickrandom = function() {
  let wordpick = wordslist[Math.floor(Math.random() * wordslist.length)];
  return wordpick;
};

let rnd = pickrandom();

let win = 0;
let lost = 0;
let leftguess = 9;
let capture = "&";

console.log("rand : " + rnd);

$(document).keypress(function(event) {
  let capture = String.fromCharCode(event.which);

  let entered = $("#guesssofar").text();

  entered = entered + capture;

  $("#guesssofar").text(entered);

  update(capture);
});

update = function(capture) {
  if (capture === rnd) {
    win++;
  }
  leftguess--;

  let exit = leftguess === -1 || capture === rnd;
  if (exit) {
    if (leftguess === -1) {
      lost++;
    }

    leftguess = 9;
    $("#guesssofar").text("");
    rnd = pickrandom();
    console.log("rand : " + rnd);
  }
  $("#win").text(win);

  $("#lost").text(lost);

  $("#guessleft").text(leftguess);
};
