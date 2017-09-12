'use strict';

var theForm = document.getElementById('task-form');
theForm.addEventListener('submit', submitTask);
var taskList = document.getElementById('task-list');

function Task(title, date){
  this.title = title;
  this.inputDate = date;
  if (date) {
    this.date = new Date(date);
  } else {
    this.date = new Date(9999, 12, 31);
  }
  this.id = this.title.toLowerCase().replace(/\s/g, '-');

  Task.all.push(this);
}

Task.prototype.render = function(){
  var $newLi = $('#template').clone();
  $newLi.attr('id', '').addClass('task-item');
  $newLi.find('h2')
        .text(this.title);
  $newLi.find('span')
        .eq(1).text(this.date);
  $newLi.find('.close')
        .attr('data', this.id)
        .on('click', deleteTask);

  $('#task-list').append($newLi);
  // var li = document.createElement('li');
  // var article = document.createElement('article');
  // var h2 = document.createElement('h2');
  // var p = document.createElement('p');
  // var dueSpan = document.createElement('span');
  // var dateSpan = document.createElement('span');
  // var left = document.createElement('div');
  // var right = document.createElement('div');
  // var closeBtn = document.createElement('div');
  // var clear = document.createElement('div')
  //
  // taskList.append(li);
  // li.append(article);
  // article.append(left);
  // article.append(right);
  // left.append(h2);
  // left.append(p);
  // right.append(closeBtn);
  // article.append(clear);
  //
  // article.className = 'task';
  // closeBtn.className = 'close';
  // clear.className = 'clearfix';
  // left.className = 'left';
  // right.className = 'right';
  //
  // h2.innerText = this.title;
  //
  // if (this.inputDate) {
  //   p.append(dueSpan);
  //   p.append(dateSpan);
  //   dueSpan.innerText = 'Due by: ';
  //   dateSpan.innerText = this.date.toLocaleDateString();
  // }
  //
  // closeBtn.innerHTML = '&times;';
  // closeBtn.setAttribute('data', this.id);
  // closeBtn.addEventListener('click', deleteTask);
}

Task.all = [];

Task.initializeTasks = function(){
  oldTasks.forEach(taskObj => new Task(taskObj.title, taskObj.date));
  listTasks();
}

function submitTask(event){
  event.preventDefault();
  var taskText = $('#task-form')
                   .find('[name="task"]')
                   .val();
  var taskDate = $('#task-form')
                   .find('[name="date"]')
                   .val();
  theForm.reset();
  $('.task-item').remove();
  new Task(taskText, taskDate);
  listTasks();
}

function listTasks(){
  // taskList.innerHTML = '';
  Task.all.sort((t1, t2) => {
    return t1.date - t2.date;
  });
  Task.all.forEach(task => task.render());
}

function deleteTask(event){
  var thisTask = event.target.getAttribute('data');
  var parentLi = event.target.parentElement.parentElement.parentElement;
  parentLi.remove();
  Task.all = Task.all.filter(task => task.id !== thisTask );
}

Task.initializeTasks();
