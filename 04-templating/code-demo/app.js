'use strict';

var sourceHTML = $('#post-template').html();
var actualTemplate = Handlebars.compile(sourceHTML);
function Article(){
  this.title = 'The Title';
  this.author = 'Me';
  this.body = '<p>&copy;A ptag with some text</p>';
}
var someArticle = new Article();
var newRawHTML = actualTemplate(someArticle);
$('body').append(newRawHTML);

// What follows will also work
/*
var sourceHTML = $('#post-template').html();
var actualTemplate = Handlebars.compile(sourceHTML);
var someArticle = {
  title: 'The Title',
  author: 'Me',
  body: `<p>A ptag with some text</p>`
}
var newRawHTML = actualTemplate(someArticle);
$('body').append(newRawHTML);
*/

// This too also works but I STRONGLY FIERCELY PASSIONATELY recommend against it
// function Article(){
//   this.title = 'The Title';
//   this.author = 'Me';
//   this.body = '<p>A ptag with some text</p>';
// }
// $('body')
//   .append(Handlebars
//             .compile($('#post-template')
//                         .html())(new Article()));
