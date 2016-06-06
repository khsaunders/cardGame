$(function(){
  'use strict';
});

//Timer Function Attempt 1//
// this code provided in a Stackoverflow forum. user nhahtdh provided this response. http://stackoverflow.com/questions/6341774/keep-track-of-how-much-time-is-spent-showing-certain-elements-on-the-page.

// var start = newDate();
// var end = newDate();
//
// var elapsedMins = end - start;
//
// var seconds = Math.round (elapsedMins/1000);
// var minutes = Math.round (seconds/60);
//
// var sec = TrimSecondsMinutes (seconds);
// var mins = TrimSecondsMinutes (minutes);
//
// function TrimSecondsMinutes (elapsed); {
//     if (elapsedMins >= 60)
//     return (elapsed);
// }

//Did not work

//Attempt 2 Card Flipping

// $(".time-count").load(function()
// this.getTime
// $("div").append(getTime);

//
// $('.card-container').on('click',function(){
//   $('.card-face, .icon').addClass('showing');
//   // $('.icon').addClass('showing');
//
// });

//TIMER

var count = 0
var counter = setInterval(timer, 1000);//tells it to count by 1 second (or 1000 milliseconds)

function timer (){
  count += 1;
  if (count == 240000) //this is the end point. 4 mins.

  clearInterval(counter);
}

document.getElementById('time-count').innerHTML= count;



//CARD FLIPPING

var track = 0;

$('li').click (function(flip){
track++

  if (track === 1) {
  $(this).addClass('flipped');
  $(this).children().css('opacity', '1'); //lets first card flip
  console.log(track);
  }

  else if (track % 2 === 0) {
    $(this).addClass('flipped');
    $(this).children().css('opacity', '1')//lets second card flip
    console.log(track);
  }

  else if (track % 2 === 0 && $(this).attr('value') !== $('li').attr('value')) {
  $(this).removeClass('flipped');
  console.log(track);

}

  else {


  }

//   else ($(this).attr('value') === $('this').attr('value')){
//   $(this).removeClass('flipped')
//   $(this).addClass('permanent');
// }
  });


  // $(this).attr('value') === $('li').attr('value')) {


  // else if (track === 2) {
  // $(this).addClass('flipped')
  // $(this).children().css('opacity', '1');
  // console.log(track)
  // }
  //
  // else if ($(this).val() == ($('li').val ())){
  // $(this).removeClass('flipped')
  // $(this).addClass('permanent');


  // else if (track === 2 && $(this).attr('value') !== $('li').attr('value')) {
  // $(this).removeClass('flipped');
  // $(this).addClass('no-match')
  // console.log(track);

// }
//
// else {
//   $(this).removeClass('flipped')
//   $(this).addClass('permanent')
//   $(this).children().css('opacity', '0');
// }



var hi = 'hello'
console.log(hi);
