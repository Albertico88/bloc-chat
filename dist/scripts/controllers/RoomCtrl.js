(function () {
  function RoomCtrl(Room, Message, $mdDialog) {
    var self = this;
    this.chatRooms = Room.all;
    this.currentRoom = null;
    // this.defaultRoom = firebase.database().ref().child("rooms").equalTo("-Kep7ykrTk74_OOqCQnl");

    this.setCurrentRoom = function(room) {
      this.currentRoom = room;
      this.messages = Message.getByRoomId(room.$id);
      console.log("Clicked on" + " " + room.name);
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
    self.status = " ";
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
        self.status = 'Hello there ' + result + '!';
        console.log(result);
      }, function() {
        self.status = 'You need a name in order to chat';
      });
      console.log(self.status);
    };


  }

angular
  .module('blocChat')
  .controller('RoomCtrl', ['Room', 'Message', '$mdDialog', RoomCtrl]);
})();
