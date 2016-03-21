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
    taskType = $('#type').val();
    var description = $('#description').val();
    var priority = $('#priority').val();
    var person = $('#person').val();
    var dueDate = $('#dueDate').val();
    var people = ToDoList.people;
    var tasks = [];
    if (taskType === "homeTask") {
      tasks.push(new ToDoList.HomeTask(description, priority));
      // $('#homeTaskList').append('<h5>' + description + ': ' + priority + ' priority</h5>');
    } else if (taskType === "workTask") {
      tasks.push(new ToDoList.WorkTask(dueDate, description, priority, people[person]));
      // $('#workTaskList').append('<h5>' + description + ': ' + priority + ' priority</h5>');
    } else {
      tasks.push(new ToDoList.HobbyTask(description));
      // $('#hobbyTaskList').append('<h5>' + description + '</h5>');
    }

    var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
    console.log("Here are Thor's tasks: ");
    for(var task of thorTasks){
      $('#thorTaskList').append('<li>' + task + '</li>');
    }
    var lokiTasks = ToDoList.describeTasksForPerson(people.loki, tasks);
    console.log("Here are Loki's tasks: ");
    for(var task of lokiTasks){
      $('#lokiTaskList').append('<li>' + task + '</li>');
    }

    var jordanTasks = ToDoList.describeTasksForPerson(people.jordan, tasks);
    console.log("Here are Jordan's tasks: ");
    for(var task of jordanTasks){
      $('#jordanTaskList').append('<li>' + task + '</li>');
    }
  });
});
