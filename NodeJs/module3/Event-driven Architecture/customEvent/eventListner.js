const UserEvent = require("./userEvent");

// Instantiate the UserEvent class to create an event emitter object
const userEvent = new UserEvent();

// Event handler functions
function saveToDB() {
  console.log("Saving post to DB");
}

function pushNotifications() {
  console.log("Push Notifications");
}

function updateFeed() {
  console.log("Update Feed");
}

// Register event listeners for the "createPost" event, it works synchronusly
userEvent.addListener("createPost", saveToDB);
userEvent.addListener("createPost", pushNotifications);
userEvent.addListener("createPost", updateFeed);

// Trigger the "createPost" event
userEvent.createPost("this is my first post");
