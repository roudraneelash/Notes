const Events = require("events");

// Custom event emitter class that extends EventEmitter
class UserEvent extends Events.EventEmitter {
  createPost() {
    console.log("Post is created");
    this.emit("createPost");
  }
}

// Instantiate the UserEvent class to create an event emitter object
const userEvent = new UserEvent();
