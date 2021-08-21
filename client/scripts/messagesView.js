// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
    // adding event listener for click event to 'message' class
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    // Iterate through
    MessagesView.$chats.empty();
    index = Messages.length() - 1;
    while (index >= 0) {
      var message = Messages.retrieve(index);
      // when rendering the messagse, filtering the messages to go into each individual room.
      if (RoomsView.$select.val() === message.roomname) {
        MessagesView.renderMessage(message);
      }
      index -= 1;
    }

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // dont create a room called add a room
    var $message = MessageView.render(message);
    MessagesView.$chats.append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // after adding event listener to all message boxes, grab name of message sender
    // this referenes .message class div
    var friend = $(event.target).data('username');
    console.log(friend);
    // either add or remove friend from friends list array
    Friends.toggleStatus(friend.slice(0, -1));
    // re render messages if
    MessagesView.render();
    console.log('Friends List:', Friends._data);
  }

};