const GymEvent = require("./gym");

const gym = new GymEvent(0, 100);

function notification() {
  console.log("Congratulations on completing your milestone!!");
}

gym.addListener("goalCompleted", notification);

gym.addExercise("Running", 30);
gym.addExercise("WeightLifting", 40);
gym.addExercise("Yoga", 30);
