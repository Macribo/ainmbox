$(document).ready(function () {
  temp = document.getElementById("temp");

  temp.onclick = function () {
    console.log("temp greetings")
    req = temp.requestFullScreen || temp.webkitRequestFullScreen || temp.mozRequestFullScreen;
    req.call(temp);
    $('#btn-menu').fadeOut();
  }


  $('#btn-tall-order').on('touchend', function(){
    window.location.href = "https://macribo.github.io/tall-order/public/index.html";
  })
});