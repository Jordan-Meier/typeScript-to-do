class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string) {}
  markDone() {
    this.done = true;
  }
}

class HomeTask extends Task {}

var tasks = [];
tasks.push(new Task("Do the dishes.", "High"));
tasks.push(new Task("Buy chocolate.", "Low"));
tasks.push(new Task("Wash the laundry.", "High"));
tasks[0].markDone();
console.log(tasks);
