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
      homeTasks.push(new ToDoList.HomeTask(description, priority));
    } else if (taskType === "workTask") {
      workTasks.push(new ToDoList.WorkTask(dueDate, description, priority, person));
    } else {
      hobbyTasks.push(new ToDoList.HobbyTask(description));
    }
    console.log(homeTasks);
    console.log(workTasks);
    console.log(hobbyTasks);
  });
});








// var people = ToDoList.people;
//
// var tasks = [];
// tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
// tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.jordan));
// tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
//
// tasks.push(new ToDoList.HobbyTask("Practice origami."));
// tasks.push(new ToDoList.HobbyTask("Bake a pie."));
//
// var today = new Date();
// var tomorrow = new Date();
// tomorrow.setDate(today.getDate() + 1);
// var nextDay = new Date();
// nextDay.setDate(today.getDate() + 2);
//
// tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
// tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
// tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
// tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));
//


  // console.log(tasks);
  //
  //
  // var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
  // console.log("Here are Thor's tasks: ");
  // for(var task of thorTasks) {
  //   console.log(task);
  // }
