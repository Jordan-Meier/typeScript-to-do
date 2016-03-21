/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  var jordan: ToDoList.IPerson = {
    name: "Jordan",
    email: "jm@email.com"
  }

  var thor: ToDoList.IPerson = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com"
  }

  var loki: ToDoList.IPerson = {
    name: "God of mischief",
    email: "loki@geocities.com",
    phone: "555-666-7777"
  }

  export var people = {
    "jordan": jordan,
    "thor": thor,
    "loki": loki,
  };
}
