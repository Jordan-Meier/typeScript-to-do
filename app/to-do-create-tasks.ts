/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

$(document).ready(function () {
  $('#taskForm').hide();
  var taskType;
  $('#type').change(function (){
    taskType = $('#type').val();
    if (taskType === "workTask") {
      $('#taskForm').show();
      $('.description').show();
      $('.priority').show();
      $('.dueDate').show();
      $('.person').show();
    } else if (taskType === "homeTask") {
      $('#taskForm').show();
      $('.description').show();
      $('.priority').show();
      $('.dueDate').hide();
      $('.person').hide();
    } else {
      $('#taskForm').show();
      $('.description').show();
      $('.priority').hide();
      $('.dueDate').hide();
      $('.person').hide();
    }
  });


  $('#addTask').click(function() {
    var description = $('#description').val();
    var priority = $('#priority').val();
    var person = $('#person').val();
    var dueDate = $('#dueDate').val();
    var homeTasks = [];
    var workTasks = [];
    var hobbyTasks = [];
    if (taskType === "homeTask") {
      var newHomeTask = homeTasks.push(new ToDoList.HomeTask(description, priority));
      $('#homeTaskList').append('<h5>' + description + ': ' + priority + ' priority</h5>');
    } else if (taskType === "workTask") {
      workTasks.push(new ToDoList.WorkTask(dueDate, description, priority, person));
      $('#workTaskList').append('<h5>' + description + ': ' + priority + ' priority</h5>');
    } else {
      hobbyTasks.push(new ToDoList.HobbyTask(description));
      $('#hobbyTaskList').append('<h5>' + description + '</h5>');
    }
    console.log(homeTasks);
    console.log(workTasks);
    console.log(hobbyTasks);
  });
});
