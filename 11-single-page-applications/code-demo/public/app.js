'use strict';

page('/', homePage);
page('/tasks', getAllTasks);
page('/tasks/:id([0-9]+)', getOneTask);
page('/new-task', populateForm);
page('*', http404);
page();

function homePage(){
  $('#fill-with-data').empty();
  $('#fill-with-data').append('<h1>This is the home page!</h1>');
}
function getAllTasks(){
  $('#fill-with-data').empty();
  $.get('/api/tasks', function(data){
    data.forEach(row => {
      let $temp = $('#temp').html();
      let compileFunc = Handlebars.compile($temp);
      $('#fill-with-data').append(compileFunc(row));
    });
  })
}
function getOneTask(ctx){
  $('#fill-with-data').empty();
  $.get(`/api/tasks/${ctx.params.id}`, function(data){
    let $temp = $('#temp').html();
    let compileFunc = Handlebars.compile($temp);
    $('#fill-with-data').append(compileFunc(data[0]));
  })
}
function populateForm(){
  $('#fill-with-data').empty();
  let $theForm = $('#form-temp').html();
  $('#fill-with-data').append($theForm);
  $('#the-form').on('submit', formSubmission);
}
function formSubmission(event) {
  event.preventDefault();
  let taskName = $(this).find('[name="task"]').val()
  $.post('/api/tasks', {
    title: taskName,
    completed: false
  }, function(response){
    console.log(response)
  }).done(() => {
    this.reset();
  })
}
function http404(){
  $('#fill-with-data').empty();
  $('#fill-with-data').append('<h1>NOT FOUND! NOOOOOOOO!</h1>');
}
