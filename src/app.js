// import TypeWriting from 'typewriting';

let englishProse = [
  `I am the wind which breaths upon the sea,`,
  `I am the wave of the ocean,`,
  `I am the murmur of the billows,`,
  `I am Stag of Seven Tines,`,
  `I am a Hawk on a Cliff,`,
  `I am a beam of the sun,`,
  `I am the fairist of plants,`,
  `I am a wild boar in valor,`,
  `I am a salmon in the water,`,
  `I am a lake in the plain,`,
  `I am a word of science,`,
  `I am the point of the lance of battle`,
  `(I am) a Song on a Spear,`,
  `an Enchantments of Wind.`



];

function goToSlide(number) {
  $("#carousel").carousel(number);
  // sl


}



let currentLine = 0;
$(document).ready(function () {

  let verse;
  nextEng = (verse) => {
    $('#demo').fadeTo("slow", 1);

    if (verse === 0) {

      //show 3 lines of the poem together on one slide

      setTimeout(function () {
        $('#demo').text(englishProse[2]);
        typeWriter("#demo", "true", 80);
        console.log(currentLine);
        // $('#demo2', fadeOut());

      }, 8000);

      setTimeout(function () {

        $('#demo').text(englishProse[1]);
        typeWriter("#demo", "true", 80);
        console.log(currentLine);
        // $('#demo', fadeOut());
      }, 4000);


      $('#demo').text(englishProse[0]);
      // return msg;
      typeWriter("#demo", "true", 80);
      console.log(currentLine);

    }

    else {

      $('#demo').text(englishProse[verse]);
      // return msg;
      typeWriter("#demo", "true", 80);
      console.log(currentLine);
      currentLine++;
    }
  };

  // $('.terminal').typewriting("Hello World!", {

  //   // default: 150
  //   "typing_interval": 200,

  //   // default: 0.7s
  //   "blink_interval": "1s",

  //   // default: black
  //   "cursor_color": "#00fd55"

  // });

  slideEvent = () => {
    switch (slideNumber) {

      case 0: console.log("First poem is...");
        goToSlide(0);
        wait = 16000;
        break;

      case 1: console.log("an dán");
        goToSlide(1);
        nextEng(0);


        break;
      case 2: console.log("according to legends");
        wait = 6500;
        goToSlide(2);
        nextEng(3);

        break;

      case 3: console.log("nexto");
        goToSlide(3);
        nextEng(5);

        break;
      case 4: console.log("and then...");
        // wait = 1000;
        goToSlide(4);

        nextEng(6);

        break;

      case 5: console.log("and then...");
        // wait = 4000;
        goToSlide(5);

        break;
      case 6: console.log("and then...");
        goToSlide(6);

        break;
      case 7: console.log("and then...");
        goToSlide(7);

        break;
      case 8: console.log("and then...");
        goToSlide(8);
        wait = 15000;

        break;
      case 9: console.log("and then...");
        goToSlide(9);
        wait = 6000;

        break;
      case 10: console.log("and then...");
        goToSlide(10);

        break;


      case 11: console.log("sampla");
        wait = 6000;
        goToSlide(11);

        break;
      case 12: console.log("according to legends");
        goToSlide(12);

        break;

      case 13: console.log("nexto");
        goToSlide(13);

        break;
      case 14: console.log("and then...");
        // wait = 1000;
        goToSlide(14);

        break;

      case 15: console.log("and then...");
        // wait = 4000;
        goToSlide(15);

        break;
      case 16: console.log("and then...");
        goToSlide(16);

        break;
      case 17: console.log("and then...");
        goToSlide(17);

        break;
      case 18: console.log("and then...");
        goToSlide(18);

        break;
      case 19: console.log("and then...");
        goToSlide(19);

        break;
      case 20: console.log("and then...");
        goToSlide(20);

        break;

      case 21: console.log("sampla");
        wait = 6000;
        goToSlide(21);

        break;
      case 22: console.log("according to legends");
        goToSlide(22);
        break;

      case 23: console.log("nexto");
        goToSlide(23);

        break;
      case 24: console.log("and then...");
        // wait = 1000;
        goToSlide(24);

        break;

      case 25: console.log("and then...");
        // wait = 4000;
        goToSlide(25);

        break;
      case 26: console.log("and then...");
        goToSlide(26);

        break;
      case 27: console.log("and then...");
        goToSlide(27);

        break;
      case 28: console.log("and then...");
        goToSlide(28);

        break;
      case 29: console.log("and then...");
        goToSlide(29);

        break;
      case 30: console.log("and then...");
        goToSlide(30);

        break;

        break;
      case 31: console.log("and then...");
        goToSlide(31);

        break;

      default: break;

    }

  }

  var darkpic = './images/backgrounds/bg_Dark.png';


  goToSlide({
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
    goToSlide('cycle');

  } else {
    goToSlide('pause');

  }

  aboutGo = () => {
    $('#btn-menu').fadeOut();
    playa = true;
    goToSlide(0);
    $("#holdSlide").fadeTo("slow", 1);
    document.getElementById('bg-img1').src = darkpic;
  }

  $(".about").click(function () {
    // goToSlide(0);
    slideNumber = 0;
    aboutGo();
    nextEng();
  });
});

