(function () {
  function RoomCtrl(Room, Message, $mdDialog, BlocChatCookies) {
    var ctlr = this;
    this.chatRooms = Room.all;
    this.currentRoom = null;
    // this.defaultRoom = firebase.database().ref().child("rooms").equalTo("-Kep7ykrTk74_OOqCQnl");

    this.setCurrentRoom = function(room) {
      this.currentRoom = room;
      this.messages = Message.getByRoomId(room.$id);
    }

    this.addRoom = function(){
      Room.add(this.name);
      this.name = '';
    }

    this.newMessage = function(currentRoom){
      Message.send(this.content, currentRoom.$id);
      console.log('New message added to ' + currentRoom.name + ": " + this.content);
      this.content = " ";
    }

    // User Name Prompt
    ctlr.status = " ";
    this.showPrompt = function(event) {
      var confirm = $mdDialog.prompt()
        .title('Welcome to BlocChat')
        .textContent('Please enter your name')
        .placeholder('Your name here')
        .ariaLabel('Your name here')
        .targetEvent(event)
        .ok('Submit')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(function(result) {
        ctlr.status = 'Hello there ' + result + '!';
        console.log(result);
      }, function() {
        ctlr.status = 'You need a name in order to chat';
      });
      console.log(ctlr.status);
    };

    // Tie result from showPrompt to BlocChatCookies

  }

angular
  .module('blocChat')
  .controller('RoomCtrl', ['Room', 'Message', '$mdDialog', 'BlocChatCookies', RoomCtrl]);
})();
