// import TypeWriting from 'typewriting';

let englishProse = [
  `I am the wind which breaths upon the sea,`,
  `I am the wave of the ocean,`,
  `I am the murmur of the billows,`,
  `I am Stag of Seven Tines,`,
  `I am a Hawk on a Cliff,`,
  `I am a beam of the sun,`,
  `I am the fairest of plants,`,
  `I am a wild boar in valor,`,
  `I am a salmon in the water,`,
  `I am a lake in the plain,`,
  `I am a word of science,`,
  `I am the point of the lance of battle`,
  `(I am) a Song on a Spear;`,
  `an Enchantment of Winds.`,
  ``
];

//go fullscrean on about click

var elem = document.getElementById("about");

elem.onclick = function () {
  req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
  req.call(elem);
}


function goToSlide(number) {
  $("#carousel").carousel(number);
  // sl


}




/*dammit it's better without animated text. to do remove.*/
$(document).ready(function () {

  nextEng = (verse) => {

    if (verse === 0) {
      console.log("verse " + verse);
      $('#demo').text(' ');

      //show 3 lines of the poem together on one slide

      setTimeout(function () {
        $('#demo').text(' ');

        $('#demo').text(englishProse[2]);
        // typeWriter("#demo", "true", 40);

      }, 8000);


      setTimeout(function () {

        $('#demo').text(' ');
        $('#demo').text(englishProse[1]);
        // typeWriter("#demo", "true", 40);
        // clearLine();
      }, 4000);
      // clearLine();

      $('#demo').text(' ');

      $('#demo').text(englishProse[0]);
      // return msg;
      // typeWriter("#demo", "true", 40);

    }
    else if (verse === 11) {
      //show 4 lines of the poem together on one slide
      console.log("verse " + verse);

      setTimeout(function () {
        $('#demo').text('');
        // clearLine();
        $('#demo').text(englishProse[6]);
        // typeWriter("#demo", "true", 40);

      }, 8000);



      setTimeout(function () {
        $('#demo').text('');

        // clearLine();
        $('#demo').text(' ');

        $('#demo').text(englishProse[5]);
        // typeWriter("#demo", "true", 40);

      }, 6000);


      setTimeout(function () {
        // clearLine();
        $('#demo').text(' ');

        $('#demo').text(englishProse[4]);
        // typeWriter("#demo", "true", 40);
      }, 3000);

      $('#demo').text(' ');

      $('#demo').text(englishProse[3]);
      // return msg;
      // typeWriter("#demo", "true", 40);

    }
    else if
      (verse === 13) {
      console.log("verse " + verse);

      //show 3 lines of the poem together on one slide

      setTimeout(function () {
        $('#demo').text(' ');

        $('#demo').text(englishProse[9]);
        // typeWriter("#demo", "true", 40);

      }, 6000);


      setTimeout(function () {
        // clearLine();
        $('#demo').text(' ');

        $('#demo').text(englishProse[8]);
        // typeWriter("#demo", "true", 40);
      }, 3000);

      $('#demo').text('');

      $('#demo').text(englishProse[7]);
      // return msg;
      // typeWriter("#demo", "true", 40);


    }

    else if (verse === 14) {

      console.log("verse " + verse);

      //show 3 lines of the poem together on one slide


      setTimeout(function () {


        $('#demo').text(' ');
        $('#demo').text(englishProse[11]);
        // typeWriter("#demo", "true", 40);
      }, 4000);

      $('#demo').text(' ');

      $('#demo').text(englishProse[10]);
      // return msg;
      // typeWriter("#demo", "true", 40);



    }


    else if (verse === 15) {

      console.log("verse " + verse);

      //show 3 lines of the poem together on one slide


      setTimeout(function () {

        $('#demo').text(' ');
        $('#demo').text(englishProse[13]);
        // typeWriter("#demo", "true", 40);
      }, 3000);


      $('#demo').text(englishProse[12]);
      // return msg;
      // typeWriter("#demo", "true", 40);



    }




    else if (verse === 31) {
      $('#demo').text('');

      setTimeout(function () {
        $('#demo').css('font-family', 'aonchlo');

        console.log("verse " + verse);
        $('#demo').text('');

        $("#demo").fadeTo("slow", 1);

        $('#demo').text('Uaireanta, is gníomh teangach é;  machnamh.');
        // return msg;
        $('#anseo').fadeTo("slow", 1);

        // typeWriter("#demo", "true", 40);
      }, 3000);


    }

    else {

      $('#demo').text(englishProse[verse]);
      // return msg;
      // typeWriter("#demo", "true", 40);


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
  var amergin = document.getElementById("amergin");
  slideEvent = () => {
    switch (slideNumber) {

      case 0: console.log("The oldest Gaelic poem");
        goToSlide(0);
        break;

      case 1: console.log("an dán");
        goToSlide(1);



        break;
      case 2: console.log("Fadó Fadó in Éireann");
        wait = 6500;
        goToSlide(2);
        break;

      case 3: console.log("Mac Breogan mac Bile");
        goToSlide(3);

        break;
      case 4: console.log("Amergín");
        // wait = 1000;
        goToSlide(4);


        break;

      case 5: console.log("Tuatha Dé Dannan...");
        // wait = 4000;
        goToSlide(5);

        break;
      case 6: console.log("Na Formóraigh.");
        goToSlide(6);

        break;
      case 7: console.log("Fórsaí Tuaithe Dé Dannan");
        goToSlide(7);

        break;
      case 8: console.log("Stoirm");
        goToSlide(8);


        break;
      case 9: console.log("filíocht...");
        goToSlide(9);
        console.log('music playing');
        setTimeout(function () {
          wait = 11000;

        }, 3000);

        break;
      case 10: console.log("and then...");
        amergin.play();
        goToSlide(10);
        setTimeout(function () {
          nextEng(0);
          $("#demo").fadeTo("slow", 1);


        }, 2000)
        break;


      case 11: console.log("versa II");
        goToSlide(11);
        // alert("should be here");
        nextEng(11);//should be 11

        break;
      case 12: console.log("according to legends");
        goToSlide(12);
        nextEng(13);

        wait = 8000;
        break;

      case 13: console.log("versa 1");
        goToSlide(13);
        nextEng(14);

        break;
      case 14: console.log("versa 2");

        goToSlide(14);
        nextEng(15);

        break;

      case 15: console.log("versa 3");
        wait = 5000;
        goToSlide(15);
        $('#demo').fadeOut();

        break;
      case 16: console.log("versa 3");
        goToSlide(16);
        wait = 4000;

        break;
      case 17: console.log("versa 4");
        goToSlide(17);
        wait = 6000;

        break;
      case 18: console.log("versa 5");
        goToSlide(18);

        break;
      case 19: console.log("versa 6");
        goToSlide(19);


        break;
      case 20: console.log("and then...");
        goToSlide(20);

        break;

      case 21: console.log("sampla");
        // wait = 6000;
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
        $("#demo").fadeTo("slow", 1);
        nextEng(31);

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

  var darkpic = './assets/images/backgrounds/bg_Dark.png';


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

