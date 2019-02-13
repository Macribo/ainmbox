// alert("anseo");

// let slideshowlength = $(".item").length;
$(document).ready(function () {
  let current = $('.active').index();


  // alert("hey");
  aboutGo = () => {
    $(".amergin").fadeTo("slow", 1)

  }
  $(".about").click(function () {
    console.log("hey" + current);

    $('.carousel').carousel(0);
    $("#splash").fadeOut();

    setTimeout(aboutGo(), 4000);

  });


  /* about carousel */

  $('.carousel').carousel({
    pause: true,
    interval: 4000,
  })
  // runSpecificSlideBehaviors = (current) => {

  //   if ($('.carousel').carousel(0 || 1 || 2)) {
  //     console.log("0 1 2...")
  //   }
  //   else
  //     if ($('.carousel').carousel(3 || 4 || 5)) {
  //       console.log("3 4 5...")
  //     }
  // }
  // runSpecificSlideBehaviors(current)

});
