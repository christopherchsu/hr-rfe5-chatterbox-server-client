// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    if (RoomsView.$select.val() !== 'Add a room') {
      var message = {
        'username': App.username,
        'text': $('#message').val(),
        'roomname': RoomsView.$select.val(),
      };
    }
    Parse.create(message);
    console.log('click!');
    // after submitting message, update message list
    App.fetch();
    $('#message')[0].value = '';
    //$('#message')[0]); <-- the dom element
    //$('#message')); <-- jquery object
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};