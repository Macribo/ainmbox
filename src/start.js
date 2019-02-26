$(document).ready(function () {
  temp = document.getElementById("temp");

  temp.onclick = function () {
    console.log("temp greetings")
    req = temp.requestFullScreen || temp.webkitRequestFullScreen || temp.mozRequestFullScreen;
    req.call(temp);
    $('#btn-menu').fadeOut();
  }
});