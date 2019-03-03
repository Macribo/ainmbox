(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
 //jshint esversion:6 
$(document).ready(function(){
    $('#output').hover(function(){
    $('#bearla').text('Manifesto');
    $(this).css('color','#e35ee5');
    }
);
    $('#output').mouseout(function(){
        $('#bearla').text('');
        $(this).css('color','#731715');
    });
    document.querySelector('#bckBtn').onmouseenter = (event) => {
        document.querySelector('#bearla').innerHTML = 'back';
    };
    document.querySelector('#fwdBtn').onmouseenter = (event) => {
        document.querySelector('#bearla').innerHTML = 'Mouseover Irish text to translate';
    };
//    $('#button').hover(function(){
//                   $('#bearla').text('push');
//    });
 
     

    $('#fwdBtn').click(function(){

        $('#output2 span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
             $('div').slidedown(); 
    });

        $('#output2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#222222');

    });
});

    $('#bckBtn').click(function(){

        $('#output2 span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
             $('div').slidedown(); 
    });

        $('#output2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#222222');

    });
});

   $('#play').click(function(){

        $('#output2 span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
             $('div').slidedown(); 
    });

        $('#output2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#222222');

    });
});


        $('#output2 span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
    });

        $('#output2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#222222');

    });
 





   $('#deirGeaga1').hover(function(){
    $('#bearla').text('The Other Land');
    $(this).css('color','#e35ee5');
    }
);


    $('#deirGeaga1').mouseout(function(){
        $('#bearla').text('');
        $(this).css('color','#730a0a');
    });


 
     $('#btnTalk').click(function(){ 
    

         $('#deirGeaga2 span').hover(function(){
            console.log("hovvrin!");
            
            $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
    });

        $('#deirGeaga2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#222222');


    });
     });
    


   /*    
       $('#deirGeaga2').hover(function(){
     $('#bearla').text('Welcome');
        
           $(this).css('color','#e35ee5');
    });

        $('#deirGeaga2').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');


    });*/




















});


},{}],2:[function(require,module,exports){
//jshint esversion:6

let storyTexts = require("./story-texts"); //can't use capital letters with browswerify 

let story = 2;
var map = [];
var starting = true;

if(document.documentElement.clientWidth <768){
console.log("mobile/device settings");
}
else{
        console.log("desktop settings");
}

        var shorttrans = false;

//Initialize the gameMessage
var gameMessage = ``;

//Query Selectors:
var hum1 = document.querySelector('#hum1');

let rightPanel = document.querySelector("#right-panel");

var output2 = document.querySelector("#output2");

var fwdBtn = document.querySelector("#fwdBtn");
var bckBtn = document.querySelector('#bckBtn'); 

var playBtn = document.querySelector('#play');
fwdBtn.style.cursor = "pointer";
//Event Listeners:
fwdBtn.addEventListener("click", fwdBtnHandler, false);
bckBtn.addEventListener("click", bckBtnHandler, false);
playBtn.addEventListener("click", playHandler, false);




//Dispay the player's location



//Event Handlers
    function playHandler(){
    window.location.replace("http://ribodev.com//3ire3ile/src/naGeaga/geaga.html");
    }
 // function mouseoverHandler(){
   // fwdBtn.style.backgroundImage='("../images/btnBg3.png")';
//  } 



    function bckBtnHandler(){

        stepBack();
    }


    function fwdBtnHandler(){

           console.log("saying hi, from fwdBtnHandler.");

      output2.style.animation='fade-out 0.25s forwards'; 
        stepFwd();
        playGame();
 
}

    function narrate(story){
        output2.innerHTML = storyTexts[story];
            if(output2.style.opacity===0){
                    output2.style.animation="delay-fade-in 0.5s forwards";
            }else{
        output2.style.opacity=0;
                    output2.style.animation="delay-fade-in 0.5s forwards";
            
    }
    }
    //test

    function stepBack(){
        story--;
        playGame();
    }
    function stepFwd(){
        story++;
        playGame();
    }
function playGame()
{

    narrate(story); 
    console.log("hello narrate!");
    progressStory(story);
    console.log(story);
}

    function progressStory(){


        if(story>1){
            bckBtn.style.display='inline';
            bckBtn.style.animation='delay-fade-in 1s';
        fwdBtn.style.animation='slide-button-right 1s forwards';
        console.log("hello bckBtn?");
        }
    else
    {
        //I want this, it's not working yet:
        //bckBtn.style.animation='fade-out 0.25s forwards';
        //instead, I'm just setting display to 'none'
        bckBtn.style.display='none';
        fwdBtn.style.animation='slide-button-left 1s forwards';

    }
        if (story>2){
            
       hum1.play();
        }
    //end of manifesto - begin game y/n?
if (story===5){
        playBtn.style.display='inline';
        // fwdBtn.style.animation='fade-out 0.25s forwards';
        fwdBtn.style.visibility='hidden';
        playBtn.style.animation='fade-in 1s';
        console.log("story === 5");   
}
if(story===0){



}
if(story===2){
        bckBtn.style.display='none';
}
   
    if(story===3){
        
    }

if(story===4){
        //update button styles if player is coming back from events on story 5 
        fwdBtn.style.left='-42px';
        fwdBtn.style.display='inline';
        fwdBtn.style.visibility='visible';
        playBtn.style.display='none';
    }

}



if (starting){
progressStory();
playGame();
        output2.innerHTML = storyTexts[story];
}



},{"./story-texts":3}],3:[function(require,module,exports){
//jshint esversion:6
module.exports = [

//0
`
`,

``,
    
  

    
//2

`<span id='A Question...'>Ceist...</span>
`,

//3<span id='One cannot'>Ní feidir</span> <span id='think'>smaoineamh</span> <span id='in Irish'>i nGaeilge</span>, <span id='in English'>i mBearla</span>.




`<span id='This language'>Tá an teanga seo</span><span id='is involved with'> bainteach le</span>
<span id='writing and speaking'> scriobh agus caint,
</span><br/>
<br/>
<div style="animation: delay-fade-in 2s;">
<span id='but'> ach </span>
<span id='is it used'>an usaidtear</span><span id='in the mind'> san aigne í </span><span id='also?'>freisin?</span>
</div>`,

////9 <div style="animation:delay-fade-in 2s;">
    /*
 `<span id='Secondly'> Sa dara h-áit</span>, 
<span id='There is'>tá</span> <span id='a bit of Irish'>Gaeilge éigin</span> <span id='posessed by'>ag</span> <span id='every'>gach</span> <span id='English-speaker'>Bearl-cainteoir</span> <span id='in the country'>sa tír</span>.
<span id='A factor'>Gníomhadóir</span><span id='unknown'> anaithnid</span><span id='this is'> é seo</span>,<span id='which puts'> a cuireann</span><span id='off accuracy'> dó rath</span><span id='calcu- lations'> áireamhíocht</span><span id='based on Irish Speakers'> bunaithe ar 'Irish Speakers'</span>
<span id='It is not'> Ní</span> <span id='a subject'>ábhar </span><span id='of mockery'>fachnaoid</span> <span id='those'>iad</span> <span id='the'>na</span><span id='so-called few words'> cúpla focal</span>. <span id='They are seeds'>Síolta íad</span>.

`,
*/
//10
`
<span id='Asserts'>Dearbhín</span> <span id='this manifesto:'>an forógra seo</span>: <ul>

<div style="animation:delay-fade-in 1s;">
<li>
<span id='One cannot'>Nach feidir</span><span id='give a neutral account'> tuairisc neodrach a thabhairt</span><span id='of the connections'> ar na caidreamh </span><span id='between'>idir</span><span id='language'> teanga</span><span id='and mind'> agus meabhair</span>
</li>
</div>
<br>

<div style="animation:delay-fade-in 3s;">
<li>


<span id='A shared virtual space could'>D'feidach spás fiorúl coiteannta</span><span id='support'> tacú </span> <span id='the development of'>le forbairt </span><span id='these connections'>na caidreamh sin</span>
</li>


</li>

</div>
    


</ul>

`,
//11
`
<span id='Would'>Ar</span> <span id='you like to'>mhaith leat</span> <span id='give it a try?'> tríal a bhainnt as</span>?
`,

//12
`
<span id='what'>Cad</span><span id='is your name'> is ainm dhuit?</span>
`, 
  
//13
  `
<span id='Play'>Imir </span><span id='for'>ar shon</span> :
  `, 
    
//18
  `
  `, 
    
//19
`
`



/*
  * <span id='It is not'>Ní </span><span id='an absence'>easpa</span> <span id='of interest'> spéis</span>, <span id='nor ability'>ná cumas</span>, <span id='nor will'>ná thoill</span>
<span id='which'>is</span> <span id='is the cause'>cúis</span><span id='of our'> len ár</span> <span id='language question'>dúcheist teanga</span>
<*/

];

},{}]},{},[2,3,1]);
