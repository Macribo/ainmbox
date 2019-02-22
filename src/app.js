
$(document).ready(function () {
  slideEvent = () => {
    switch (slideNumber) {

      case 0: console.log("First poem is...");
        $('.carousel').carousel(0);
        wait = 6000;
        break;

      case 1: console.log("sampla");
        wait = 6000;
        $('.carousel').carousel(1);

        break;
      case 2: console.log("according to legends");
        $('.carousel').carousel(2);
        break;

      case 3: console.log("nexto");
        $('.carousel').carousel(3);

        break;
      case 4: console.log("and then...");
        // wait = 1000;
        $('.carousel').carousel(4);

        break;

      case 5: console.log("and then...");
        // wait = 4000;
        $('.carousel').carousel(5);

        break;
      case 6: console.log("and then...");
        $('.carousel').carousel(6);

        break;
      case 7: console.log("and then...");
        $('.carousel').carousel(7);

        break;
      case 8: console.log("and then...");
        $('.carousel').carousel(8);

        break;
      case 9: console.log("and then...");
        $('.carousel').carousel(9);

        break;
      case 10: console.log("and then...");
        $('.carousel').carousel(10);

        break;

      default: break;

    }

  }

  var darkpic = './images/backgrounds/bg_Dark.png';


  $('.carousel').carousel({
    pause: false,
    interval: 0,

  })

  let playa = false;

  var slideNumber = 0;
  var wait = 4000;
  changeSlide = () => {

    setTimeout(changeSlide, wait);
    slideEvent();
    slideNumber++;
    ;
  }
  changeSlide();

  if (playa) {
    $('.carousel').carousel('cycle');

  } else {
    $('.carousel').carousel('pause');

  }

  aboutGo = () => {
    playa = true;
    $('.carousel').carousel(0);
    $("#holdSlide").fadeTo("slow", 1);
    document.getElementById('bg-img1').src = darkpic;
  }

  $(".about").click(function () {

    aboutGo();

  });
});

