//<-** Main centering **->//
//
// let mainHeight = document.getElementsByTagName("body")[0].offsetHeight;
//
// document.documentElement.style.setProperty('--vh', `${mainHeight/2}px`);

//<-** Countdown **->//

var countDown = new Date('Apr 24, 2019 17:00:00').getTime();
var x = setInterval(function(){
  var now = new Date().getTime();
  var distance = countDown - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 *  60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // document.getElementById("dateCountDown").innerHTML = formatDigits(days) + " : " + formatDigits(hours) + " : " + formatDigits(minutes) + " : " + formatDigits(seconds) + "";

  document.getElementById("dateCountDownDays").innerHTML = formatDigits(days)
  document.getElementById("dateCountDownHours").innerHTML = formatDigits(hours)
  document.getElementById("dateCountDownMinutes").innerHTML = formatDigits(minutes)
  document.getElementById("dateCountDownSeconds").innerHTML = formatDigits(seconds)

  if (distance < 0) {
    clearInterval(x);
    document.getElementbyId("dateCountDown").innerHTML = "The day has arrived";
  }
});

function formatDigits(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number + "";
  }
}
