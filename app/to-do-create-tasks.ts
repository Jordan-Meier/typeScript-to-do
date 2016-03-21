/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

$(document).ready(function () {
  var taskType;
  $('#workTaskForm').hide();
  $('#homeTaskForm').hide();
  $('#hobbyTaskForm').hide();
  $('#type').change(function (){
    taskType = $('#type').val();
    if (taskType === "workTask") {
      $('#workTaskForm').show();
    } else if (taskType === "homeTask") {
      $('#homeTaskForm').show();
    } else {
      $('#hobbyTaskForm').show();
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
      workTasks.push(new ToDoList.WorkTask(dueDate, description, priority, people.person));
    } else {
      hobyTasks.push(new ToDoList.HobbyTask(description));
    }
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
