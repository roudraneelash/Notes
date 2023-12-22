const Event = require("events");

class GymEvent extends Event.EventEmitter {
  constructor(progress, goal) {
    super();
    this.progress = progress;
    this.goal = goal;
  }
  addExercise(excercise_name, progress) {
    this.progress += progress;
    if (this.goal == this.progress) {
      this.emit("goalCompleted");
    }
  }
}

module.exports = GymEvent;
