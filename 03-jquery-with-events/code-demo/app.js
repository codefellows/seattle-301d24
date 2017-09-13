'use strict';

$('#button').on('click', function(event){
  event.stopPropagation();
  $(this)
    .css({position: 'absolute'});
  if ($(this).position().left < 10) {
    $(this).animate({
      left: ($(window).width() - $(this).width()) + 'px'
    }, 5000).text('On the right!');
  } else {
    $(this).animate({
      left: '8px'
    }, 5).text('On the left!');
  }
})

$('#section').on('click', function(){
  $(this).animate({
    backgroundColor: 'red'
  });
})

$('#scroll-down').on('click', function(){
  $('html, body').animate({
    scrollTop: $('#here').position().top
  })
})

$('#to-top').on('click', function(){
  $('html, body').animate({
    scrollTop: 0
  })
})
